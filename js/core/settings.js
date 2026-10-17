import {store} from './store.js';
const D={alpha:.12,blur:24,accent:'#0a84ff',light:false};
export const getSettings=()=>({...D,...store.get('settings',{})});
export function applySettings(){
  const s=getSettings(),r=document.documentElement;
  r.style.setProperty('--alpha',s.alpha);r.style.setProperty('--blur',s.blur+'px');r.style.setProperty('--accent',s.accent);
  r.classList.toggle('light',s.light);
}
export function saveSettings(p){store.set('settings',{...getSettings(),...p});applySettings()}
