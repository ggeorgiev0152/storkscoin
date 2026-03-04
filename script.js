// Copy to clipboard functionality
const copyBtn = document.getElementById('copy-btn');
const contractAddress = document.getElementById('contract-address').innerText;
const tooltip = document.querySelector('.copied-tooltip');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

// Particles Generation for Aura Effect
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');

    // Random properties
    const size = Math.random() * 5 + 2; // 2px to 7px
    const posX = Math.random() * 100; // vw
    const posY = Math.random() * 100; // vh
    const duration = Math.random() * 10 + 5; // 5s to 15s
    const delay = Math.random() * 5; // 0s to 5s

    // Style applied directly
    particle.style.position = 'absolute';
    particle.style.left = `${posX}vw`;
    particle.style.top = `${posY}vh`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = Math.random() > 0.5 ? '#ff9d00' : '#ffc800';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.background}`;
    particle.style.opacity = '0';
    particle.style.animation = `floatUp ${duration}s ease-in infinite ${delay}s`;

    particlesContainer.appendChild(particle);
}

// Add keyframes dynamically for the particles
const styleSheet = document.createElement('style');
styleSheet.innerText = `
@keyframes floatUp {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    20% { opacity: 0.8; transform: translateY(-20vh) scale(1.2); }
    80% { opacity: 0.8; transform: translateY(-80vh) scale(0.8); }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
}
`;
document.head.appendChild(styleSheet);

// Smooth scroll for all anchor nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
