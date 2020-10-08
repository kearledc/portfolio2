import React, { useEffect } from "react";
import Aos from "aos";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";

const Portfolio = () => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<div>
			<Home />
			<About />
			<Projects />
			<Footer />
		</div>
	);
};

export default Portfolio;
