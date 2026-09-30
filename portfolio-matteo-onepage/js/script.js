const $ = s => document.querySelector(s);
const mk = (tag, cls, html) => { const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e; };

$("#intro").textContent = portfolio.intro;
portfolio.resume.forEach(x => {
  const e=mk("article","summary",`<strong>${x.titre}</strong><span>${x.texte}</span>`);
  $("#summaryCards").appendChild(e);
});
portfolio.parcours.forEach(x => $("#timeline").appendChild(mk("article","",`<span class="date">${x.date}</span><h3>${x.titre}</h3><p>${x.lieu}</p>`)));
portfolio.experiences.forEach(x => $("#missions").appendChild(mk("article","experience-card", `<span class="tag">${x.titre}</span><h3>${x.entreprise}</h3><p>${x.texte}</p><strong class="experience-year">${x.annee}</strong>`)));
portfolio.projets.forEach(x => {
  const chips=x.technologies.map(t=>`<span>${t}</span>`).join("");
  $("#projectGrid").appendChild(mk("article","project",`<div class="project-visual">${x.image ? `<img src="${x.image}" alt="${x.titre}">` : x.icone}</div><div class="project-body"><span class="tag">${x.statut}</span><h3>${x.titre}</h3><p>${x.description}</p><div class="chips">${chips}</div></div>`));
});
portfolio.competences.forEach(x => $("#skillGrid").appendChild(mk("article","skill",`<h3>${x.titre}</h3><ul>${x.items.map(i=>`<li>${i}</li>`).join("")}</ul>`)));
portfolio.veille.forEach(x => $("#watchList").appendChild(mk("article","watch-item",`<small>${x.date}</small><strong>${x.titre}</strong><p>${x.resume}</p>`)));

$("#mailBtn").href="mailto:"+portfolio.email;
$("#year").textContent=new Date().getFullYear();
$(".menu-btn").onclick=()=>$("#nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));

const sections=[...document.querySelectorAll("main section")];
const links=[...document.querySelectorAll("nav a")];
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>obs.observe(s));
