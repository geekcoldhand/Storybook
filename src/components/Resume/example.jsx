import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./StoryR.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StoryResume() {
	const ref = useRef();
	const heroEmojiRef = useRef(null);
	const earthRef = useRef(null);
	const usaRef = useRef(null);
	const georgiaRef = useRef(null);
	const earlyLifeRef = useRef(null);
	const bookRef = useRef(null);
	const briefcaseRef = useRef(null);
	const progressBarRef = useRef(null);
	const todayRef = useRef(null);

	useGSAP(() => {
		ScrollTrigger.create({
			start: "top top",
			end: "max", // Scrolls to maximum scroll height
			onUpdate: (self) => {
				gsap.to(progressBarRef.current, {
					scaleX: self.progress,
					duration: 0.1,
				});
			},
		});
	});

	return (
		<Parallax pages={4} ref={ref}>
			<div className="progress-bar-container">
				<div ref={progressBarRef} className="progress-bar"></div>
			</div>
			<ParallaxLayer
				offset={0}
				speed={0.5}
				factor={2}
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1760715142134-fe34467c93f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1058)`,
					backgroundSize: "cover",
				}}
			>
				<div className="image-container">
					<img
						src="/image.png"
						alt=""
						style={{
							width: "100px",
							height: "100px",
							shapeOutside: "circle(50%)",
						}}
					/>
				</div>
				<p
					style={{
						shapeOutside: "circle(50%)",
					}}
				>
					Layers can contain anything Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolorum distinctio impedit iusto quidem, quo dolorem
					neque quia. Consectetur perspiciatis illum, quaerat eum harum
					doloremque nisi? Animi, ex! Dignissimos, atque tempora.
				</p>{" "}
				<section className="scene scene-hero">
					<div className="content-wrapper">
						<div className="hero-emoji" ref={heroEmojiRef}>
							👨🏽‍💻
						</div>
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
				</section>
			</ParallaxLayer>
			<ParallaxLayer sticky={{ start: 1, end: 2 }}>
				<img src="/cat.gif"></img>
			</ParallaxLayer>
			<ParallaxLayer
				offset={2}
				speed={2}
				factor={1.5}
				style={{
					backgroundImage: `url(https://plus.unsplash.com/premium_photo-1760705088738-32f7a991dba7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480)`,
					backgroundSize: "cover",
				}}
			>
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
			</ParallaxLayer>
			<ParallaxLayer offset={3} speed={1} factor={1.5}>
				{/* Scene 4: Education */}
				<section className="scene scene-education">
					<div className="circle" ref={bookRef}>
						<span className="emoji">👨🏾‍🎓</span>
						<p className="label">Education</p>
						<p className="story-text">
							Self-taught. Each line of code revealed new possibilities.
							Learning to think in algorithms, see patterns in chaos, build
							solutions from first principles.
						</p>
						<div className="details">
							<span>Self-directed learner</span>
							<span>Pattern recognition</span>
							<span>First principles thinking</span>
						</div>
					</div>
				</section>

				{/* Scene 5: Job Experience */}
				<section className="scene scene-job">
					<div className="circle" ref={briefcaseRef}>
						<span className="emoji">💼</span>
						<p className="label">The Journey</p>
						<p className="story-text">
							Real-world challenges sharpened intuition. Each project taught
							elegant solutions. Systems thinking became instinct, not just
							skill.
						</p>
						<div className="details">
							<span>Intuitive engineering</span>
							<span>User-centric design</span>
							<span>Scalable solutions</span>
						</div>
					</div>
				</section>
				<button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
			</ParallaxLayer>
		</Parallax>
	);
}
