// Navigation and Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(9px, 9px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message (in production, this would send to a server)
            alert('Thank you for your message! We will get back to you shortly.');
            
            // Reset form
            contactForm.reset();
            
            // Log to console for demo purposes
            console.log('Form submitted with data:', data);
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards, industry cards, etc.
    const animatedElements = document.querySelectorAll('.service-card, .industry-card, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add scroll reveal effect to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(header);
    });
});

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}

// Add smooth hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// Prevent animations on page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Industry Modal Data
const industryData = {
    education: {
        title: "Education Solutions",
        subtitle: "Empowering students and teachers with technology",
        icon: `<svg class="modal-industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>`,
        sections: [
            {
                title: "Common Challenges for Schools",
                content: "School systems face daily frustrations with password management, network filtering, and device maintenance. Students find ways to bypass filters, IT teams become overwhelmed with repairs, and managing login credentials becomes a constant hassle during busy school years."
            },
            {
                title: "Our Solutions",
                content: "Grand River Tech provides supplemental IT support when your technology team needs it most. We handle overflow repairs, maintenance, and monitoring so your staff can focus on bigger tasks.",
                list: [
                    "Google Suite administration and support",
                    "Network filtering and monitoring",
                    "Chrome OS device management",
                    "Security camera installation for campus safety",
                    "Network setup and ongoing monitoring",
                    "Device repair and maintenance services"
                ]
            },
            {
                title: "Why Schools Choose Us",
                content: "We understand the unique challenges of educational environments. Our team has extensive experience with school systems and can step in quickly to provide the support you need, exactly when you need it."
            }
        ]
    },
    healthcare: {
        title: "Healthcare IT Solutions",
        subtitle: "Technology support for medical professionals",
        icon: `<svg class="modal-industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>`,
        sections: [
            {
                title: "The Healthcare Technology Challenge",
                content: "Doctors, nurses, and medical staff rely heavily on smartphones and mobile devices for critical communication. When devices break, it's not just inconvenient—it can impact patient care and team coordination."
            },
            {
                title: "Same-Day Solutions",
                content: "As part of Affordable iStore, we offer same-day iPhone and device repair services specifically for healthcare professionals. We understand that you can't wait days for repairs when lives depend on communication.",
                list: [
                    "Same-day iPhone screen repairs",
                    "Battery replacements and upgrades",
                    "Data transfer from lost or stolen devices",
                    "Quick turnaround on all repairs",
                    "Apple certified technicians",
                    "Priority service for medical staff"
                ]
            },
            {
                title: "IT Infrastructure Support",
                content: "Beyond device repair, we provide comprehensive IT support including network management, security systems, and data backup solutions to keep your practice running smoothly."
            }
        ]
    },
    manufacturing: {
        title: "Manufacturing IT Solutions",
        subtitle: "Protect your people, equipment, and production",
        icon: `<svg class="modal-industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 20h20"></path>
            <path d="M7 20V8l5-5 5 5v12"></path>
            <path d="M9 9h1v1H9z"></path>
            <path d="M14 9h1v1h-1z"></path>
            <path d="M9 14h1v1H9z"></path>
            <path d="M14 14h1v1h-1z"></path>
        </svg>`,
        sections: [
            {
                title: "Manufacturing Challenges",
                content: "Factory environments are loud, fast-paced, and demanding. Problems with machinery can go unnoticed until it's too late, costing valuable production time. Employee safety and equipment monitoring are constant concerns."
            },
            {
                title: "HD Security Camera Solutions",
                content: "Our security monitoring systems serve multiple purposes in manufacturing environments—they protect your workers, monitor equipment health, and help prevent costly downtime.",
                list: [
                    "HD cameras pointed at critical machinery",
                    "Real-time monitoring and alerts",
                    "Historical footage for troubleshooting",
                    "Employee safety monitoring",
                    "After-hours security surveillance",
                    "Professional installation and setup"
                ]
            },
            {
                title: "Benefits for Production",
                content: "With cameras monitoring your production line, you can quickly identify issues before they become major problems. Review footage to understand equipment failures, track production patterns, and maintain a safer work environment for your team."
            }
        ]
    },
    nonprofit: {
        title: "Non-Profit IT Solutions",
        subtitle: "Affordable technology for organizations making a difference",
        icon: `<svg class="modal-industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`,
        sections: [
            {
                title: "Non-Profit Technology Needs",
                content: "Churches and charitable organizations need reliable technology for livestreaming, content creation, and day-to-day operations—but often work with limited budgets. Social media and digital outreach are more important than ever for donor engagement."
            },
            {
                title: "Affordable Solutions",
                content: "We provide cost-effective technology solutions that don't compromise on quality. From Apple computers for creative work to complete livestreaming setups, we help you maximize your budget.",
                list: [
                    "Live video streaming setup for services",
                    "Apple computers for content creation",
                    "Sound system design and installation",
                    "Social media management tools",
                    "Device repair and maintenance",
                    "Network and server solutions"
                ]
            },
            {
                title: "On-Site Support",
                content: "We come to you. Our team will travel to your location, set up your technology, train your staff and volunteers, and provide ongoing support to ensure everything runs smoothly."
            }
        ]
    }
};

// Open Industry Modal
function openIndustryModal(industry) {
    const modal = document.getElementById('industryModal');
    const modalBody = document.getElementById('modalBody');
    const data = industryData[industry];
    
    if (!data) return;
    
    let sectionsHTML = '';
    data.sections.forEach(section => {
        let sectionContent = `
            <div class="modal-section">
                <h3>${section.title}</h3>
                <p>${section.content}</p>
        `;
        
        if (section.list) {
            sectionContent += '<ul>';
            section.list.forEach(item => {
                sectionContent += `<li>${item}</li>`;
            });
            sectionContent += '</ul>';
        }
        
        sectionContent += '</div>';
        sectionsHTML += sectionContent;
    });
    
    modalBody.innerHTML = `
        <div class="modal-header">
            ${data.icon}
            <h2>${data.title}</h2>
            <p class="modal-subtitle">${data.subtitle}</p>
        </div>
        <div class="modal-body-content">
            ${sectionsHTML}
        </div>
        <div class="modal-cta">
            <a href="#contact" class="btn btn-primary" onclick="closeIndustryModal()">Get Started</a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Industry Modal
function closeIndustryModal() {
    const modal = document.getElementById('industryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking backdrop
function closeModalOnBackdrop(event) {
    if (event.target.id === 'industryModal') {
        closeIndustryModal();
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeIndustryModal();
    }
});

