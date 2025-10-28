import React from "react";

export default class Clouds extends React.Component {
	static Cloud1 = () => {
		return (
			<img
				className="cloud"
				src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
				alt=""
				style={{}}
			/>
		);
	};

	static Cloud2 = () => {
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

	static Cloud3 = () => {
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

	static Cloud4 = () => {
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

	static Cloud5 = () => {
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

	static Cloud6 = () => {
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

	static Cloud7 = () => {
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

	static cloud11() {
		return (
			<img
				className="cloud"
				src={`${process.env.PUBLIC_URL}/drawnClouds.png`}
				alt=""
				style={{}}
			/>
		);
	}
}
