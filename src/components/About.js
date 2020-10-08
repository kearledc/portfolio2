import React from "react";

export default () => (
	<div className="about--container container">
		<div
			data-aos="fade-right"
			data-aos-easing="ease-in-out"
			data-aos-duration="1500"
			className="about--description"
		>
			<i className="fas fa-user"></i>
			<div className="about--description_content">
				<h2>About Me:</h2>
				<ul className="about--description_list">
					<li className="about-bullets">
						<i className="far fa-arrow-alt-circle-right"></i>I
						Graduated BS ECE at FEU Institute of Technology
					</li>
					<li className="about-bullets">
						<i className="far fa-arrow-alt-circle-right"></i>
						Certified Full Stack Developer by Zuitt Incorporated
						(2019)
					</li>
					<li className="about-bullets">
						<i className="far fa-arrow-alt-circle-right"></i>I
						Worked as a Front End Developer for MPOTECH with job
						responsibilities of creating websites from scratch using
						HTML/CSS/JS
					</li>
				</ul>
				<div className="social--container">
					<a
						href="https://github.com/kearledc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-github-square"></i>
					</a>
					<a
						href="https://linkedin.com/in/kearledc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://facebook.com/kearledc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook-square"></i>
					</a>
				</div>
			</div>
		</div>
		<div
			className="about--frontend"
			data-aos="fade-up"
			data-aos-easing="ease-in-out"
			data-aos-duration="1500"
		>
			<i className="fas fa-code"></i>
			<div className="about--frontend_content">
				<h2>Front End Proficiency</h2>
				<ul className="about--frontend_list">
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>HTML5
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>CSS3
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>
						Javascript / JQuery
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>
						ReactJS
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>Redux
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>PHP &
						Laravel
					</li>

					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>
						SASS/SCSS
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>
						Semantic-UI
					</li>
					<li className="about-frontend">
						<i className="far fa-arrow-alt-circle-right"></i>
						Bootstrap
					</li>
				</ul>
			</div>
		</div>
		<div
			className="about--backend"
			data-aos="fade-left"
			data-aos-easing="ease-in-out"
			data-aos-duration="1500"
		>
			<i className="fas fa-database"></i>
			<div className="about--backend_content">
				<h2 className="backEnd-header">Back End Proficiency</h2>
				<ul className="about--backend_list">
					<li className="about-backend">
						<i className="far fa-arrow-alt-circle-right"></i>
						MariaDB & MYSQL
					</li>
					<li className="about-backend">
						<i className="far fa-arrow-alt-circle-right"></i>
						MongoDB
					</li>
					<li className="about-backend">
						<i className="far fa-arrow-alt-circle-right"></i>
						GraphQL & NoSQL
					</li>
					<li className="about-backend">
						<i className="far fa-arrow-alt-circle-right"></i>
						Firebase
					</li>
					<li className="about-backend">
						<i className="far fa-arrow-alt-circle-right"></i>
						PostgresSQL
					</li>
					<li className="about-backend">
						<i className="far fa-arrow-alt-circle-right"></i>
						Laravel
					</li>
				</ul>
			</div>
		</div>
	</div>
);
