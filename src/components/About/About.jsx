import gsap from "gsap";

export default function About() {
	return (
		<section id="about-me" className="scene about-me center">
			<div className="chapter">
				<hr />
				<h2 className="audioFont xxxl">Lorem ipsum dolor sit, amet consectetur</h2>
				<hr />
			</div>
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
							border: "2px solid navy",
						}}
					/>
				</div>
				I'm a Senior Software Engineer with over seven years of experience
				delivering scalable, cloud-native applications across both front-end and
				back-end systems. I focus on full-stack development, specializing in
				cloud computing, microservices architecture, and modern DevOps
				practices.
			</p>
			<br />
			<p>
				I hold a Bachelor of Science in Computer Science from the University of
				West Georgia and a Full Stack Development certification from the Georgia
				Institute of Technology, with a focus on the MERN stack. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
							border: "2px solid navy",
						}}
					/>
				</div>
				I discovered a love for embedded programming languages (Java and C++) in
				high school from my dad.
				<br />
				<br	/>
				That excitement led to me majoring in Computer Science, growing my focus
				toward web development. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Officia labore nemo sint obcaecati iusto. Optio culpa
				sunt velit reiciendis eligendi distinctio sint dignissimos aspernatur,
				natus corrupti, voluptates pariatur voluptatibus debitis?
			</p>
			<br />
		</section>
	);
}
