import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Storybook.css";
import About from "../About/About";
import Geogrophy from "../Geography/Geography";
import Education from "../Education/Education";
import Professional from "../Professional/Professional";
import Today from "../Today/Today";

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
			scroller: parallaxRef.current.container.current,
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
						<About />
					</ParallaxLayer>

					<ParallaxLayer offset={1.2} speed={0.5} factor={0.5}>
						<section className="scene geography-scene center">
							<h2 className="permanent xxxl">Early Life</h2>
							<div className="globe-emoji macro">🌎</div>

							<p> im from Alpharetta, Georgia</p>
						</section>
					</ParallaxLayer>

					<ParallaxLayer offset={1.8} speed={0.3} factor={1}>
						<Geogrophy />
					</ParallaxLayer>

					<ParallaxLayer offset={2.5} speed={0.3} factor={1}>
						<Education />
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={0.3} factor={1}>
						<Professional />
					</ParallaxLayer>

					<ParallaxLayer offset={3.85} speed={0.3} factor={1}>
						<Today />
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
