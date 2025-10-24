import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const StoryScroll = () => {
	const containerRef = useRef(null);
	const progressBarRef = useRef(null);
	const backgroundRef = useRef(null);

	// Scene refs
	const heroTextRef = useRef(null);
	const heroEmojiRef = useRef(null);
	const earthRef = useRef(null);
	const usaRef = useRef(null);
	const georgiaRef = useRef(null);
	const earlyLifeRef = useRef(null);
	const bookRef = useRef(null);
	const briefcaseRef = useRef(null);
	const todayRef = useRef(null);

	// Arrow refs
	const arrow1Ref = useRef(null);
	const arrow2Ref = useRef(null);
	const arrow3Ref = useRef(null);
	const arrow4Ref = useRef(null);

	useGSAP(
		() => {

			// Main unified timeline
			const mainTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
					onUpdate: (self) => {
						gsap.to(progressBarRef.current, {
							scaleX: self.progress,
							duration: 0.1,
							ease: "none",
						});
					},
				},
			});

			// Scene 1: Hero exits
			// mainTimeline
			// 	.to(heroEmojiRef.current, { scale: 1.3, y: -20, duration: 0.5 })
			// 	.to([heroTextRef.current, heroEmojiRef.current], {
			// 		opacity: 0,
			// 		y: -150,
			// 		scale: 0.7,
			// 		duration: 1.5,
			// 	});

			// // Scene 2: Geography - Macro zoom pattern
			// mainTimeline
			// 	.fromTo(
			// 		earthRef.current,
			// 		{ scale: 0.2, opacity: 0, y: 150 },
			// 		{ scale: 1, opacity: 1, y: 0, duration: 2 }
			// 	)
			// 	.to(earthRef.current, { scale: 2, y: -80, duration: 1.5 })
			// 	.to(earthRef.current, {
			// 		scale: 3.5,
			// 		opacity: 0,
			// 		y: -200,
			// 		duration: 1.5,
			// 	})
			// 	.fromTo(
			// 		usaRef.current,
			// 		{ scale: 0.3, opacity: 0, y: 150 },
			// 		{ scale: 1, opacity: 1, y: 0, duration: 2 },
			// 		"-=2"
			// 	)
			// 	.to(usaRef.current, { scale: 1.8, y: -80, duration: 1.5 })
			// 	.to(usaRef.current, { scale: 3, opacity: 0, y: -200, duration: 1.5 })
			// 	.fromTo(
			// 		georgiaRef.current,
			// 		{ scale: 0.2, opacity: 0, y: 150, rotation: -30 },
			// 		{ scale: 1, opacity: 1, y: 0, rotation: 0, duration: 2 },
			// 		"-=2"
			// 	)
			// 	.to(georgiaRef.current, { scale: 1.8, y: -80, duration: 1.5 })
			// 	.to(georgiaRef.current, {
			// 		opacity: 0,
			// 		scale: 3,
			// 		y: -200,
			// 		duration: 1.5,
			// 	});

			// // Scene 3: Early Life - Macro zoom pattern
			// mainTimeline
			// 	.fromTo(
			// 		earlyLifeRef.current,
			// 		{ scale: 0.2, opacity: 0, y: 150 },
			// 		{ scale: 1, opacity: 1, y: 0, duration: 2.5 }
			// 	)
			// 	.to(earlyLifeRef.current, { scale: 1.8, y: -80, duration: 1.5 })
			// 	.to(earlyLifeRef.current, {
			// 		opacity: 0,
			// 		scale: 3,
			// 		y: -200,
			// 		duration: 1.5,
			// 	});

			// // Scene 4: Education - Macro zoom pattern
			// mainTimeline
			// 	.fromTo(
			// 		bookRef.current,
			// 		{ scale: 0.2, opacity: 0, y: 150, rotation: -40 },
			// 		{ scale: 1, opacity: 1, y: 0, rotation: 0, duration: 2.5 }
			// 	)
			// 	.to(bookRef.current, { scale: 1.8, y: -80, duration: 1.5 })
			// 	.to(bookRef.current, {
			// 		opacity: 0,
			// 		scale: 3,
			// 		y: -200,
			// 		rotation: 15,
			// 		duration: 1.5,
			// 	});

			// // Scene 5: Job Experience - Macro zoom pattern
			// mainTimeline
			// 	.fromTo(
			// 		briefcaseRef.current,
			// 		{ scale: 0.2, opacity: 0, y: 150 },
			// 		{ scale: 1, opacity: 1, y: 0, duration: 2.5 }
			// 	)
			// 	.to(briefcaseRef.current, {
			// 		scale: 1.8,
			// 		y: -80,
			// 		rotation: 8,
			// 		duration: 1.5,
			// 	})
			// 	.to(briefcaseRef.current, {
			// 		opacity: 0,
			// 		scale: 3,
			// 		y: -200,
			// 		rotation: -8,
			// 		duration: 1.5,
			// 	});

			// // Scene 6: Today - Macro zoom pattern (final scene)
			// mainTimeline
			// 	.fromTo(
			// 		todayRef.current,
			// 		{ scale: 0.2, opacity: 0, y: 150, rotation: 60 },
			// 		{ scale: 1, opacity: 1, y: 0, rotation: 0, duration: 2.5 }
			// 	)
			// 	.to(todayRef.current, { scale: 1.3, y: -50, duration: 1.5 });

			// Parallax circle effects
			gsap.utils.toArray(".parallax-slow").forEach((element) => {
				gsap.to(element, {
					y: -180,
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top top",
						end: "bottom bottom",
						scrub: 2,
					},
				});
			});

			gsap.utils.toArray(".parallax-fast").forEach((element) => {
				gsap.to(element, {
					y: -300,
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top top",
						end: "bottom bottom",
						scrub: 1,
					},
				});
			});

			// Animated arrows
			const arrowRefs = [arrow1Ref, arrow2Ref, arrow3Ref, arrow4Ref];
			arrowRefs.forEach((ref, index) => {
				if (ref.current) {
					gsap.to(ref.current, {
						y: 20,
						opacity: 0.6,
						repeat: -1,
						yoyo: true,
						duration: 1.3 + index * 0.15,
						ease: "sine.inOut",
					});
				}
			});
		},
		{ scope: containerRef }
	);

	const splitText = (text) => {
		return text.split("").map((char, i) => (
			<span key={i} className="char">
				{char === " " ? "\u00A0" : char}
			</span>
		));
	};

	return (
		<div className="story-container" ref={containerRef}>
			{/* Parallax Background */}
			<div className="background-layer" ref={backgroundRef}></div>

			{/* Fixed Progress Bar */}
			<div className="progress-container">
				<div className="progress-bar" ref={progressBarRef}></div>
			</div>

			{/* Scene 1: Hero */}
			<section className="scene scene-hero">
				<div className="content-wrapper">
					<div className="hero-emoji" ref={heroEmojiRef}>
						👨🏽‍💻
					</div>
					<h1 className="hero-text" ref={heroTextRef}>
						{splitText("Hi, my name is ")}
						<span className="name">{splitText("Horatious")}</span>
					</h1>
				</div>
				<div className="arrow arrow-sketch" ref={arrow1Ref}>
					↓
				</div>
			</section>

			{/* Scene 2: Geography */}
			<section className="scene scene-geography">
				<div className="circle parallax-slow" ref={earthRef}>
					<span className="emoji">🌎</span>
					<p className="label">Origins</p>
				</div>
				<div className="circle parallax-fast" ref={usaRef}>
					<span className="emoji">🗺️</span>
					<p className="label">United States</p>
				</div>
				<div className="circle" ref={georgiaRef}>
					<span className="emoji">🍑</span>
					<p className="label">Georgia</p>
					<p className="story-text">
						In Georgia's tech landscape, curiosity became my compass. Every
						system was a mystery waiting to be understood.
					</p>
				</div>
				<div className="arrow arrow-sketch" ref={arrow2Ref}>
					↓
				</div>
			</section>

			{/* Scene 3: Early Life */}
			<section className="scene scene-early">
				<div className="circle" ref={earlyLifeRef}>
					<span className="emoji">🧒🏽</span>
					<p className="label">Early Years</p>
					<p className="story-text">
						Taking apart toys to understand mechanics. Building contraptions
						from spare parts. The engineer's mind was forming naturally.
					</p>
					<div className="details">
						<span>Natural problem solver</span>
						<span>Curious tinkerer</span>
						<span>Systems thinker</span>
					</div>
				</div>
			</section>

			{/* Scene 4: Education */}
			<section className="scene scene-education">
				<div className="circle" ref={bookRef}>
					<span className="emoji">👨🏾‍🎓</span>
					<p className="label">Education</p>
					<p className="story-text">
						Self-taught. Each line of code revealed new possibilities. Learning
						to think in algorithms, see patterns in chaos, build solutions from
						first principles.
					</p>
					<div className="details">
						<span>Self-directed learner</span>
						<span>Pattern recognition</span>
						<span>First principles thinking</span>
					</div>
				</div>
				<div className="arrow arrow-sketch" ref={arrow3Ref}>
					↓
				</div>
			</section>

			{/* Scene 5: Job Experience */}
			<section className="scene scene-job">
				<div className="circle" ref={briefcaseRef}>
					<span className="emoji">💼</span>
					<p className="label">The Journey</p>
					<p className="story-text">
						Real-world challenges sharpened intuition. Each project taught
						elegant solutions. Systems thinking became instinct, not just skill.
					</p>
					<div className="details">
						<span>Intuitive engineering</span>
						<span>User-centric design</span>
						<span>Scalable solutions</span>
					</div>
				</div>
				<div className="arrow arrow-sketch" ref={arrow4Ref}>
					↓
				</div>
			</section>

			{/* Scene 6: Today */}
			<section className="scene scene-today">
				<div className="circle" ref={todayRef}>
					<span className="emoji">⚡</span>
					<p className="label">Today</p>
					<p className="story-text">
						Software engineering isn't just what I do—it's how I see the world.
						Every challenge is an opportunity to build something meaningful.
						Intuition meets experience. Logic meets creativity.
					</p>
					<div className="details">
						<span>Creative problem solver</span>
						<span>Intuitive architect</span>
						<span>Impact driven</span>
					</div>
				</div>
			</section>

			{/* Scroll spacer */}
			<div className="spacer"></div>
		</div>
	);
};

export default StoryScroll;
