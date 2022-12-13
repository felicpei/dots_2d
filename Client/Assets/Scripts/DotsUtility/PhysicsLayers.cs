namespace Dots
{
    public static class PhysicsLayers
    {
        public const int Ground = 1 << 0;
        public const int Obstacle = 1 << 1;
        public const int Monster = 1 << 2;

        public static uint GetFilterResult(int layer)
        {
            return unchecked((uint)layer);
        }
        
        /*result |= 1 << 1;
        result |= 1 << 2;
        result |= 1 << 3;
        result |= 1 << 4;
        result |= 1 << 5;
        result |= 1 << 6;
        result |= (Category07 ? 1 : 0) << 7;
        result |= (Category08 ? 1 : 0) << 8;
        result |= (Category09 ? 1 : 0) << 9;
        result |= (Category10 ? 1 : 0) << 10;
        result |= (Category11 ? 1 : 0) << 11;
        result |= (Category12 ? 1 : 0) << 12;
        result |= (Category13 ? 1 : 0) << 13;
        result |= (Category14 ? 1 : 0) << 14;
        result |= (Category15 ? 1 : 0) << 15;
        result |= (Category16 ? 1 : 0) << 16;
        result |= (Category17 ? 1 : 0) << 17;
        result |= (Category18 ? 1 : 0) << 18;
        result |= (Category19 ? 1 : 0) << 19;
        result |= (Category20 ? 1 : 0) << 20;
        result |= (Category21 ? 1 : 0) << 21;
        result |= (Category22 ? 1 : 0) << 22;
        result |= (Category23 ? 1 : 0) << 23;
        result |= (Category24 ? 1 : 0) << 24;
        result |= (Category25 ? 1 : 0) << 25;
        result |= (Category26 ? 1 : 0) << 26;
        result |= (Category27 ? 1 : 0) << 27;
        result |= (Category28 ? 1 : 0) << 28;
        result |= (Category29 ? 1 : 0) << 29;
        result |= (Category30 ? 1 : 0) << 30;
        result |= (Category31 ? 1 : 0) << 31;*/
    }
}