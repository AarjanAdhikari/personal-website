const menuIcon = document.querySelector("#menu-icon")
const navbar = document.querySelector(".navbar")
const themeToggle = document.querySelector("#theme-toggle")

// Enhanced Theme toggle functionality with smooth transitions
function loadTheme() {
  const savedTheme = localStorage.getItem("theme")
  
  if (savedTheme === "light") {
    document.body.classList.add("light-mode")
  } else {
    document.body.classList.remove("light-mode")
  }
  
  // Update particles color based on theme
  updateParticlesColor()
}

// Smooth theme toggle with enhanced animations
themeToggle.onclick = () => {
  // Add transition class for smooth theme switching
  document.body.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  
  document.body.classList.toggle("light-mode")

  // Save user preference to localStorage
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
  
  // Update particles and spotlight
  updateParticlesColor()
  updateSpotlightColor()
  
  // Remove transition after animation completes
  setTimeout(() => {
    document.body.style.transition = ''
  }, 500)
}

// Load saved theme when page loads
document.addEventListener("DOMContentLoaded", loadTheme)

// Enhanced menu functionality with glass morphism
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
  
  // Add glass blur effect to menu icon when active
  if (menuIcon.classList.contains("bx-x")) {
    menuIcon.style.background = 'var(--glass-hover)'
    menuIcon.style.backdropFilter = 'blur(25px)'
  } else {
    menuIcon.style.background = 'var(--glass-bg)'
    menuIcon.style.backdropFilter = 'blur(20px)'
  }
}

// Enhanced scroll functionality with smooth animations
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  const top = window.scrollY

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 100
    const height = sec.offsetHeight
    const id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
      })
      const activeLink = document.querySelector("header nav a[href*=" + id + "]")
      if (activeLink) {
        activeLink.classList.add("active")
      }
      sec.classList.add("show-animate")
    } else {
      sec.classList.remove("show-animate")
    }
  })

  const header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 100)

  const footer = document.querySelector("footer")
  const footerOffset = footer.offsetTop
  const footerHeight = footer.offsetHeight

  if (window.innerHeight + window.scrollY >= footerOffset) {
    footer.classList.add("show-animate")
  } else {
    footer.classList.remove("show-animate")
  }

  // Remove active class from navbar when scrolling
  menuIcon.classList.remove("bx-x")
  navbar.classList.remove("active")
  
  // Reset menu icon style
  menuIcon.style.background = 'var(--glass-bg)'
  menuIcon.style.backdropFilter = 'blur(20px)'
}

// Enhanced spotlight cursor effect with improved performance
document.addEventListener('DOMContentLoaded', function() {
  const spotlight = document.createElement('div');
  spotlight.className = 'spotlight';
  document.body.appendChild(spotlight);
  
  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;
  
  // Throttle mouse movement for better performance
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  // Update spotlight position
  function updateSpotlight() {
    const isLightMode = document.body.classList.contains('light-mode');
    const color = isLightMode ? '14, 165, 233' : '0, 171, 240';
    
    spotlight.style.background = `radial-gradient(
      circle at ${mouseX}px ${mouseY}px,
      rgba(${color}, 0.15) 0%,
      rgba(${color}, 0.08) 8%,
      rgba(${color}, 0.03) 15%,
      rgba(0, 0, 0, 0) 25%
    )`;
  }
  
  // Track mouse movement with throttling
  const throttledMouseMove = throttle(function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateSpotlight();
  }, 16); // ~60fps
  
  document.addEventListener('mousemove', throttledMouseMove);
  
  // Update spotlight color when theme changes
  window.updateSpotlightColor = updateSpotlight;
  
  // Initial setup
  updateSpotlight();
});

// Enhanced particle system
function updateParticlesColor() {
  const particles = document.querySelectorAll('.particle');
  const isLightMode = document.body.classList.contains('light-mode');
  const color = isLightMode ? 'rgba(14, 165, 233, 0.2)' : 'rgba(0, 171, 240, 0.3)';
  
  particles.forEach(particle => {
    particle.style.background = color;
    particle.style.boxShadow = `0 0 10px ${color}`;
  });
}

// Enhanced typing animation for better performance
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-animation');
  if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
  }
}

// Enhanced skill bar animations with intersection observer
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skills-content .progress .bar span');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width || bar.getAttribute('data-width');
        
        // Reset and animate
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.transition = 'width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          bar.style.width = width;
        }, 200);
        
        observer.unobserve(bar);
      }
    });
  }, observerOptions);
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Enhanced form animations and interactions
function initFormAnimations() {
  const inputs = document.querySelectorAll('.glass-input input, .glass-textarea textarea');
  
  inputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'input-ripple';
      this.parentElement.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
    
    // Check if input has value on load
    if (input.value) {
      input.parentElement.classList.add('focused');
    }
  });
}

