using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public static class MissionCache
{
    public class MonsterMaterialInfo
    {
        public int MonsterId;
        public Material Idle;
        public Material Move;
        public Material Attack;
        public Material Die;
        public Material Hit;
    }

    public static List<MonsterMaterialInfo> MonsterMaterials = new();

    //预加载材质动作
    public static void PreloadMission(Action onFinished)
    {
        GlobalCoroutine.StartCoroutine(DoPreload(onFinished));
    }
    
    private static IEnumerator DoPreload(Action onFinished)
    {
        //缓存材质
        var monsterTab = TableMgr.GetTable<MonsterDeploy>();
        foreach (var deploy in monsterTab)
        {
            
            var info = new MonsterMaterialInfo
            {
                MonsterId = deploy.id
            };
            MonsterMaterials.Add(info);
            
            yield return XResource.LoadObjectAsync(deploy.Ani_Idle, obj =>
            {
                info.Idle = obj as Material;
            });
            
            yield return XResource.LoadObjectAsync(deploy.Ani_Move, obj =>
            {
                info.Move = obj as Material;
            });
            
            yield return XResource.LoadObjectAsync(deploy.Ani_Attack, obj =>
            {
                info.Attack = obj as Material;
            });
            
            yield return XResource.LoadObjectAsync(deploy.Ani_Die, obj =>
            {
                info.Die = obj as Material;
            });
            
            yield return XResource.LoadObjectAsync(deploy.Ani_Hit, obj =>
            {
                info.Hit = obj as Material;
            });

            Dbg.Log("緩存怪物材質完成, id：" + deploy.id);
        }
        
        onFinished.Invoke();
    }

    public static void ClearCache()
    {
        Debug.LogError("todo clear cache");
    }
}