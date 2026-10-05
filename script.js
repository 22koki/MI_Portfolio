
const themeToggle=document.getElementById('themeToggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  themeToggle.textContent=document.body.classList.contains('dark')?'☾':'☀';
});

const navLinks=[...document.querySelectorAll('.topnav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{threshold:.35});
sections.forEach(s=>observer.observe(s));

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform='perspective(900px) rotateY('+(x*4)+'deg) rotateX('+(-y*4)+'deg) translateY(-6px)';
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

const projectData={
  spa:{
    type:'WEB APP · BUSINESS SYSTEM',
    title:'Spa Management System',
    summary:'A full-stack spa operations platform built to make booking, therapist scheduling, payments and client service easier to manage from one place.',
    problem:'Spa teams often juggle bookings, therapist availability, client history and payments across separate tools. This product brings those flows together into a structured system.',
    stack:['Python','Django REST','React','PostgreSQL','JWT','M-PESA'],
    highlights:['Role-based booking and operational access','Appointment overlap prevention and scheduling safeguards','Multiple payment paths with receipt workflows'],
    repo:'https://github.com/22koki/Spa_Management',
    page:'cases/spa.html'
  },
  restaurant:{
    type:'WEB APP · AUTOMATION',
    title:'Restaurant Automation System',
    summary:'An operational platform for restaurants covering ordering, menu data, inventory, purchasing, invoices and core workflow automation.',
    problem:'Restaurant operations can become fragmented between front-of-house, kitchen, stock and finance. The system is designed to connect those workflows in one product.',
    stack:['Django REST','React','REST APIs','Inventory workflows'],
    highlights:['Orders and menu management','Inventory and purchasing workflows','Foundation for POS, kitchen and reporting automation'],
    repo:'https://github.com/22koki/Restaurant-_Automation_systm',
    page:'cases/restaurant.html'
  },
  plant:{
    type:'AI PRODUCT · AGRITECH',
    title:'Plant Doctor AR',
    summary:'An AI-assisted plant health product for diagnosing likely diseases, pests and environmental problems from plant images.',
    problem:'Farmers and home growers often notice visible symptoms before they know the likely cause. This app turns visual symptoms into structured guidance, confidence levels and treatment research.',
    stack:['Django','React','Vision AI','Image analysis','Research layer'],
    highlights:['Camera/upload based plant scanning','Likely condition, confidence and severity output','Treatment, prevention and source-oriented research flow'],
    repo:'https://github.com/22koki/Plant_DR',
    page:'cases/plant-doctor.html'
  },
  earth:{
    type:'INTERACTIVE PRODUCT',
    title:'One Minute From Earth',
    summary:'A visual travel-discovery experience designed to make exploring world destinations feel playful, fast and immersive.',
    problem:'Typical travel content can feel static. This product uses short discovery loops, passport mechanics and destination storytelling to make exploration more memorable.',
    stack:['React','Vite','Local storage','Interactive UX'],
    highlights:['Destination discovery and Surprise Me flow','Digital passport and favorites/history','Culture, food, facts and place exploration'],
    repo:'https://github.com/22koki/One_Min_From_Earth'
  },
  tuko:{
    type:'MARKETPLACE · LOCAL COMMERCE',
    title:'TUKO Market',
    summary:'A location-aware marketplace connecting customers with nearby vendors and riders for convenient grocery and local-item ordering.',
    problem:'Market shopping can be crowded, time-consuming and hard to access. TUKO Market is designed around nearby vendors, fulfillment and last-mile delivery.',
    stack:['Django','React','PostgreSQL','JWT','M-PESA','WhatsApp'],
    highlights:['Customer, vendor, rider and admin roles','Pickup/delivery with vendor confirmation','M-PESA and WhatsApp-centered commerce workflows'],
    repo:'https://github.com/22koki/TUKO_Market',
    page:'cases/tuko.html'
  },
  property:{
    type:'BUSINESS SYSTEM · CONCEPT',
    title:'Property Management System',
    summary:'A management concept for property owners and teams to centralize tenants, units, rent, maintenance and reporting.',
    problem:'Property teams often rely on spreadsheets and chat threads to track tenants, payments and maintenance. The concept focuses on bringing these operational records together.',
    stack:['Database design','Dashboards','Workflow automation'],
    highlights:['Tenant and unit management','Rent and payment tracking','Maintenance requests and reporting'],
    repo:'https://github.com/22koki'
  },
  hospital:{
    type:'BUSINESS SYSTEM · DATABASE',
    title:'Hospital Management System',
    summary:'A database-driven hospital operations concept covering patient records, appointments, billing and day-to-day administrative workflows.',
    problem:'Healthcare administration depends on reliable structured information. This project direction focuses on centralizing the operational data needed by staff.',
    stack:['Database systems','Business logic','Administrative workflows'],
    highlights:['Patient and appointment records','Billing and operational data','Structured hospital workflow foundation'],
    repo:'https://github.com/22koki'
  },
  riverstone:{
    type:'WEBSITE · DIGITAL MARKETING',
    title:'Riverstone Finishes & Landscapes',
    summary:'A web and marketing direction for a landscaping business focused on presenting services clearly, improving brand perception and supporting lead generation.',
    problem:'Service businesses need more than a pretty website. They need clear offers, visual proof, search-friendly structure and marketing content that can turn attention into enquiries.',
    stack:['Web design','Content strategy','SEO thinking','Social media','Brand presentation'],
    highlights:['Service-led website structure','Landscaping content and campaign ideas','Conversion-focused messaging and visual positioning'],
    repo:'https://github.com/22koki'
  },
  ghost:{
    type:'GAME PRODUCT · CREATIVE DEVELOPMENT',
    title:'Tiny Ghost Hotel',
    summary:'A cozy-creepy hotel management game concept with themed rooms, supernatural guests, progression and a distinctive Victorian haunted-hotel identity.',
    problem:'The project explores how product systems, progression and art direction can work together to create a memorable interactive experience.',
    stack:['Godot','Game systems','Creative direction','UI design'],
    highlights:['Persistent progression and themed rooms','Supernatural guest and hotel mechanics','Strong visual direction with atmospheric presentation'],
    repo:'https://github.com/22koki/tiny-ghost-hotel'
  }
};

const modal=document.getElementById('projectModal');
const modalTitle=document.getElementById('modalTitle');
const modalType=document.getElementById('modalType');
const modalSummary=document.getElementById('modalSummary');
const modalProblem=document.getElementById('modalProblem');
const modalStack=document.getElementById('modalStack');
const modalHighlights=document.getElementById('modalHighlights');
const modalRepo=document.getElementById('modalRepo');
const modalCase=document.getElementById('modalCase');

function openProject(key){
  const data=projectData[key];
  if(!data) return;
  modalType.textContent=data.type;
  modalTitle.textContent=data.title;
  modalSummary.textContent=data.summary;
  modalProblem.textContent=data.problem;
  modalStack.innerHTML=data.stack.map(item=>'<span>'+item+'</span>').join('');
  modalHighlights.innerHTML=data.highlights.map(item=>'<div>'+item+'</div>').join('');
  modalRepo.href=data.repo;
  if(data.page){modalCase.href=data.page;modalCase.style.display='inline-flex';}else{modalCase.style.display='none';}
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function closeProject(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click',e=>{
    if(e.target.closest('a')) return;
    openProject(card.dataset.project);
  });
});
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeProject));

