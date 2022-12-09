import { UIManager } from "./base/ui/UIManager";

export class GameConfig {

    public static debug: boolean = true;
    public static realmServerIP: string = "127.0.0.1";
    public static realmServerPort: number = 9001;

}

//单例工具类
export class G {
    public static UIManager = UIManager.Instance(UIManager);
}