// Enhanced button hover effects
function initButtonEffects() {
  const buttons = document.querySelectorAll('.glass-btn, .glass-btn-outline, .project-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('div');
      ripple.className = 'button-ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Enhanced card hover effects with 3D tilt
function initCardEffects() {
  const cards = document.querySelectorAll('.glass-card, .project-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Enhanced scroll animations with intersection observer
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.glass-card, .glass-heading, .glass-subtitle');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0px)';
        entry.target.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    observer.observe(element);
  });
}

// Enhanced contact form handler with EmailJS and better UX
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const notificationModal = document.getElementById('notification-modal');
  const notificationMessage = document.querySelector('.notification-message');
  const notificationClose = document.querySelector('.notification-close');
  
  // Close notification when the close button is clicked
  if (notificationClose) {
    notificationClose.addEventListener('click', function() {
      hideNotification();
    });
  }
  
  // Enhanced notification system
  function showNotification(message, type) {
    notificationMessage.textContent = message;
    notificationModal.classList.add('show', type);
    
    // Add entrance animation
    setTimeout(() => {
      notificationModal.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }
  
  function hideNotification() {
    notificationModal.style.transform = 'translateX(400px) scale(0.9)';
    
    setTimeout(() => {
      notificationModal.classList.remove('show');
      setTimeout(() => {
        notificationModal.classList.remove('success', 'error');
        notificationModal.style.transform = '';
      }, 300);
    }, 300);
  }
  
  // Enhanced form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get submit button and add enhanced loading state
      const submitBtn = contactForm.querySelector('.btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      submitBtn.style.transform = 'scale(0.95)';
      
      // Add form shake animation for better feedback
      contactForm.style.animation = 'formSubmit 0.3s ease';
      
      // Send email using EmailJS
      emailjs.sendForm(
        'service_2ghv4dm',
        'template_6cpgog1',
        contactForm,
        '5ugGYDiH5mTRLsR4n'
      )
      .then(function() {
        // Success with enhanced feedback
        showNotification('🎉 Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset form focus states
        const inputs = contactForm.querySelectorAll('.glass-input, .glass-textarea');
        inputs.forEach(input => {
          input.classList.remove('focused');
        });
        
        // Success animation
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        setTimeout(() => {
          submitBtn.style.background = '';
        }, 1000);
        
      })
      .catch(function(error) {
        // Error with enhanced feedback
        console.error('EmailJS error:', error);
        showNotification('❌ Something went wrong. Please try again later.', 'error');
        
        // Error animation
        contactForm.style.animation = 'formError 0.5s ease';
      })
      .finally(function() {
        // Reset button state with smooth transition
        setTimeout(() => {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
          submitBtn.style.transform = '';
          contactForm.style.animation = '';
        }, 500);
      });
    });
  }
  
  // Initialize all enhanced features
  initTypingAnimation();
  initSkillBars();
  initFormAnimations();
  initButtonEffects();
  initCardEffects();
  initScrollAnimations();
});

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      // Close mobile menu if open
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
      
      // Smooth scroll with custom easing
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Add highlight effect to target section
      target.style.animation = 'sectionHighlight 1s ease';
      setTimeout(() => {
        target.style.animation = '';
      }, 1000);
    }
  });
});

// Enhanced performance optimizations
// Debounce resize events
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

// Optimized resize handler
const handleResize = debounce(() => {
  // Update particle positions if needed
  updateParticlesColor();
  
  // Recalculate any position-dependent elements
  const spotlight = document.querySelector('.spotlight');
  if (spotlight) {
    updateSpotlightColor();
  }
}, 250);

window.addEventListener('resize', handleResize);

// Add CSS animations for enhanced effects
const style = document.createElement('style');
style.textContent = `
  @keyframes formSubmit {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  
  @keyframes formError {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  
  @keyframes sectionHighlight {
    0% { background: transparent; }
    50% { background: rgba(0, 171, 240, 0.05); }
    100% { background: transparent; }
  }
  
  .input-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(0, 171, 240, 0.3);
    transform: translate(-50%, -50%);
    animation: inputRipple 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes inputRipple {
    to {
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
  
  .button-ripple {
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    animation: buttonRipple 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes buttonRipple {
    to {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
  
  .glass-input.focused input,
  .glass-textarea.focused textarea {
    border-color: var(--main-color);
    box-shadow: 0 0 20px rgba(0, 171, 240, 0.3);
    background: var(--glass-hover);
  }
`;

document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add loading animation to page
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  
  console.log('🚀 Glassmorphism Portfolio Loaded Successfully!');
});
