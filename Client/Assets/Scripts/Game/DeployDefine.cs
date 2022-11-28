public class SoundDeploy : BaseDeploy
{
    public int id;
    public string resource;
    public float volume;
}

public class SceneDeploy : BaseDeploy
{
    public int id;
    public string name;
    public string path;
    public string sceneClass;
}