(async()=>{
 const root=document.getElementById('root'); if(!root) return;
 function card(d){ const el=document.createElement('div'); el.className='card'; el.innerHTML=`<h3>${d.title}</h3><div class="muted">${d.subtitle||''}</div>`; return el; }
 async function load(){
  try{ const res=await window.PP.fetch('/_api/po_desafios?$select=po_nome,po_nivel,po_status&$top=6'); if(!res.ok) throw new Error(await res.text());
        const data=await res.json(); return data.value.map(x=>({title:x.po_nome||'Desafio',subtitle:`Nível ${x.po_nivel??'-'}`})); }
  catch(e){ return [ {title:'Desafio React',subtitle:'Nível 3'}, {title:'Desafio UX',subtitle:'Nível 2'}, {title:'Desafio Dados',subtitle:'Nível 4'} ]; }
 }
 const items=await load(); root.innerHTML=''; items.forEach(i=>root.appendChild(card(i)));
})();