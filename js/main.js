import {modules} from './modules.config.js';
import {applySettings} from './core/settings.js';
import {island} from './features/island.js';
applySettings();
const nav=document.getElementById('nav'),view=document.getElementById('view');
nav.innerHTML=modules.map(m=>`<a href="#${m.id}" data-id="${m.id}">${m.icon}<span>${m.title}</span></a>`).join('');
function route(){
  const m=modules.find(x=>x.id===location.hash.slice(1))||modules[0];
  nav.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.dataset.id===m.id));
  view.innerHTML='';
  try{m.render(view,{modules})}catch(e){view.textContent='Lỗi module '+m.id+': '+e.message}
}
addEventListener('hashchange',route);route();island.show('Life OS sẵn sàng ✨');
