using System;
using Unity.Entities;
using UnityEngine;

namespace Dots
{
    public class EntityGameObjectAuthoring : MonoBehaviour
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
}