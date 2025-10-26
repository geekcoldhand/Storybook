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
									<img
										src={`${process.env.PUBLIC_URL}/avatar.png`}
										alt=""
										className="hero-avatar "
									/>
								</div>

								<div className="name-container">
									<h1 className="hero-title permanent">
										Hi, my name is <span className="hero-name ">Horatious</span>
									</h1>
								</div>
							</div>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={0} speed={1.5} factor={0.5} horizontal={true}>
						<img
							className="cloud"
							src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
							alt=""
							style={{
								transform: "translateY(68vh) translateX(10vw)",
							}}
						/>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.5} horizontal={true}>
						<img
							className="cloud"
							src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
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
							src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
							alt=""
							style={{
								transform: "translateY(30vh) translateX(40%)",
							}}
						/>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.5} horizontal={true}>
						<img
							src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
							alt=""
							style={{
								transform: "translateY(65vh) translateX(47%) ",
								height: "10rem",
							}}
						/>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={1.5} factor={-1} horizontal={true}>
						<img
							src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
							alt=""
							style={{
								height: "10rem",
								transform: "translateY(17vh) translateX(-25%) rotate(180deg)",
							}}
						/>
					</ParallaxLayer>
								<ParallaxLayer offset={0} speed={1.5} factor={-1} horizontal={true}>
						<img
							src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
							alt=""
							style={{
								height: "7rem",
								transform: "translateY(77vh) translateX(-15%) rotate(180deg)",
							}}
						/>
					</ParallaxLayer>

					<ParallaxLayer offset={0.8} speed={0.5} factor={0.5}>
						<section id="about-me" className="scene about-me center">
							<h2 className="permanent xxxl">About Me</h2>
							<p>
								<div className="left-container">
									<img
										src={`${process.env.PUBLIC_URL}/onStage.gif`}
										alt=""
										style={{
											width: "150px",
											height: "150px",
											borderRadius: "50%",
											shapeOutside: "circle(50%), float: left",
										}}
									/>
								</div>
								I'm a Senior Software Engineer with over seven years of
								experience delivering scalable, cloud-native applications across
								both front-end and back-end systems. I focus on full-stack
								development, specializing in cloud computing, microservices
								architecture, and modern DevOps practices.
							</p>
							<br />
							<p>
								I hold a Bachelor of Science in Computer Science from the
								University of West Georgia and a Full Stack Development
								certification from the Georgia Institute of Technology, with a
								focus on the MERN stack.
							</p>
							<p>
								<div
									className="right-container"
									style={{ marginRight: "1rem", marginBottom: "3rem" }}
								>
									<img
										src={`${process.env.PUBLIC_URL}/okcomputer.png`}
										alt=""
										style={{
											width: "150px",
											height: "150px",
											borderRadius: "50%",
											shapeOutside: "circle(50%)",
										}}
									/>
								</div>
								I discovered a love for embedded programming languages (Java and
								C++) in high school from my dad.
								<br />
								That excitement led to me majoring in Computer Science, growing
								my focus toward web development. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Officia labore nemo sint obcaecati
								iusto. Optio culpa sunt velit reiciendis eligendi distinctio
								sint dignissimos aspernatur, natus corrupti, voluptates pariatur
								voluptatibus debitis?
							</p>
							<br />
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={1.2} speed={0.5} factor={0.5}>
						<section className="scene geography-scene center">
							<h2 className="permanent xxxl">Early Life</h2>
							<div className="globe-emoji macro">🌎</div>

							<p> im from Alpharetta, Georgia</p>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={1.8} speed={0.3} factor={1}>
						<section id="early-life" className="scene center">
							<p>
								<div className="right-container">
									<img
										src={`${process.env.PUBLIC_URL}/lego.png`}
										alt=""
										style={{
											height: "180px",
											borderRadius: "50%",
											shapeOutside: "circle(50%)",
										}}
									/>
								</div>
								I discovered a love for embedded programming languages (Java and
								C++) in high school from my dad.
								<br />
								That excitement led to me majoring in Computer Science, growing
								my focus toward web development. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Officia labore nemo sint obcaecati
								iusto. Optio culpa sunt velit reiciendis eligendi distinctio
								sint dignissimos aspernatur, natus corrupti, voluptates pariatur
								voluptatibus debitis?
							</p>
							<br />
							<p>
								Hours of preparation for hackathons, app competitions, and tech
								conferences have comforted me in fast-paced learning and
								collaborative environments. Diversity and collaboration
								gravitate me the most toward programming.
							</p>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={2.5} speed={0.3} factor={1}>
						<section className="scene education-scene center">
							<h2 className="permanent xxxl">Education</h2>

							<div className="education-panel ">
								<p>
									<div className="left-container">
										<img
											src={`${process.env.PUBLIC_URL}/education.png`}
											alt=""
											style={{
												width: "150px",
												height: "150px",
												borderRadius: "40%",
												shapeOutside: "circle(50%), float: left",
											}}
										/>
									</div>
									Bachelor of Science in Computer Science, University of West
									Georgia Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Possimus, itaque atque. Culpa asperiores similique, at
									aliquam rem unde assumenda ad vero, corrupti provident
									consequatur! Ratione quas provident vero odio voluptatibus.
									<br />
									<br />
									Full Stack Development certification, Georgia Institute of
									Technology (MERN stack)
									<br />
									<div
										className="right-container"
										style={{ marginRight: "1rem" }}
									>
										<img
											src={`${process.env.PUBLIC_URL}/einstein.png`}
											alt=""
											style={{
												width: "150px",
												height: "150px",
												borderRadius: "50%",
												shapeOutside: "circle(50%), float: left",
											}}
										/>
									</div>
									Studied patterns, logic, and problem decomposition. I love
									systems that are simple and repeatable. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Quaerat repellendus
									deleniti tempore quasi ea at enim doloremque vel quisquam
									temporibus nihil doloribus magni totam ex sunt blanditiis,
									architecto vero sed!
								</p>
							</div>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={0.3} factor={1}>
						<section className="scene career-scene center">
							<div className="career-panel ">
								<h2 className="permanent xxxl">Professional Career</h2>
								<hr />
								<p>
									As a Senior Software Engineer at Accenture, I serve as a
									subject matter expert in transforming monolithic legacy
									systems into containerized, service-oriented architectures
									that enhance performance, maintainability, and cost
									efficiency.
								</p>
								<br />
								<p>
									<div className="right-container">
										<img
											src={`${process.env.PUBLIC_URL}/professional.gif`}
											alt=""
											style={{
												height: "180px",
												borderRadius: "50%",
												shapeOutside: "circle(50%)",
												objectFit: "contain",
												marginBottom: "5rem",
												paddingLeft: "1rem",
											}}
										/>
									</div>
									I consistently implement automated CI/CD pipelines, develop
									secure and efficient RESTful APIs, and provision
									infrastructure using Infrastructure-as-Code tools.
								</p>
								<br />
								<p>
									I'm also passionate about mentoring and teaching, leading a
									youth mentorship program at Nexus Church in Atlanta, where I
									teach foundational programming principles and inspire the next
									generation of STEM talent.
								</p>
							</div>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={3.85} speed={0.3} factor={1}>
						<section className="scene today-scene center">
							<div className="today-panel ">
								<h2 className="permanent xxxl">Current Projects</h2>
								<hr />
								<p>
									I continue to expand my expertise in AWS Cloud Services and
									explore emerging trends in software development and
									operations.
								</p>
								<br />
								<p>
									<div className="left-container">
										<img
											src={`${process.env.PUBLIC_URL}/rampTest.gif`}
											alt=""
											style={{
												height: "150px",
												borderRadius: "50%",
												shapeOutside: "circle(50%)",
											}}
										/>
									</div>
									I discovered a love for embedded programming languages (Java
									and C++) in high school from my dad.
									<br />
									That excitement led to me majoring in Computer Science,
									growing my focus toward web development. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Officia labore nemo sint
									obcaecati iusto. Optio culpa sunt velit reiciendis eligendi
									distinctio sint dignissimos aspernatur, natus corrupti,
									voluptates pariatur voluptatibus debitis?
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
