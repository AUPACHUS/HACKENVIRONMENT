// Toggle del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Toggle del modo oscuro
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Guardar preferencia en localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Cargar preferencia de modo oscuro
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Botón para ir arriba
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor completa todos los campos');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Por favor ingresa un email válido');
                return;
            }
            
            // Aquí iría la lógica para enviar el formulario
            alert('Mensaje enviado con éxito. ¡Gracias!');
            contactForm.reset();
        });
    }

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});