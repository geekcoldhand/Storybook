import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Storybook.css";
import Hero from "../Hero/Hero";
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

			<Parallax pages={7} ref={parallaxRef}>
				<div ref={rootRef} className="storybook-root">
					<div className="bg-layer">
						<div
							className="bg-image"
							role="img"
							aria-label="placeholder background"
						/>
					</div>

					{/* <<<<<<<<< Hero >>>>>>>>>  */}
					<ParallaxLayer
						offset={0}
						speed={0.5}
						factor={0.5}
						style={{ zIndex: 10 }}
					>
						<Hero />
					</ParallaxLayer>

					{/* <<<<<<<<< Clouds >>>>>>>>  */}
					<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
						<Cloud1 />
					</ParallaxLayer>
					<ParallaxLayer
						offset={0.1}
						speed={-1.5}
						factor={0.1}
						horizontal={true}
					>
						<Cloud2 />
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
						<Cloud3 />
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
						<Cloud4 />
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
						<Cloud5 />
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
						<Cloud6 />
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
						<Cloud7 />
					</ParallaxLayer>

					{/* <<<<<<<<<< Train Animaiton >>>>>>>>>> */}
					<ParallaxLayer
						offset={0.9}
						speed={-1.8}
						factor={1}
						horizontal={true}
						style={{ zIndex: 10 }}
					>
						<Train />
					</ParallaxLayer>

					{/*  <<<<<<<<<<<< City >>>>>>>>>>>>> */}
					<ParallaxLayer
						offset={0.9}
						speed={0.1}
						factor={1}
						style={{ zIndex: 1 }}
					>
						<City />
					</ParallaxLayer>
					{/* <<<<<<<<<< About >>>>>>>>> */}
					<ParallaxLayer offset={1} speed={0.5} factor={1}>
						<About />
					</ParallaxLayer>

					{/* <<<<<<<<<<< Polariod >>>>>>>>> */}
					<ParallaxLayer
						offset={2}
						speed={0.5}
						factor={1}
						style={{ zIndex: 1 }}
					>
						<Polariod />
					</ParallaxLayer>

					{/* <<<<<<<<<<<<< Geography >>>>>>>>> */}
					<ParallaxLayer offset={2.1} speed={0.5} factor={0.5}>
						<section className="scene geography-scene center">
							<div className="chapter">
								<hr />
								<h2 className="audioFont xxxl">
									Lorem ipsum dolor sit, amet consectetur
								</h2>
								<hr />
							</div>
						</section>
					</ParallaxLayer>
					{/* <<<<<<<<<<<<< Geography >>>>>>>>> */}
					<ParallaxLayer offset={3} speed={0.3} factor={1}>
						<Geogrophy />
					</ParallaxLayer>
					{/* <<<<<<<<<< Education >>>>>>>>> */}
					<ParallaxLayer offset={4} speed={0.3} factor={1}>
						<Education />
					</ParallaxLayer>
					{/* <<<<<<<<<< Professional >>>>>>>>> */}
					<ParallaxLayer offset={5} speed={0.3} factor={0.5}>
						<Professional />
					</ParallaxLayer>
					{/* <<<<<<<<<< Today >>>>>>>>> */}
					<ParallaxLayer offset={6} speed={0.3} factor={0.5}>
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

const Polariod = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "65vh",
				border: "10px solid white",
				transform: "translateY(-20vh) translateX(0vw)",
			}}
			className="polariod"
		></div>
	);
};

const City = () => {
	return (
		<>
			<img
				src={`${process.env.PUBLIC_URL}/buckhead.png`}
				alt=""
				style={{
					height: "10rem",
					transform: "translateY(-10vh) translateX(-10vw)",
				}}
			/>
			;
		</>
	);
};

const Train = () => {
	return (
		<img
			src={`${process.env.PUBLIC_URL}/marta.png`}
			alt=""
			style={{
				height: "4rem",
				transform: "translateY(95vh) translateX(-480vw)",
			}}
		/>
	);
};
const Cloud1 = () => {
	return (
		<img
			className="cloud"
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{}}
		/>
	);
};

const Cloud2 = () => {
	return (
		<img
			className="cloud"
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{
				transform: "translateY(60vh) translateX(60vw)",
			}}
		/>
	);
};

const Cloud3 = () => {
	return (
		<img
			className="cloud"
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{
				transform: "translateY(70vh) translateX(80vw)",
			}}
		/>
	);
};

const Cloud4 = () => {
	return (
		<img
			className="cloud"
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{
				transform: "translateY(70vh) translateX(40vw)",
			}}
		/>
	);
};

const Cloud5 = () => {
	return (
		<img
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{
				transform: "translateY(65vh) translateX(47%) ",
				height: "10rem",
			}}
		/>
	);
};

const Cloud6 = () => {
	return (
		<img
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{
				height: "10rem",
				transform: "translateY(63vh) translateX(-65%) rotate(180deg)",
			}}
		/>
	);
};

const Cloud7 = () => {
	return (
		<img
			src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
			alt=""
			style={{
				height: "7rem",
				transform: "translateY(77vh) translateX(-15%) rotate(180deg)",
			}}
		/>
	);
};

export default Storybook;
