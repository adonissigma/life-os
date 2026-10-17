import {store} from '../../core/store.js';
import {today} from '../../core/util.js';
export default{id:'dashboard',title:'Tổng quan',icon:'🏠',data:false,render(el){
  const t=store.get('tasks',[]),h=store.get('habits',[]),j=store.get('journal',[]),d=today();
  const card=(i,l,v)=>`<div class="glass pad stat"><div>${i}</div><b>${v}</b><small>${l}</small></div>`;
  el.innerHTML=`<h1>🏠 Tổng quan</h1><div class="grid">${card('✅','Việc chưa xong',t.filter(x=>!x.done).length)}${card('🔁','Thói quen hôm nay',h.filter(x=>x.days.includes(d)).length+'/'+h.length)}${card('📓','Bài nhật ký',j.length)}</div>`;
}};
