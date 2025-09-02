'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const HeroScrollAnimation: React.FC<HeroScrollAnimationProps> = ({ 
  children, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInitialized = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      console.log('🎭 Hero animations disabled due to user motion preferences');
      return;
    }

    // Ensure GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('⚠️ GSAP or ScrollTrigger not available. Animations disabled.');
      return;
    }

    // Prevent multiple initializations
    if (animationInitialized.current) return;
    animationInitialized.current = true;

    initHeroScrollAnimation();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      animationInitialized.current = false;
    };
  }, []);

  /**
   * Initialize comprehensive hero scroll animations
   * Creates staggered reveals, parallax effects, and smooth transitions
   */
  function initHeroScrollAnimation() {
    const container = containerRef.current;
    if (!container) {
      console.warn('⚠️ Hero animation container not found');
      return;
    }

    try {
      console.log('🚀 Initializing hero scroll animations...');

      // Animation timeline for coordinated effects
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.2
        }
      });

      // Hero content elements
      const heroTitle = container.querySelector('[data-hero="title"]');
      const heroSubtitle = container.querySelector('[data-hero="subtitle"]');
      const heroBadge = container.querySelector('[data-hero="badge"]');
      const heroButtons = container.querySelector('[data-hero="buttons"]');
      const heroServices = container.querySelectorAll('[data-hero="service-card"]');
      const heroBackground = container.querySelector('[data-hero="background"]');

      // Set initial states with performance optimization
      const elementsToAnimate = [heroTitle, heroSubtitle, heroBadge, heroButtons, ...heroServices];
      
      elementsToAnimate.forEach(element => {
        if (element) {
          gsap.set(element, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            willChange: 'transform, opacity'
          });
        }
      });

      // Background parallax setup
      if (heroBackground) {
        gsap.set(heroBackground, {
          scale: 1.1,
          willChange: 'transform'
        });
      }

      // 1. ENTRANCE ANIMATIONS - Staggered reveals on page load
      ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          console.log('🎬 Hero entrance animation triggered');
          
          // Badge animation with bounce
          if (heroBadge) {
            tl.to(heroBadge, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)"
            });
          }

          // Title animation with stagger
          if (heroTitle) {
            tl.to(heroTitle, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out"
            }, "-=0.4");
          }

          // Subtitle with slight delay
          if (heroSubtitle) {
            tl.to(heroSubtitle, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9
            }, "-=0.6");
          }

          // Buttons with hover-ready state
          if (heroButtons) {
            tl.to(heroButtons, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              onComplete: () => {
                // Enable button hover animations
                enableButtonHoverEffects(heroButtons);
              }
            }, "-=0.4");
          }

          // Service cards with staggered reveal
          if (heroServices.length > 0) {
            tl.to(heroServices, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: {
                amount: 0.6,
                from: "start",
                ease: "power2.out"
              },
              onComplete: () => {
                // Enable service card interactions
                enableServiceCardEffects(heroServices);
              }
            }, "-=0.5");
          }
        },
        once: true
      });

      // 2. PARALLAX BACKGROUND ANIMATION
      if (heroBackground) {
        ScrollTrigger.create({
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(heroBackground, {
              y: progress * -100,
              scale: 1.1 + (progress * 0.1),
              duration: 0.3,
              ease: "none"
            });
          }
        });
      }

      // 3. CONTENT FADE OUT ON SCROLL
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          const opacity = 1 - (progress * 1.2);
          const y = progress * -50;
          
          elementsToAnimate.forEach(element => {
            if (element) {
              gsap.to(element, {
                opacity: Math.max(0, opacity),
                y: y,
                duration: 0.3,
                ease: "none"
              });
            }
          });
        }
      });

      // 4. FLOATING ANIMATION FOR SERVICE CARDS
      if (heroServices.length > 0) {
        heroServices.forEach((card, index) => {
          gsap.to(card, {
            y: "random(-10, 10)",
            rotation: "random(-1, 1)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        });
      }

      // 5. MOUSE PARALLAX EFFECT
      let mouseX = 0;
      let mouseY = 0;
      
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
        
        // Apply subtle parallax to service cards
        heroServices.forEach((card, index) => {
          const multiplier = (index + 1) * 0.5;
          gsap.to(card, {
            x: mouseX * 20 * multiplier,
            y: mouseY * 10 * multiplier,
            duration: 1.5,
            ease: "power2.out"
          });
        });
      };

      container.addEventListener('mousemove', handleMouseMove);

      // 6. SCROLL VELOCITY EFFECTS
      let lastScrollY = 0;
      let scrollVelocity = 0;

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: () => {
          const currentScrollY = window.scrollY;
          scrollVelocity = currentScrollY - lastScrollY;
          lastScrollY = currentScrollY;

          // Apply velocity-based transforms
          if (Math.abs(scrollVelocity) > 2) {
            heroServices.forEach((card, index) => {
              gsap.to(card, {
                rotationX: scrollVelocity * 0.1,
                rotationY: scrollVelocity * 0.05 * (index % 2 === 0 ? 1 : -1),
                duration: 0.8,
                ease: "power2.out"
              });
            });
          }
        }
      });

      console.log('✅ Hero scroll animations initialized successfully');

    } catch (error) {
      console.error('❌ Error initializing hero animations:', error);
      // Graceful degradation - show content without animations
      const allElements = container.querySelectorAll('[data-hero]');
      allElements.forEach(element => {
        gsap.set(element, { opacity: 1, y: 0, scale: 1 });
      });
    }
  }

  /**
   * Enable interactive button hover effects
   */
  function enableButtonHoverEffects(buttonsContainer: Element) {
    const buttons = buttonsContainer.querySelectorAll('button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          y: -3,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  /**
   * Enable service card interactive effects
   */
  function enableServiceCardEffects(cards: NodeListOf<Element>) {
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.08,
          y: -15,
          rotationY: 5,
          duration: 0.4,
          ease: "power2.out"
        });

        // Subtle glow effect
        gsap.to(card, {
          boxShadow: "0 25px 50px rgba(100, 181, 246, 0.3)",
          duration: 0.4
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to(card, {
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          duration: 0.4
        });
      });
    });
  }

  return (
    <div 
      ref={containerRef}
      className={`hero-scroll-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default HeroScrollAnimation;