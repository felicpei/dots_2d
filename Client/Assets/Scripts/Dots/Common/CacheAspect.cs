using System;
using Unity.Collections;
using Unity.Entities;
using Unity.Rendering;
using UnityEngine;
using UnityEngine.Rendering;

namespace Dots
{
    public enum EMonsterAni
    {
        Idle,
        Move,
        Attack,
        Die,
        Hit
    }
    
    public readonly partial struct CacheAspect : IAspect
    {
        private readonly RefRO<CacheMonsterMaterials> _monsterMaterials;

        public BatchMeshID MonsterMeshId => _monsterMaterials.ValueRO.MeshId;

        public BatchMaterialID GetMaterialId(int monsterId, EMonsterAni actionId)
        {
            //get monsterIdx by monsterId
            var monsterIndex = 0;
            for (int i = 0; i < _monsterMaterials.ValueRO.MonsterIdIndex.Length; i++)
            {
                if (_monsterMaterials.ValueRO.MonsterIdIndex[i] == monsterId)
                {
                    monsterIndex = i;
                    break;
                }
            }

            switch (actionId)
            {
                case EMonsterAni.Idle:
                    return _monsterMaterials.ValueRO.Idle[monsterIndex];
                case EMonsterAni.Move:
                    return _monsterMaterials.ValueRO.Move[monsterIndex];
                case EMonsterAni.Attack:
                    return _monsterMaterials.ValueRO.Attack[monsterIndex];
                case EMonsterAni.Die:
                    return _monsterMaterials.ValueRO.Die[monsterIndex];
                case EMonsterAni.Hit:
                    return _monsterMaterials.ValueRO.Hit[monsterIndex];
                default:
                    throw new Exception("GetMaterialId Error");
            }
        }
    }
}