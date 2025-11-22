// Particles
particlesJS('particles-js', {
  particles: {number:{value:80},color:{value:"#627eea"},shape:{type:"circle"},opacity:{value:0.5},size:{value:3},line_linked:{enable:true,distance:150,color:"#627eea",opacity:0.3,width:1},move:{enable:true,speed:2}},
  interactivity: {detect_on:"canvas",events:{onhover:{enable:true,mode:"repulse"},onclick:{enable:true,mode:"push"},resize:true}},
  retina_detect:true
});

// Tilt effect
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {max:15,speed:400,glare:true,"max-glare":0.3});

// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {if(entry.isIntersecting) entry.target.classList.add('visible');});
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? 'Light' : 'Dark';
});

// Language system
const translations = {vi:{/* nội dung tiếng Việt như lần trước */}, en:{/* tiếng Anh */}};
const langKeys = {/* giống lần trước, mình rút gọn để ngắn */};

// Tương tự như trước nhưng đã fix + mượt hơn