/*using System.Linq;
using ecs;
using Script;
using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;
using UnityEngine;

namespace Dots
{
    [BurstCompile]
    [UpdateInGroup(typeof(InitializationSystemGroup))]
    public partial struct HybridSyncSystem  : ISystem
    { 
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {

        }
        
        [BurstCompile]
        public void OnDestroy(ref SystemState state)
        {
        } 
        
        public void OnUpdate(ref SystemState state)
        {
            var job = new SyncPosJob();
            job.Run();

            //更新坐标
            /*
            foreach (var (goTransform, trans) in SystemAPI.Query<HybridTransform, TransformAspect>())
            {
                goTransform.Transform.position = trans.Position;
                goTransform.Transform.rotation = trans.Rotation;
            }
            #1#
        }
        
       
        private partial struct SyncPosJob : IJobEntity
        {
            public float deltaTime;

            // In source generation, a query is created from the parameters of Execute().
            // Here, the query will match all entities having a LocalToWorldTransform component and RotationSpeed component.
            private void Execute(HybridTransform transform, Translation pos, Rotation rot)
            {
                
                transform.Transform.position = pos.Value;
                transform.Transform.rotation = rot.Value;
            }
        }
    }
}*/