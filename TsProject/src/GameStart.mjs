class JSGameStart {
    constructor(bindTo) {
        this.bindTo = bindTo;
        this.bindTo.JsUpdate = () => this.onUpdate();
        this.bindTo.JsOnDestroy = () => this.onDestroy();


        //game start
    }
    onUpdate() {
       
    }
    onDestroy() {
        console.log('ongame onDestroy...');
    }
}
export function init(bindTo) {
    new JSGameStart(bindTo);
}
