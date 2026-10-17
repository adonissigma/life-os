import {getSettings,saveSettings} from '../../core/settings.js';
import {exportAll,exportModule,importAll} from '../../features/export.js';
export default{id:'settings',title:'Cài đặt',icon:'⚙️',data:false,render(el,{modules}){
  const s=getSettings();
  el.innerHTML=`<h1>⚙️ Cài đặt</h1><div class="glass pad">
  <label>Độ trong suốt <input type="range" id="alpha" min="0" max="60" value="${s.alpha*100}"></label>
  <label>Độ mờ nền <input type="range" id="blur" min="0" max="60" value="${s.blur}"></label>
  <label>Màu chủ đạo <input type="color" id="accent" value="${s.accent}"></label>
  <label>Giao diện sáng <input type="checkbox" id="light" ${s.light?'checked':''}></label></div>
  <div class="glass pad"><h3>Xuất / nhập dữ liệu</h3><button id="all">Xuất tất cả</button>
  ${modules.filter(m=>m.data!==false).map(m=>`<button data-x="${m.id}">Xuất ${m.title}</button>`).join('')}
  <label class="btn">Nhập file<input type="file" id="imp" hidden></label></div>`;
  const q=i=>el.querySelector('#'+i);
  const up=()=>saveSettings({alpha:q('alpha').value/100,blur:+q('blur').value,accent:q('accent').value,light:q('light').checked});
  ['alpha','blur','accent','light'].forEach(i=>q(i).oninput=up);
  q('all').onclick=exportAll;
  el.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>exportModule(b.dataset.x));
  q('imp').onchange=e=>importAll(e.target.files[0]);
}};
