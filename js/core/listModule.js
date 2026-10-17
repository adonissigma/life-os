// Khuôn tạo module dạng danh sách (thêm/xóa/tick). Task & Journal dùng chung.
import {store} from './store.js';
import {esc,today} from './util.js';
import {island} from '../features/island.js';
export function listModule({id,title,icon,placeholder,multiline=false,check=true}){
  return {id,title,icon,render(el){
    const draw=()=>{
      const items=store.get(id,[]);
      el.innerHTML=`<h1>${icon} ${title}</h1>
      <form class="glass row">${multiline?`<textarea name="t" rows="4" placeholder="${placeholder}" required></textarea>`:`<input name="t" placeholder="${placeholder}" required>`}<button>Thêm</button></form>`+
      items.map(i=>`<div class="glass item ${i.done?'done':''}" data-id="${i.id}">${check?`<input type="checkbox" ${i.done?'checked':''}>`:`<small>${i.date}</small>`}<span>${esc(i.t)}</span><button class="del">✕</button></div>`).join('');
      el.querySelector('form').onsubmit=e=>{e.preventDefault();
        store.set(id,[{id:Date.now(),t:e.target.t.value,done:false,date:today()},...items]);island.show('Đã thêm');draw()};
      el.querySelectorAll('.item').forEach(r=>{const k=+r.dataset.id;
        r.querySelector('.del').onclick=()=>{store.set(id,items.filter(i=>i.id!==k));draw()};
        const c=r.querySelector('input');
        if(c)c.onchange=()=>{store.set(id,items.map(i=>i.id===k?{...i,done:!i.done}:i));draw()}});
    };
    draw();
  }};
}
