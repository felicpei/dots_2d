
using UnityEngine;

public static class Layers
{
    public const int Default  = 0;
    public const int TransparentFx = 1;
    public const int IgnoreRaycast = 2;
    public const int Water = 4;
    public const int UI = 5;
}

public static class LayersMask
{
    public const int All = 0x0fffffff;
    public const int None = 0;
    public const int Def = 1 << Layers.Default;
    public const int TransparentFx = 1 << Layers.TransparentFx;
    public const int IgnoreRaycast = 1 << Layers.IgnoreRaycast;
    public const int UI = 1 << Layers.UI;
    public const int AllUi = UI;
}

public static class Tags
{

}

