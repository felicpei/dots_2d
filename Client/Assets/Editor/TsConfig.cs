using Puerts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using UnityEngine;

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class TsConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            var list = new List<Type>()
            {
                typeof(Debug),
                typeof(Vector3),
                typeof(Vector2),
                typeof(List<int>),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(UnityEngine.Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(Behaviour),
                typeof(MonoBehaviour),
                typeof(UnityEngine.SceneManagement.LoadSceneMode),
                typeof(AsyncOperation),
                
                typeof(JsManager),
                typeof(Dbg),
                typeof(FUIHelper),
                typeof(XGameSetting),
                typeof(XResource),
                typeof(XPlatform),
                typeof(PauseHelper),
                typeof(TimeScaleHelper),
                typeof(Sound),
                typeof(MissionCache),
                typeof(TouchMgr),
            };

            List<string> namespaces = new List<string>()
            {
                "FairyGUI",
                "FairyGUI.Utils",
            };

            Assembly[] ass = AppDomain.CurrentDomain.GetAssemblies();
            list.AddRange((from assembly in ass
                where !(assembly.ManifestModule is System.Reflection.Emit.ModuleBuilder)
                from type in assembly.GetExportedTypes()
                where type.Namespace != null && namespaces.Contains(type.Namespace) && !isExcluded(type)
                      && type.BaseType != typeof(MulticastDelegate) && !type.IsEnum
                select type));
            return list;
        }
    }

    static bool isExcluded(Type type)
    {
        return false;
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }

    [Filter]
    static bool Filter(MemberInfo memberInfo)
    {
        return memberInfo.Name == "runInEditMode" ||
               memberInfo.Name == "get_runInEditMode" ||
               memberInfo.Name == "set_runInEditMode";
    }
}