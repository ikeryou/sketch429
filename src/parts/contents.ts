import { Color } from "three";
import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";
import { Util } from "../libs/util";
import { Func } from "../core/func";
import { Tween } from "../core/tween";
import { HSL } from "../libs/hsl";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    const num = 10
    for (let i = 0; i < num; i++) {
      const div = document.createElement('div')
      div.classList.add('js-item')
      this.el.appendChild(div)
      div.innerHTML = opt.icon
    }

    const col = new Color(Util.random(0, 1), Util.random(0, 1), Util.random(0, 1))
    const hsl = new HSL()
    col.getHSL(hsl)


    const c = Util.randomInt(0, 1000)
    const max = this.qsAll('.js-item').length
    this.qsAll('.js-item').forEach((el:HTMLElement, i:number) => {
      new Item({
        el: el,
        key: i,
        c: c
      })

      hsl.l = Util.map(i, 0.25, 1, 0, max)
      const col2 = new Color().setHSL(hsl.h, hsl.s, hsl.l)
      el.style.color = col2.getStyle()
    })

    Tween.set(this.el, {
      fontSize: Func.val(Util.random(5, 30), Util.random(2, 20)) + 'vw'
    })

    this._resize()
  }

  protected _update():void {
    super._update()
  }

  protected _resize(): void {
    super._resize()

    const sw = Func.sw()
    const sh = Func.sh()
    Tween.set(this.el, {
      x: Util.random(-sw * 0.1, sw * 1.1),
      y: Util.random(-sh * 0.1, sh * 1.1),
    })
  }
}