export default function Geography() {
	return (
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
				I discovered a love for embedded programming languages (Java and C++) in
				high school from my dad.
				<br />
				That excitement led to me majoring in Computer Science, growing my focus
				toward web development. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Officia labore nemo sint obcaecati iusto. Optio culpa
				sunt velit reiciendis eligendi distinctio sint dignissimos aspernatur,
				natus corrupti, voluptates pariatur voluptatibus debitis?
			</p>
			<br />
			<p>
				Hours of preparation for hackathons, app competitions, and tech
				conferences have comforted me in fast-paced learning and collaborative
				environments. Diversity and collaboration gravitate me the most toward
				programming.
			</p>
		</section>
	);
}
