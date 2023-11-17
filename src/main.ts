
import { Conf } from './core/conf'
import { Util } from './libs/util'
import { Contents } from './parts/contents'
import './style.css'


const num = 40
for(let i = 0; i < num; i++) {
  const div = document.createElement('div')
  div.classList.add('js-main')
  document.body.appendChild(div)
}

const icon = Conf.instance.ICONS.split(' ')
document.querySelectorAll('.js-main').forEach((el:any) => {
  const key = ~~(Util.randomInt(0, icon.length - 1) / 2) * 2
  new Contents({
    el: el,
    icon: icon[key]
  })
})

