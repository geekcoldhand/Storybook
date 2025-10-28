export default function Professional() {
	return (
		<section className="scene career-scene center">
			<div className="career-panel ">
				<h2 className="permanent xxxl">Professional Career</h2>
				<hr />
				<p className="storyaParagraph">
					As a Senior Software Engineer at Accenture, I serve as a subject
					matter expert in transforming monolithic legacy systems into
					containerized, service-oriented architectures that enhance
					performance, maintainability, and cost efficiency.
				</p>
				<br />
				<p className="storyaParagraph">
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
								marginLeft: "1rem",
								border: "2px solid navy",
							}}
						/>
					</div>
					I consistently implement automated CI/CD pipelines, develop secure and
					efficient RESTful APIs, and provision infrastructure using
					Infrastructure-as-Code tools.
				</p>
				<br />
				<p className="storyaParagraph">
					I'm also passionate about mentoring and teaching, leading a youth
					mentorship program at Nexus Church in Atlanta, where I teach
					foundational programming principles and inspire the next generation of
					STEM talent.
				</p>
			</div>
		</section>
	);
}
