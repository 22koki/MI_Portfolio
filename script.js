const menuToggle=document.getElementById('menuToggle');
const siteMenu=document.getElementById('siteMenu');
const menuBackdrop=document.getElementById('menuBackdrop');
const menuClose=document.getElementById('menuClose');
function openMenu(){
  siteMenu?.classList.add('open');
  menuBackdrop?.classList.add('open');
  siteMenu?.setAttribute('aria-hidden','false');
  menuBackdrop?.setAttribute('aria-hidden','false');
  menuToggle?.setAttribute('aria-expanded','true');
  document.body.classList.add('menu-open');
}
function closeMenu(){
  siteMenu?.classList.remove('open');
  menuBackdrop?.classList.remove('open');
  siteMenu?.setAttribute('aria-hidden','true');
  menuBackdrop?.setAttribute('aria-hidden','true');
  menuToggle?.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}
menuToggle?.addEventListener('click',()=>siteMenu?.classList.contains('open')?closeMenu():openMenu());
menuClose?.addEventListener('click',closeMenu);
menuBackdrop?.addEventListener('click',closeMenu);
siteMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));


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
    repo:'https://github.com/22koki/One_Min_From_Earth',
    page:'cases/one-minute-earth.html'
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

  earthscope:{
    type:'SURVEYING · GEOSPATIAL BUSINESS WEBSITE',
    title:'Earth Scope',
    summary:'A professional business website created to present surveying and geospatial services clearly for land, property and infrastructure clients.',
    problem:'Surveying companies need to communicate technical services in a way that feels credible, understandable and easy for prospective clients to act on. Earth Scope turns those services into a clear commercial web experience.',
    stack:['Responsive web design','Service UX','Business content','Lead generation'],
    highlights:['Surveying and geospatial service presentation','Land, engineering and infrastructure project positioning','Clear Request a Survey conversion path'],
    repo:null,
    page:'cases/earth-scope.html'
  },
  riverstone:{
    type:'WEBSITE · DIGITAL MARKETING',
    title:'Riverstone Finishes & Landscapes',
    summary:'A polished landscaping business website that presents services, real project work and a direct path from browsing to enquiry.',
    problem:'A landscaping business needs its website to show the quality of its work immediately, explain its services clearly and make it effortless for a potential client to enquire.',
    stack:['Responsive web design','Project gallery','WhatsApp CTA','Service content','Brand presentation'],
    highlights:['Real landscaping work used throughout the site','Service and project-led navigation','Direct request-service and WhatsApp lead paths'],
    repo:'https://github.com/22koki/Landscape_web',
    page:'cases/riverstone.html'
  },
  ghost:{
    type:'GAME PRODUCT · CREATIVE DEVELOPMENT',
    title:'Tiny Ghost Hotel',
    summary:'A cozy-creepy hotel management game concept with themed rooms, supernatural guests, progression and a distinctive Victorian haunted-hotel identity.',
    problem:'The project explores how product systems, progression and art direction can work together to create a memorable interactive experience.',
    stack:['Godot','Game systems','Creative direction','UI design'],
    highlights:['Persistent progression and themed rooms','Supernatural guest and hotel mechanics','Strong visual direction with atmospheric presentation'],
    repo:'https://github.com/22koki/tiny-ghost-hotel',
    page:'cases/tiny-ghost-hotel.html'
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
  if(data.repo){modalRepo.href=data.repo;modalRepo.style.display='inline-flex';}else{modalRepo.removeAttribute('href');modalRepo.style.display='none';}
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
  if(e.key==='Escape'){ closeCommand(); closeProject(); closeMenu(); }
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
  projectEmail.href='#projectForm';
  projectEmail.textContent='Start '+idea+' →';
}));
projectEmail?.addEventListener('click',e=>{
  if(projectEmail.getAttribute('href')==='#projectForm'){
    e.preventDefault();
    document.getElementById('projectForm')?.scrollIntoView({behavior:'smooth',block:'center'});
    setTimeout(()=>document.querySelector('#projectForm input[name="name"]')?.focus(),350);
  }
});

const solutions={
 booking:{title:'Booking + CRM + payment workflow',text:'A custom booking system can centralize availability, customers, staff scheduling, reminders and payments instead of managing everything manually.',tags:['Booking','CRM','Payments','Reminders']},
 excel:{title:'Custom operations database + dashboard',text:'Replace scattered spreadsheets with structured records, permissions, reporting and automated workflows designed around how the business actually operates.',tags:['Database','Dashboard','Roles','Reports']},
 orders:{title:'Online ordering + fulfilment system',text:'Give customers a direct ordering experience while staff receive, confirm, prepare, collect payment and track fulfilment from one workflow.',tags:['Ordering','Payments','Inventory','Delivery']},
 website:{title:'Conversion-focused website + growth layer',text:'Improve the offer, UX, calls to action, search structure, analytics and content so the website works as a business tool instead of a digital brochure.',tags:['UX','SEO','GA4','Lead generation']},
 manual:{title:'Workflow automation',text:'Map repetitive tasks, identify the right automation points, connect systems and create dashboards so the team spends less time on admin.',tags:['Automation','APIs','Workflows','Dashboards']},
 idea:{title:'MVP product development',text:'Turn the idea into requirements, user flows, architecture and a focused first release that can be tested before investing in unnecessary complexity.',tags:['Discovery','MVP','UI/UX','Full-stack']}
};
document.querySelectorAll('[data-solution]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-solution]').forEach(b=>b.classList.toggle('active',b===btn));
  const s=solutions[btn.dataset.solution];
  document.getElementById('solutionTitle').textContent=s.title;
  document.getElementById('solutionText').textContent=s.text;
}));

const techButtons=[...document.querySelectorAll('[data-tech-filter]')];
function resetTech(){
  techButtons.forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.project-card').forEach(card=>card.classList.remove('tech-muted'));
}
techButtons.forEach(btn=>btn.addEventListener('click',()=>{
  const tech=btn.dataset.techFilter;
  techButtons.forEach(b=>b.classList.toggle('active',b===btn));
  document.querySelectorAll('.project-card').forEach(card=>{
    const list=(card.dataset.tech||'').split(' ');
    card.classList.toggle('tech-muted',!list.includes(tech));
  });
  document.querySelector('#projects').scrollIntoView({behavior:'smooth',block:'center'});
}));
document.getElementById('resetTech')?.addEventListener('click',resetTech);

document.getElementById('projectForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const selected=document.querySelector('[data-build].active')?.dataset.build||'Digital project';
  const subject=selected+' Project Enquiry';
  const body=[
    'Hi Faith,','',
    'Name: '+data.get('name'),
    'Email: '+data.get('email'),
    'Project: '+selected,
    'Timeline: '+data.get('timeline'),'',
    'Project idea:',
    data.get('message')
  ].join('\n');
  document.getElementById('formStatus').textContent='Opening your prepared project enquiry…';
  window.location.href='mailto:wahomeimani@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
});
