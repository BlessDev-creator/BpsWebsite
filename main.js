// 1. Create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // If the element is visible in the viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      // Remove the class when it leaves the screen
      // This ensures the animation runs again if you scroll away and come back
      entry.target.classList.remove('visible');
    }
  });
});

// 2. Select the element you want to animate
const target = document.querySelector('.name-changer');

// 3. Start watching the element
if (target) {
  observer.observe(target);
}


document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.right-content'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class 'visible' to trigger the slide-down animation
                entry.target.classList.add('visible'); 
                
                // OPTIONAL: Uncomment the line below if you want the 
                // animation to only run once (i.e., not reset when scrolling away)
                // observer.unobserve(entry.target); 
            } else {
                // REMOVE the class 'visible' when it leaves the screen 
                // to allow the animation to run again when scrolling back.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Option to control when the animation triggers (e.g., when 10% is visible)
        threshold: 0.1 
    });

    // 2. Select the element you want to animate
    const target = document.querySelector('.home-img'); 

    // 3. Start watching the element
    if (target) {
        observer.observe(target);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    // --- Home Section Load Animation (Your existing code) ---
    const nameChanger = document.querySelector('.name-changer');
    const homeImage = document.querySelector('.home-img');
    const rightContent = document.querySelector('.right-content');

    // This handles the initial load animation for the home section
    setTimeout(() => {
        if (nameChanger) nameChanger.classList.add('visible');
        if (homeImage) homeImage.classList.add('visible');
        if (rightContent) rightContent.classList.add('visible');
    }, 100); 
    
    
    // --- Scroll Animation for Feature Section (Now adding the '.visible' class) ---
    
    // 1. Get all elements with the feature animation class
    const scrollElements = document.querySelectorAll('.feature-anim-item');

    // 2. Define the observer options
    const options = {
        root: null, 
        rootMargin: '0px 0px -10% 0px', // Triggers when element is 90% up from bottom
        threshold: 0 
    };

    // 3. Create the Intersection Observer function
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ADD the '.visible' class on intersection!
                entry.target.classList.add('visible');
                
                // Stop observing the element once it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 4. Start observing each element
    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });
    
});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.feature-header'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.feature-card'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.feature-footer'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.welcome-text'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.main-title'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.description-text'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.progress-item'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});


document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.stat-item'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.graphic-placeholder'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.service-card'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});


document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.client-logos-wrapper'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});


document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.trust-statement'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.footer-container'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // ADD the class to trigger the final, visible state
                entry.target.classList.add('visible'); 
            } else {
                // REMOVE the class when it leaves the screen to allow the 
                // animation to run again when scrolling back up.
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Optional: Set a threshold for when to trigger the animation (e.g., 10% visible)
        threshold: 0.1 
    });

    // 2. Select the element(s) you want to animate
    // We use querySelectorAll to target ALL elements with the class .right-content
    const targets = document.querySelectorAll('.news-cards-wrapper'); 

    // 3. Start watching the element(s)
    targets.forEach(target => {
        observer.observe(target);
    });

});