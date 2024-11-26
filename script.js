document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Download Resume functionality (placeholder)
    const downloadResumeBtn = document.querySelector('.download-resume');
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Resume download functionality will be implemented soon. Please contact Onkar directly.');
    });

    // Add subtle scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-hidden');
        fadeInObserver.observe(section);
    });
});

// Add CSS for fade-in animations in script to keep it self-contained
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .fade-in-hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);
