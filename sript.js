// Smooth scrolling for navigation links - Fixed version
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks directly
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle all other smooth scrolling links
    const otherLinks = document.querySelectorAll('a[href^="#"]:not(.nav-links a)');
    otherLinks.forEach(anchor => {
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
});

// Add scroll effect to cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'bounceIn3D 0.8s ease-out forwards';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card, .skill-item, .contact-item').forEach(item => {
        observer.observe(item);
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    document.querySelectorAll('.floating-element').forEach((element, index) => {
        element.style.transform = `translateY(${rate * (index + 1) * 0.3}px) rotateY(${scrolled * 0.1}deg)`;
    });
});

// Dynamic typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 2000);
    }
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button when scrolling down
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    document.querySelectorAll('.floating-element').forEach((element, index) => {
        element.style.transform = `translateY(${rate * (index + 1) * 0.3}px) rotateY(${scrolled * 0.1}deg)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console welcome message
console.log(`
🚀 Portafolio de José Alberto Trujillo Plaza
📧 Email: albertotplaza@gmail.com
🔗 Certificación Azure: https://www.credly.com/badges/721ae18b-1a19-4ab5-9206-b88f1326af9b/public_url
💻 Especializado en: Automatización N8N, MAKE, IA y Desarrollo Web
`);

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Error loading image:', this.src);
            // Optionally set a fallback image
            // this.src = 'fallback-image.jpg';
        });
    });
});