using Unity.Entities;
using UnityEngine;

namespace Dots
{
    public class GameObjectInitTag : IComponentData
    {
        public GameObject Prefab;
    }
    
    public class GameObjectTransform : ICleanupComponentData
    {
        public Transform Transform;
    }

    public class GameObjectAnimator : IComponentData
    {
        public Animator Animator;
    }
}