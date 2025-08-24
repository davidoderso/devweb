// Theme Toggle Functionality
        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        }

        // Load saved theme
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.body.classList.add('light-mode');
            }
        });

        // Smooth scrolling for navigation links
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

        // Saj 13.07.2025 Löschen brauchen wir keine input
        // Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="btn-text">Wird gesendet...</span>';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<span class="btn-text">Gesendet ✓</span>';
                submitBtn.style.background = 'linear-gradient(45deg, #28a745, #34ce57)';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 2000);
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
            }
        });

        

        function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    content.classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');

    const toggleBtn = document.querySelector('.theme-toggle');
    const circle = toggleBtn.querySelector('::before');
    // Animation wird über CSS :before geregelt
}

// Fade-in Animation bei Scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Beim Laden direkt prüfen
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});


window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  console.log("Scroll-Position:", scrollY);

  // Beispielaktion: Ändere Videogröße beim Scrollen
  const video = document.getElementById("mainVideo");

  if (scrollY > 100) {
    video.style.transform = "scale(0.8)";
    video.style.transition = "transform 0.3s ease";
  } else {
    video.style.transform = "scale(1)";
  }
});
