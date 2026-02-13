// ===================================
// MENU HAMBURGUESA
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al clickear links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===================================
// NAVBAR SCROLL
// ===================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===================================
// AUTO-HIGHLIGHT ACTIVE MENU
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// FORMULARIO DE CONTACTO CON FORMSPREE
// ===================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Deshabilitar botón y mostrar estado de carga
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Éxito
                formStatus.innerHTML = '<p class="success-message"><i class="fas fa-check-circle"></i> ¡Mensaje enviado exitosamente! Te contactaré pronto.</p>';
                contactForm.reset();
            } else {
                // Error del servidor
                formStatus.innerHTML = '<p class="error-message"><i class="fas fa-exclamation-circle"></i> Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.</p>';
            }
        } catch (error) {
            // Error de red
            formStatus.innerHTML = '<p class="error-message"><i class="fas fa-exclamation-circle"></i> Error de conexión. Por favor, verifica tu internet e intenta de nuevo.</p>';
            console.error('Error:', error);
        } finally {
            // Rehabilitar botón
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        }
    });
}

// ===================================
// DOWNLOAD CV BUTTON
// ===================================
const downloadBtn = document.getElementById('downloadCV');

if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para descargar el CV
        // Puedes generar un PDF o descargar uno existente
        
        alert('Función de descarga de CV próximamente. Por favor, contacta por email.');
        
        // Ejemplo para descargar un archivo existente:
        /*
        const link = document.createElement('a');
        link.href = 'path/to/your/cv.pdf';
        link.download = 'Hernan_Trullo_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        */
    });
}

// ===================================
// ANIMACIONES AL SCROLL (OPCIONAL)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos que quieres animar
document.querySelectorAll('.experience-card, .project-card, .stack-category').forEach(el => {
    observer.observe(el);
});

// ===================================
// SMOOTH SCROLL POLYFILL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
