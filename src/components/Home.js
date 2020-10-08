import React from "react";
import Typewriter from "typewriter-effect";

export default () => (
	<div className="container home--container">
		<div className="home--image">
			<div className="home--info_container">
				<h1 className="home--header">
					<Typewriter
						options={{
							strings: ["Kevin Earle Cruz", "Web Developer"],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
			</div>
		</div>
	</div>
);
