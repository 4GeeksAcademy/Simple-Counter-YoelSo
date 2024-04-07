
import React from "react";
import { Digitos } from "./Digitos";

//create your first component


const Home = ({Seconds}) => {

	return (
		<React.Fragment>
			<div className="text-center mt-5 display-1">
				<Digitos Seconds={Seconds} />
			</div>
		</React.Fragment>
	);
};

export default Home;
