import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const StorySection = ({ id, title, story, images, bgGradient, donutText }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const storyRef = useRef(null);
  const imagesRef = useRef([]);
  const donutRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    
    // Content fade-in animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        toggleActions: 'play none none reverse',
        scrub: 2,
      }
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1
    })
    .from(storyRef.current, {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.5')
    .from(imagesRef.current, {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1
    }, '-=0.5');



    // Gradient parallax effect
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
      backgroundPosition: '50% 100%',
    });

    // Donut text rotation
    if (donutRef.current) {
      gsap.to(donutRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="story-section" style={{ background: bgGradient }}>
      <div className="section-content">
        <h2 ref={titleRef} className="section-title">{title}</h2>
        
        {donutText && (
          <div ref={donutRef} className="donut-text">
            {donutText}
          </div>
        )}
        
        <div className="story-container">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={el => imagesRef.current[idx] = el}
              className={`circle-image circle-${img.position} ${img.size}`}
              style={{ 
                fontSize: img.size === 'large' ? '120px' : img.size === 'medium' ? '80px' : '60px'
              }}
            >
              {img.emoji}
            </div>
          ))}
          
          <p ref={storyRef} className="story-text">{story}</p>
        </div>
      </div>
    </section>
  );
};

const ScrollResume = () => {
  const containerRef = useRef(null);
  const rocketRef = useRef(null);
  const heroTextRef = useRef(null);
  const progressBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    // Progress bar animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(progressBarRef.current, { 
          scaleX: self.progress,
          duration: 0.1
        });
      }
    });

    // Hero text - visible on load, types out immediately
    const splitText = new SplitText(heroTextRef.current, { type: 'chars' });
    
    gsap.from(splitText.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.05,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.3
    });

    // Rocket animates with typing
    gsap.from(rocketRef.current, {
      x: -300,
      y: 150,
      rotation: -45,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.2
    });

    // Rocket moves as you scroll away from hero
    gsap.to(rocketRef.current, {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
      x: 300,
      y: -150,
      rotation: 45,
      scale: 0.5,
      opacity: 0
    });

    // Hero background parallax
    gsap.to('.hero-section', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
      },
      backgroundPosition: '50% 100%'
    });

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Hide scroll indicator when scrolling
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top-=100',
      onEnter: () => gsap.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.3 }),
      onLeaveBack: () => gsap.to(scrollIndicatorRef.current, { opacity: 1, duration: 0.3 })
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div ref={progressBarRef} className="progress-bar"></div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <span>↓</span>
        <span className="scroll-text">Scroll to explore</span>
      </div>

      {/* Hero Section - Introduction */}
      <section className="hero-section">
        <div className="hero-content">
          <div ref={rocketRef} className="rocket">🚀</div>
          <h1 ref={heroTextRef} className="hero-title">Your Name Here</h1>
          <p className="hero-subtitle">Interactive Career Journey</p>
        </div>
      </section>

      {/* Early Life Section */}
      <StorySection
        id="early-life"
        title="🌱 Early Life"
        story="My journey began in a small town where curiosity and creativity were my constant companions. From building things with my hands to solving puzzles, I was always driven by a desire to understand how things work. These formative years taught me the value of persistence, imagination, and the importance of asking 'why.' Family, friends, and early mentors shaped my perspective and instilled a love for learning that continues to guide me today."
        images={[
          { emoji: '🌱', size: 'large', position: 'left' },
          { emoji: '🏠', size: 'medium', position: 'right' },
          { emoji: '⭐', size: 'small', position: 'bottom' }
        ]}
        bgGradient="linear-gradient(180deg, var(--color-secondary) 0%, var(--color-tertiary) 100%)"
        donutText="DREAM • EXPLORE • WONDER •"
      />

      {/* Geography Section */}
      <StorySection
        id="geography"
        title="🌎 Geography"
        story="Growing up across different landscapes shaped my worldview and adaptability. From coastal cities to mountain towns, each place taught me something unique about culture, community, and perspective. These experiences cultivated a global mindset that influences how I approach problems and connect with diverse teams. Travel became more than movement—it became a way of thinking, of seeing connections across borders and understanding that great ideas come from everywhere."
        images={[
          { emoji: '🌎', size: 'large', position: 'right' },
          { emoji: '🗺️', size: 'medium', position: 'left' },
          { emoji: '✈️', size: 'small', position: 'bottom' }
        ]}
        bgGradient="linear-gradient(180deg, var(--color-tertiary) 0%, var(--color-quaternary) 100%)"
        donutText="EXPLORE • DISCOVER • ADAPT •"
      />

      {/* Education Section */}
      <StorySection
        id="education"
        title="📚 Education"
        story="My educational journey was driven by curiosity and a passion for continuous learning. From formal degrees to self-taught skills, each learning experience built the foundation for my career. I believe in lifelong learning and staying curious about emerging technologies and methodologies. Education isn't just about credentials—it's about cultivating a growth mindset and remaining open to new ideas. Whether in classrooms, online courses, or late-night coding sessions, every lesson added another tool to my arsenal."
        images={[
          { emoji: '📚', size: 'large', position: 'left' },
          { emoji: '🎓', size: 'medium', position: 'right' },
          { emoji: '💡', size: 'small', position: 'top' }
        ]}
        bgGradient="linear-gradient(180deg, var(--color-quaternary) 0%, var(--color-quinary) 100%)"
        donutText="LEARN • GROW • INNOVATE •"
      />

      {/* Career Section */}
      <StorySection
        id="career"
        title="💼 Career"
        story="My career trajectory has been marked by strategic pivots and calculated risks. Starting in entry-level roles, I quickly identified opportunities to create impact and drive innovation. Each position taught me valuable lessons about leadership, collaboration, and technical excellence. I've worked with diverse teams to deliver products that matter, always focusing on user experience and business value. From shipping features to mentoring junior developers, every experience has shaped my professional philosophy and sharpened my skills."
        images={[
          { emoji: '💼', size: 'large', position: 'right' },
          { emoji: '🚀', size: 'medium', position: 'left' },
          { emoji: '⭐', size: 'small', position: 'bottom' }
        ]}
        bgGradient="linear-gradient(180deg, var(--color-quinary) 0%, var(--color-senary) 100%)"
        donutText="BUILD • SHIP • ITERATE •"
      />

      {/* Today Section */}
      <StorySection
        id="today"
        title="✨ Today"
        story="Today, I'm focused on leveraging my experience to solve complex problems and mentor the next generation of talent. I'm passionate about building products that make a real difference and working with teams that value innovation and collaboration. Looking forward, I'm excited about opportunities that challenge me to grow while making a meaningful impact in the tech industry. The journey continues, and I'm ready for whatever comes next—armed with experience, curiosity, and an unwavering commitment to excellence."
        images={[
          { emoji: '✨', size: 'large', position: 'left' },
          { emoji: '🎯', size: 'medium', position: 'right' },
          { emoji: '🌟', size: 'small', position: 'top' }
        ]}
        bgGradient="linear-gradient(180deg, var(--color-senary) 0%, var(--color-primary) 100%)"
        donutText="CREATE • INSPIRE • LEAD •"
      />
    </div>
  );
};

export default StoryResume;