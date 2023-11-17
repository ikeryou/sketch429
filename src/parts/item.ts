import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _key: number

  constructor(opt:any) {
    super(opt)

    this._c = opt.c

    this._key = opt.key
    this.addClass('material-symbols-outlined')

    this.useGPU(this.el)
  }

  protected _update():void {
    super._update();

    Tween.set(this.el, {
      x: Math.sin(this._key * 0.15 + this._c * 0.05) * 15,
      y: Math.sin(this._key * 0.15 + this._c * -0.089) * 15,
      rotationZ: Math.sin(this._key * 0.15 + this._c * 0.026) * 10
    })
  }
}







