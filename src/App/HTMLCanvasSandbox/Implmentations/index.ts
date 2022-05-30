import { MouseEventData } from '../../lib';
import { HTMLCanvasSandbox } from '..';
import { SimpleCadSystem } from './SimpleCadSystem';
import { Playground } from './Playground';

export interface IImplmentation {
    MouseEventController(e: MouseEventData): void;
    Render(ctx: CanvasRenderingContext2D): void;
}
export class Implmentations {
    public sandbox: HTMLCanvasSandbox;
    public implementation: IImplmentation | undefined = undefined;
    constructor(sandbox: HTMLCanvasSandbox, typeOfImplementation: number = 2) {
        this.sandbox = sandbox;

        switch (typeOfImplementation) {
            case 0:
                this.implementation = new Playground(this);
                break;
            case 1:
                this.implementation = new SimpleCadSystem(this);
                break;
            case 2:
                import('./TypescriptBasic').then(({ TypescriptBasic }) => {
                    new TypescriptBasic();
                }).catch((err) => { console.log('Stop loading Typescript Basic.'); console.log(err); });
                break;
            default:
                break;
        }
    }
    public MouseEventController(e: MouseEventData) {
        if (this.implementation) { this.implementation.MouseEventController(e); }
    }
    public Render(ctx: CanvasRenderingContext2D) {
        if (this.implementation) { this.implementation.Render(ctx); }
    }
}