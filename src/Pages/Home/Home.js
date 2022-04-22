import React from "react";
import HeroSection from "../../Components/Hero/HeroSection";
import "../../App.css";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import CompanyProfile from "../../company-profile.json";

const Home = () => {
	return (
		<>
			<HeroSection />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;
