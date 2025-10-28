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
import Clouds from "../Clouds/Clouds";

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

			<Parallax pages={7.5} ref={parallaxRef}>
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
						{/* <Cloud1 /> */}
						{Clouds.Cloud1()}
					</ParallaxLayer>
					<ParallaxLayer
						offset={0.1}
						speed={-1.5}
						factor={0.1}
						horizontal={true}
					>
						{Clouds.Cloud2()}
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
						{Clouds.Cloud3()}
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
						{Clouds.Cloud4()}
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-1.5} factor={0.1} horizontal={true}>
						{Clouds.Cloud5()}
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
						{Clouds.Cloud6()}
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={1.5} factor={0.1} horizontal={true}>
						{Clouds.Cloud7()}
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
						offset={2.2}
						speed={0.5}
						factor={1}
						style={{ zIndex: 1 }}
					>
						<Polariod />
					</ParallaxLayer>

					{/* <<<<<<<<<<<<< Geography >>>>>>>>> */}
					<ParallaxLayer offset={2.8} speed={0.5} factor={0.5}>
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

					{/* <<<<<<<<<<<<< Biker >>>>>>>>> */}
					<ParallaxLayer
						offset={4.9}
						speed={-1.1}
						factor={1}
						horizontal={true}
						style={{ zIndex: 10 }}
					>
						<Biker />
					</ParallaxLayer>

					{/* <<<<<<<<<< TV >>>>>>>>> */}
					<ParallaxLayer offset={4} speed={0.3} factor={1}>
						<TV />
					</ParallaxLayer>

					{/* <<<<<<<<<< Education >>>>>>>>> */}
					<ParallaxLayer offset={4} speed={0.3} factor={1}>
						<Education />
					</ParallaxLayer>

					{/* <<<<<<<<<< Banner  >>>>>>>>> */}
					<ParallaxLayer offset={5.2} speed={0.3} factor={0.5}>
						<Banner />
					</ParallaxLayer>

					{/* <<<<<<<<<< Professional >>>>>>>>> */}
					<ParallaxLayer offset={5} speed={0.3} factor={0.5}>
						<Professional />
					</ParallaxLayer>

					{/* <<<<<<<<<< Today >>>>>>>>> */}
					<ParallaxLayer offset={6} speed={0.3} factor={0.5}>
						<Today />
					</ParallaxLayer>

					{/* <<<<<<<<<< Projects >>>>>>>>> */}
					<ParallaxLayer offset={7.4} speed={0.3} factor={0.5}>
						<TV2 />
					</ParallaxLayer>
					<footer className=" footer-scene center">
						<small className="pinstripe">Storybook</small>
					</footer>
				</div>
			</Parallax>
		</>
	);
};

const Banner = () => {
	return (
		<div className="banner-container">
			<h1 className="audioFont banner">
				Lorem, ipsum dolor sit  consecte earum!
			</h1>
		</div>
	);
};
const Biker = () => {
	return (
		<div className="biker">
			<img
				src={`${process.env.PUBLIC_URL}/biker.png`}
				alt=""
				style={{
					height: "7rem",

					transform: "translateY(520vh) translateX(-922vw)",
				}}
			/>
		</div>
	);
};

const TV = () => {
	return (
		<div className="tv">
			<img
				src={`${process.env.PUBLIC_URL}/onStage.gif`}
				alt=""
				style={{
					position: "relative",
					height: "6rem",
					width: "6rem",
					transform: "translateY(-70vh)",
				}}
			/>

			<hr />
			<img
				src={`${process.env.PUBLIC_URL}/onStage.gif`}
				alt=""
				style={{
					position: "relative",
					height: "6rem",
					width: "6rem",
					transform: "translateY(-70vh)",
				}}
			/>
			<hr />
			<img
				src={`${process.env.PUBLIC_URL}/onStage.gif`}
				alt=""
				style={{
					position: "relative",
					height: "6rem",
					width: "6rem",
					transform: "translateY(-70vh)",
				}}
			/>
		</div>
	);
};
const TV2 = () => {
	return (
		<div className="tv">
			<img
				src={`${process.env.PUBLIC_URL}/retroTV.png`}
				alt=""
				style={{
					position: "relative",
					height: "7rem",
					width: "7rem",
					transform: "translateY(-70vh)",
				}}
			/>

			<img
				src={`${process.env.PUBLIC_URL}/retroTV.png`}
				alt=""
				style={{
					position: "relative",
					height: "7rem",
					width: "7rem",
					transform: "translateY(-70vh)",
				}}
			/>

			<img
				src={`${process.env.PUBLIC_URL}/retroTV.png`}
				alt=""
				style={{
					position: "relative",
					height: "7rem",
					width: "7rem",
					transform: "translateY(-70vh)",
				}}
			/>
		</div>
	);
};
const Polariod = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "75vh",
				border: "10px solid white",
				transform: "translateY(10vh) translateX(0vw)",
				maxWidth: "800px",
			}}
			className="polariod"
		>
			<img
				src={`${process.env.PUBLIC_URL}/rampTest.gif`}
				alt=""
				style={{ height: "100%", zIndex: 0 }}
				objectFit="cover"
			/>
		</div>
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

export default Storybook;