const filterBtns=[...document.querySelectorAll('.filter-btn')];
const projectCards=[...document.querySelectorAll('.project-card')];
function setFilter(filter){
  filterBtns.forEach(btn=>btn.classList.toggle('active',btn.dataset.filter===filter));
  projectCards.forEach(card=>{
    const categories=(card.dataset.category||'').split(' ');
    card.classList.toggle('hidden',filter!=='all'&&!categories.includes(filter));
  });
}
filterBtns.forEach(btn=>btn.addEventListener('click',()=>setFilter(btn.dataset.filter)));

const modeBtns=[...document.querySelectorAll('.mode-btn')];
document.body.dataset.mode='client';
modeBtns.forEach(btn=>btn.addEventListener('click',()=>{
  modeBtns.forEach(b=>b.classList.toggle('active',b===btn));
  document.body.dataset.mode=btn.dataset.mode;
}));

const commandPalette=document.getElementById('commandPalette');
const commandBtn=document.getElementById('commandBtn');
const commandInput=document.getElementById('commandInput');
function openCommand(){
  commandPalette.classList.add('open');
  commandPalette.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  setTimeout(()=>commandInput.focus(),50);
}
function closeCommand(){
  commandPalette.classList.remove('open');
  commandPalette.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
commandBtn.addEventListener('click',openCommand);
document.querySelectorAll('[data-close-command]').forEach(el=>el.addEventListener('click',closeCommand));
document.addEventListener('keydown',e=>{
  if(e.key==='/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){
    e.preventDefault(); openCommand();
  }
  if(e.key==='Escape'){ closeCommand(); closeProject(); }
});

document.querySelectorAll('[data-command]').forEach(btn=>btn.addEventListener('click',()=>{
  const target=document.querySelector(btn.dataset.command);
  closeCommand();
  if(target) setTimeout(()=>target.scrollIntoView({behavior:'smooth'}),50);
}));
document.querySelectorAll('[data-command-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  setFilter(btn.dataset.commandFilter);
  closeCommand();
  setTimeout(()=>document.querySelector('#projects').scrollIntoView({behavior:'smooth'}),50);
}));
commandInput.addEventListener('input',()=>{
  const q=commandInput.value.toLowerCase().trim();
  document.querySelectorAll('.command-list button').forEach(btn=>{
    btn.style.display=btn.textContent.toLowerCase().includes(q)?'block':'none';
  });
});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.project-card,.panel,.process li,.about-copy,.contact h2').forEach(el=>{
  el.classList.add('reveal'); revealObserver.observe(el);
});

if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}

const buildButtons=[...document.querySelectorAll('[data-build]')];
const projectEmail=document.getElementById('projectEmail');
buildButtons.forEach(btn=>btn.addEventListener('click',()=>{
  buildButtons.forEach(b=>b.classList.toggle('active',b===btn));
  const idea=btn.dataset.build;
  projectEmail.href='mailto:wahomeimani@gmail.com?subject='+encodeURIComponent(idea+' Project Enquiry')+'&body='+encodeURIComponent("Hi Faith,\n\nI'm interested in building a "+idea+".\n\nHere's the idea:\n\n");
  projectEmail.textContent='Start '+idea+' →';
}));
