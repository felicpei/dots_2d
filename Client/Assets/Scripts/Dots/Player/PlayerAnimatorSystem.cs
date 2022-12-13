using Unity.Entities;
using Unity.Transforms;
using UnityEngine;

//更新player hybrid animator
namespace Dots
{
    [RequireMatchingQueriesForUpdate]
    public partial class PlayerAnimatorSystem : SystemBase
    {
        private static readonly int InMove = Animator.StringToHash("InMove");

        protected override void OnUpdate()
        {
            Entities.WithoutBurst().WithAll<PlayerState>().ForEach((HybridAnimator animator, in PlayerState player) =>
            {
                animator.Value.SetBool(InMove, player.InMove);
            }).Run();
        }
    }
}