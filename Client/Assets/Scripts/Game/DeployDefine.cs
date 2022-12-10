public class SoundDeploy : BaseDeploy
{
    public int id;
    public string resource;
    public float volume;
}

public class MonsterDeploy : BaseDeploy
{
    public int id;
    public string name;
    public float AttackContTime;
    public float AttackRange;
    public float AttackInterval;
    public float MoveSpeed;
    public float Damage;
    public float DelayDestroyTime;
    public string Ani_Idle;
    public string Ani_Move;
    public string Ani_Attack;
    public string Ani_Die;
    public string Ani_Hit;
}