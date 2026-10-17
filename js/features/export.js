// Xuất / nhập dữ liệu: toàn bộ hoặc từng module
import {store} from '../core/store.js';
import {island} from './island.js';
function dl(name,data){const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download=name;a.click();island.show('Đã xuất '+name)}
export const exportAll=()=>dl('lifeos-all.json',Object.fromEntries(store.keys().map(k=>[k,store.get(k)])));
export const exportModule=id=>dl(`lifeos-${id}.json`,store.get(id,[]));
export const importAll=f=>f.text().then(t=>{const o=JSON.parse(t);for(const k in o)store.set(k,o[k]);island.show('Đã nhập dữ liệu')});
