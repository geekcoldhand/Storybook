import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Storybook.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Storybook = () => {
	const parallaxRef = useRef(null);
	const rootRef = useRef(null);
	const progressRef = useRef(null);

	useGSAP(() => {
		const triggerEl = parallaxRef.current?.container?.current;
		if (!triggerEl) return;

		ScrollTrigger.create({
			trigger: parallaxRef.current.container.current,
			scroller: parallaxRef.current.container.current, // 👈 key part
			start: "top top",
			end: "bottom bottom",
			scrub: true,
			onUpdate: (self) => {
				gsap.to(progressRef.current, {
					scaleX: self.progress,
					duration: 0.1,
					ease: "none",
				});
			},
		});
	});

	return (
		<>
			<div className="progress-container">
				<div className="progress-bar" ref={progressRef}></div>
			</div>

			<Parallax pages={5} ref={parallaxRef}>
				<div ref={rootRef} className="storybook-root">
					<div className="bg-layer">
						<div
							className="bg-image"
							role="img"
							aria-label="placeholder background"
						/>
					</div>
					<ParallaxLayer offset={0} speed={0.5} factor={0.5}>
						<section className="scene hero-scene center">
							<div className="hero-content center">
								<div className="emoji circle-border">
									<img src="/avatar.png" alt="" className="hero-avatar " />
								</div>

								<div className="name-container">
									<h1 className="hero-title pinstripe">
										Hi, my name is <span className="hero-name ">Horatious</span>
									</h1>
								</div>
							</div>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={0} speed={1.5} factor={0.5} horizontal={true}>
						<img
							className="cloud"
							src="/drawnClouds.png"
							alt=""
							style={{
								transform: "translateY(68vh) translateX(10vw)",
							}}
						/>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.5} horizontal={true}>
						<img
							className="cloud"
							src="/drawnClouds.png"
							alt=""
							style={{
								transform: "translateY(60vh) translateX(60vw)",
							}}
						/>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0.0}
						speed={1.5}
						factor={0.5}
						horizontal={true}
					>
						<img
							className="cloud"
							src="/drawnClouds.png"
							alt=""
							style={{
								transform: "translateY(35vh) translateX(40%)",
							}}
						/>
					</ParallaxLayer>
					<ParallaxLayer offset={-2} speed={1.5} factor={-1} horizontal={true}>
						<img
							src="/cloud1.png"
							alt=""
							style={{
								width: "250px",
								height: "200px",
							}}
						/>
					</ParallaxLayer>

					<ParallaxLayer offset={0.75} speed={0.5} factor={0.5}>
						<section id="about-me" className="scene about-me center">
							<h2>About Me</h2>

							<p>
							<div className="image-container">
								<img
									src="/avatar.png"
									alt=""
							
									style={{ width: "150px", height: "150px", borderRadius: "50%" , shapeOutside: "circle(50%), float: left"}}
								/>
							</div>
								I'm a Senior Software Engineer with over seven years of
								experience delivering scalable, cloud-native applications across
								both front-end and back-end systems. I focus on full-stack
								development, specializing in cloud computing, microservices
								architecture, and modern DevOps practices.
							</p>
							<br></br>
							<p>
								I hold a Bachelor of Science in Computer Science from the
								University of West Georgia and a Full Stack Development
								certification from the Georgia Institute of Technology, with a
								focus on the MERN stack.
							</p>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={1} speed={0.5} factor={0.5}>
						<section className="scene geography-scene center">
							<h2>Where I'm From</h2>
							<div className="globe-emoji macro">🌎</div>
							<div className="map-usa micro fade-in">🇺🇸</div>
							<p> im from Alpharetta, Georgia</p>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={1.5} speed={0.3} factor={0.5}>
						<section id="early-life" className="scene center">
							<h2>Early Life</h2>
							<p>
								I discovered a love for embedded programming languages (Java and
								C++) in high school from my dad. That excitement led to me
								majoring in Computer Science, growing my focus toward web
								development.
							</p>
							<p>
								Hours of preparation for hackathons, app competitions, and tech
								conferences have comforted me in fast-paced learning and
								collaborative environments. Diversity and collaboration
								gravitate me the most toward programming.
							</p>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={0.3} factor={1}>
						<section className="scene education-scene center">
							<h2 className="pinstripe">Education</h2>
							<div className="book-emoji macro">📚</div>
							<div className="education-panel card">
								<ul>
									<li>
										Bachelor of Science in Computer Science, University of West
										Georgia
									</li>
									<li>
										Full Stack Development certification, Georgia Institute of
										Technology (MERN stack)
									</li>
								</ul>
								<p>
									Studied patterns, logic, and problem decomposition. I love
									systems that are simple and repeatable.
								</p>
							</div>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={4} speed={0.3} factor={1}>
						<section className="scene career-scene center">
							<div className="briefcase-emoji macro">💼</div>
							<div className="career-panel card">
								<h2>Professional Career</h2>
								<p>
									As a Senior Software Engineer at Accenture, I serve as a
									subject matter expert in transforming monolithic legacy
									systems into containerized, service-oriented architectures
									that enhance performance, maintainability, and cost
									efficiency.
								</p>
								<p>
									I consistently implement automated CI/CD pipelines, develop
									secure and efficient RESTful APIs, and provision
									infrastructure using Infrastructure-as-Code tools.
								</p>
								<p>
									I'm also passionate about mentoring and teaching, leading a
									youth mentorship program at Nexus Church in Atlanta, where I
									teach foundational programming principles and inspire the next
									generation of STEM talent.
								</p>
							</div>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={5} speed={0.3} factor={1}>
						<section className="scene today-scene">
							<div className="today-panel card">
								<h2>What I'm Up To</h2>
								<p>
									I continue to expand my expertise in AWS Cloud Services and
									explore emerging trends in software development and
									operations.
								</p>
								<br />
								<p>
									I thrive on solving complex technical challenges and designing
									scalable systems, drawing energy from collaborative
									environments where innovation leads the way.
								</p>
								<br />
								<p>
									I'm always open to connecting with people who share my passion
									for learning, teaching, and discussing new technologies.
								</p>
							</div>
						</section>
					</ParallaxLayer>
					<footer className=" footer-scene center">
						<small className="pinstripe">Storybook</small>
					</footer>
				</div>
			</Parallax>
		</>
	);
};
export default Storybook;
