document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO CURSOR PERSONALIZADO ---
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('cursor-grow');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-grow');
        });
    });

    // --- LÓGICA DO HEADER ON SCROLL ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- LÓGICA DO MENU HAMBURGER (MOBILE) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    // Fecha o menu ao clicar em um link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // --- ANIMAÇÃO DE REVELAR AO ROLAR (SCROLL) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Elemento aparece quando 10% está visível
    });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });
    
    // --- BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // --- INICIALIZAÇÃO DO PARTICLES.JS ---
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#a37bde", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
      },
      "retina_detect": true
    });

    // --- INICIALIZAÇÃO DO VANILLA-TILT.JS PARA EFEITO 3D ---
    VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 15, // Inclinação máxima
		speed: 400, // Velocidade da animação
        glare: true, // Efeito de brilho
        "max-glare": 0.5 // Intensidade do brilho
	});
});