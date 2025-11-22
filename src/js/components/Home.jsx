import React, { useState, useRef } from "react";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import Hero from "./Hero.jsx";

const Card = (props) => { // Componentes son Funcionales

	return (
		<div className="p-2 col col-md-12 col-sm-12 col-lg-4 col-xl-4">
			<div className="card mx-auto" style={{
				margin: "auto",
			}}>
			{/* <img src="..." className="card-img-top" alt="..."> */}
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	)
};


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Hero />

			<div className="d-flex flex-wrap container my-5">
				<Card title="Hola Omar!" />	
				<Card title="Hola Jessica!" />
				<Card title="Hola Sasuke!" />	
			</div>


			<Footer />
		</div>
	);
};

export default Home; // solo uno por archivo