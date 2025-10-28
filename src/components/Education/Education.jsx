export default function Education() {
	return (
		<section className="scene education-scene center">
			<div className="chapter">
				<hr />
				<h2 className="audioFont xxxl">
					Lorem ipsum dolor sit, amet consectetur
				</h2>
				<hr />
			</div>

			<div className="education-panel ">
				<p className="storyaParagraph">
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
					Bachelor of Science in Computer Science, University of West Georgia
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
					itaque atque. Culpa asperiores similique, at aliquam rem unde
					assumenda ad vero, corrupti provident consequatur! Ratione quas
					provident vero odio voluptatibus.
					<br />
					<br />
					Full Stack Development certification, Georgia Institute of Technology
					(MERN stack)
					<br />
					<div className="right-container" style={{ marginRight: "1rem" }}>
						<img
							className="circle-image"
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
					Studied patterns, logic, and problem decomposition. I love systems
					that are simple and repeatable. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quaerat repellendus deleniti tempore quasi ea at
					enim doloremque vel quisquam temporibus nihil doloribus magni totam ex
					sunt blanditiis, architecto vero sed!
				</p>
			</div>
		</section>
	);
}
