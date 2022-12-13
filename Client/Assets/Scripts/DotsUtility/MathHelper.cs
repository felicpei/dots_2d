using Unity.Mathematics;

namespace Dots
{
    public static class DotsHelper
    {
        //得到面朝方向
        public static float GetHeading(float3 objectPosition, float3 targetPosition)
        {
            var x = objectPosition.x - targetPosition.x;
            var y = objectPosition.z - targetPosition.z;
            return math.atan2(x, y) + math.PI;
        }

        public static quaternion HeadingToTarget(float3 objectPosition, float3 targetPosition)
        {
            return quaternion.RotateY(GetHeading(objectPosition, targetPosition));
        }
    }
}