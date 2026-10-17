// Lưu dữ liệu trong trình duyệt (localStorage). Mỗi module dùng 1 key riêng = id module.
const P='lifeos:';
export const store={
  get(k,d){try{const v=localStorage.getItem(P+k);return v?JSON.parse(v):d}catch{return d}},
  set(k,v){localStorage.setItem(P+k,JSON.stringify(v))},
  keys(){return Object.keys(localStorage).filter(k=>k.startsWith(P)).map(k=>k.slice(P.length))}
};
