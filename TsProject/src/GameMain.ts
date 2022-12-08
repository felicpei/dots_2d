import { Dbg, JsManager } from 'csharp';
import { GameConfig } from './GameConfig';

class GameMain{


    constructor() {
        JsManager.JsOnApplicationQuit = () => this.onApplicationQuit();
        JsManager.JsOnDispose = () => this.onDispose();
    }

    public async start() {
        
        try{
            Dbg.Log("###### 初始化TS: Game start in JS....");
            Dbg.Log("Port:" + GameConfig.realmServerPort);

        }catch(ex){
            Dbg.LogError(ex);
        }

    }

    public onApplicationQuit():void {

        Dbg.Log("Game onApplicationQuit in JS....");
    }

    public onDispose():void {
        
        Dbg.Log("Game onDispose in JS....");
    }
    
}

new GameMain().start();