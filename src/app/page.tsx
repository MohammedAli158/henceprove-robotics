import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoComponent from "./components/VideoComponent";
import SwiperSection from "./components/SwiperSection";
import AltComponent from "./components/AltComponent";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div>
			<Navbar/>
			<HeroSection/>
			<VideoComponent/>
			<SwiperSection/>
			<AltComponent/>
			{/* overflow tag */}<Footer/>
		</div>
	);
}
