import { HTMLCanvasSandbox as HTMLCanvasSandboxV1 } from './HTMLCanvasSandbox';
export class App {
    id: string;
    sandBox: HTMLCanvasSandboxV1;
    hostDiv: HTMLElement;
    div: HTMLElement;
    version: number = 1;
    static Init(id: string = 'SandBox') {
        new App(id, 1);
    }
    constructor(id: string = 'SandBox', version: number = 1) {
        this.id = id;
        this.version = version;
        this.Init();
    }
    private Init() {
        switch (this.version) {
            case 1:
                this.sandBox = new HTMLCanvasSandboxV1(this.id);
                break;
        }
    }
}