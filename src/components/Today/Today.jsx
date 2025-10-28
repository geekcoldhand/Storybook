export default function Today() {
	return (
		<section className="scene today-scene center">
			<div className="today-panel ">
				
		<div className="chapter">
				<hr />
				<h2 className="audioFont xxxl">
					Lorem ipsum dolor sit, amet consectetur
				</h2>
				<hr />
			</div>
				<p className="storyaParagraph">
					I continue to expand my expertise in AWS Cloud Services and explore
					emerging trends in software development and operations.
				</p>
				<br />
				<p className="storyaParagraph">
					<div className="left-container">
						<img
							className="circle-image"
							src={`${process.env.PUBLIC_URL}/rampTest.gif`}
							alt=""
							style={{
								height: "150px",
								borderRadius: "50%",
								shapeOutside: "circle(50%)",
							}}
						/>
					</div>
					I discovered a love for embedded programming languages (Java and C++)
					in high school from my dad.
					<br />
					That excitement led to me majoring in Computer Science, growing my
					focus toward web development. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Officia labore nemo sint obcaecati iusto. Optio
					culpa sunt velit reiciendis eligendi distinctio sint dignissimos
					aspernatur, natus corrupti, voluptates pariatur voluptatibus debitis?
				</p>
				<br />
				<p className="storyaParagraph">
					I'm always open to connecting with people who share my passion for
					learning, teaching, and discussing new technologies.
				</p>
			</div>
		</section>
	);
}
