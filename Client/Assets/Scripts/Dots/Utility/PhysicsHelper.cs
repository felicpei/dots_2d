using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Jobs;
using Unity.Mathematics;
using Unity.Physics;

//Dots Physics 工具类
//Dots的Physics只可以用于Dots, 无法与非Dots内容交互
namespace Dots
{
    public static class PhysicsHelper
    {
        [BurstCompile]
        public struct RaycastJob : IJobParallelFor
        {
            [ReadOnly] public CollisionWorld world;
            [ReadOnly] public NativeArray<RaycastInput> inputs;
            public NativeArray<RaycastHit> results;

            public unsafe void Execute(int index)
            {
                world.CastRay(inputs[index], out var hit);
                results[index] = hit;
            }
        }

        public static JobHandle ScheduleBatchRayCast(CollisionWorld world, NativeArray<RaycastInput> inputs, NativeArray<RaycastHit> results)
        {
            var rcj = new RaycastJob
            {
                inputs = inputs,
                results = results,
                world = world
            }.Schedule(inputs.Length, 4);
            return rcj;
        }

        public static void SingleRayCast(CollisionWorld world, RaycastInput input, ref RaycastHit result)
        {
            var rayCommands = new NativeArray<RaycastInput>(1, Allocator.TempJob);
            var rayResults = new NativeArray<RaycastHit>(1, Allocator.TempJob);
            rayCommands[0] = input;
            var handle = ScheduleBatchRayCast(world, rayCommands, rayResults);
            handle.Complete();
            result = rayResults[0];
            rayCommands.Dispose();
            rayResults.Dispose();
        }

        public static Entity Raycast(float3 rayFrom, float3 rayTo)
        {
            // Set up Entity Query to get PhysicsWorldSingleton
            // If doing this in SystemBase or ISystem, call GetSingleton<PhysicsWorldSingleton>()/SystemAPI.GetSingleton<PhysicsWorldSingleton>() directly.
            var builder = new EntityQueryBuilder(Allocator.Temp).WithAll<PhysicsWorldSingleton>();

            var singletonQuery = World.DefaultGameObjectInjectionWorld.EntityManager.CreateEntityQuery(builder);
            var collisionWorld = singletonQuery.GetSingleton<PhysicsWorldSingleton>().CollisionWorld;
            singletonQuery.Dispose();

            var input = new RaycastInput
            {
                Start = rayFrom,
                End = rayTo,
                Filter = new CollisionFilter
                {
                    BelongsTo = ~0u,
                    CollidesWith = ~0u, // all 1s, so all layers, collide with everything
                    GroupIndex = 0
                }
            };

            var haveHit = collisionWorld.CastRay(input, out var hit);
            if (haveHit)
            {
                return hit.Entity;
            }

            return Entity.Null;
        }

        public static unsafe Entity SphereCast(float3 rayFrom, float3 rayTo, float radius)
        {
            // Set up Entity Query to get PhysicsWorldSingleton
            // If doing this in SystemBase or ISystem, call GetSingleton<PhysicsWorldSingleton>()/SystemAPI.GetSingleton<PhysicsWorldSingleton>() directly.
            var builder = new EntityQueryBuilder(Allocator.Temp).WithAll<PhysicsWorldSingleton>();

            var singletonQuery = World.DefaultGameObjectInjectionWorld.EntityManager.CreateEntityQuery(builder);
            var collisionWorld = singletonQuery.GetSingleton<PhysicsWorldSingleton>().CollisionWorld;
            singletonQuery.Dispose();

            var filter = new CollisionFilter
            {
                BelongsTo = ~0u,
                CollidesWith = ~0u, // all 1s, so all layers, collide with everything
                GroupIndex = 0
            };

            var sphereGeometry = new SphereGeometry { Center = float3.zero, Radius = radius };
            var sphereCollider = SphereCollider.Create(sphereGeometry, filter);

            var input = new ColliderCastInput
            {
                Collider = (Collider*)sphereCollider.GetUnsafePtr(),
                Orientation = quaternion.identity,
                Start = rayFrom,
                End = rayTo
            };

            var hit = new ColliderCastHit();
            var haveHit = collisionWorld.CastCollider(input, out hit);
            if (haveHit)
            {
                return hit.Entity;
            }

            sphereCollider.Dispose();

            return Entity.Null;
        }
    }
}