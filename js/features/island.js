// Dynamic Island: island.show('nội dung', 2000)
const el=()=>document.getElementById('island');
let t;
export const island={show(text,ms=2000){const e=el();e.textContent=text;e.classList.add('on');clearTimeout(t);t=setTimeout(()=>e.classList.remove('on'),ms)}};
