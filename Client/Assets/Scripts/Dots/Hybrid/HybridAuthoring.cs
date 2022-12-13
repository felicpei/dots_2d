using System;
using Unity.Entities;
using UnityEngine;

namespace Dots
{
    public class HybridAuthoring : MonoBehaviour
    {
        private Entity _entity;
        private World _world;

        //分配Entity
        public void AssignEntity(Entity entity, World world)
        {
            _entity = entity;
            _world = world;
        }

        //脚本被destroy时候, 同时destroyEntity
        public void OnDestroy()
        {
            if (_world.IsCreated && _world.EntityManager.Exists(_entity))
            {
                _world.EntityManager.DestroyEntity(_entity);
            }
        }
    }
    
    //初始化tag，需要使用Hybrid机制的挂在该Component
    public class HybridInitTag : IComponentData
    {
        public GameObject Prefab;
    }
    
    public class HybridTransform : ICleanupComponentData
    {
        public Transform Value;
    }

    public class HybridAnimator : ICleanupComponentData
    {
        public Animator Value;
    }
}