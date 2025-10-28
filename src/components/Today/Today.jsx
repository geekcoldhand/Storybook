export default function Today() {
	return (
		<section className="scene today-scene center">
			<div className="today-panel ">
				<h2 className="permanent xxxl">Recently</h2>

				<p>
					I continue to expand my expertise in AWS Cloud Services and explore
					emerging trends in software development and operations.
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
								border: "2px solid navy",
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
				<p>
					I'm always open to connecting with people who share my passion for
					learning, teaching, and discussing new technologies.
				</p>
			</div>
		</section>
	);
}
