import {store} from '../../core/store.js';
import {esc,today} from '../../core/util.js';
const day=d=>d.toLocaleDateString('sv');
function streak(days){let n=0,d=new Date();if(!days.includes(day(d)))d.setDate(d.getDate()-1);
  while(days.includes(day(d))){n++;d.setDate(d.getDate()-1)}return n}
export default{id:'habits',title:'Thói quen',icon:'🔁',render(el){
  const draw=()=>{const items=store.get('habits',[]),t=today();
    el.innerHTML=`<h1>🔁 Thói quen</h1><form class="glass row"><input name="t" placeholder="VD: Uống 2 lít nước" required><button>Thêm</button></form>`+
    items.map(i=>`<div class="glass item" data-id="${i.id}"><input type="checkbox" ${i.days.includes(t)?'checked':''}><span>${esc(i.t)}</span><small>🔥 ${streak(i.days)}</small><button class="del">✕</button></div>`).join('');
    el.querySelector('form').onsubmit=e=>{e.preventDefault();store.set('habits',[...items,{id:Date.now(),t:e.target.t.value,days:[]}]);draw()};
    el.querySelectorAll('.item').forEach(r=>{const k=+r.dataset.id;
      r.querySelector('input').onchange=()=>{store.set('habits',items.map(i=>i.id===k?{...i,days:i.days.includes(t)?i.days.filter(d=>d!==t):[...i.days,t]}:i));draw()};
      r.querySelector('.del').onclick=()=>{store.set('habits',items.filter(i=>i.id!==k));draw()}});
  };draw();
}};
