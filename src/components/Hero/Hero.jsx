export default function Hero() {
	return (
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
						Hi, my name is <span className="hero-name audioFont">Horatious</span>
					</h1>
				</div>
			</div>
		</section>
	);
}
