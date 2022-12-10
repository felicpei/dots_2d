import { UnityEngine } from "csharp";

export abstract class BaseScene {

    constructor() {
    }
    
    public abstract onInit();
    public abstract onEnter();
    public abstract onLeave();

    public onDestroy() {

    }
}