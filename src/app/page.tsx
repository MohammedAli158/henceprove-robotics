
import HeroSection from "./components/HeroSection";
import VideoComponent from "./components/VideoComponent";
import SwiperSection from "./components/SwiperSection";
import AltComponent from "./components/AltComponent";
import PricingSection from "./components/PricingSection";
import MentorshipSection from "./components/Card";
export type Card = 
    {
        title:string,subtitle:string,subCards:{
            title:string,description:string
        }[]
    }[]


export default function Home() {
	
	const cards:Card = [
  {
    title: "Beginner Robotics",
    subtitle: "Kickstart your child’s tech journey with hands-on robot building",
    subCards: [
      { title: "Build Your First Bot", description: "Kids assemble a simple moving robot using safe components." },
      { title: "Basic Sensors", description: "Understanding light, motion, and touch sensors through fun experiments." },
      { title: "Logic for Kids", description: "Learn basic logic needed to control robots in a playful way." }
    ]
  },

  {
    title: "AI for Young Minds",
    subtitle: "Introduce AI concepts through games, visuals, and simple projects",
    subCards: [
      { title: "Image Recognition", description: "Kids train a tiny model to identify shapes and colors." },
      { title: "Voice Commands", description: "Build a mini assistant that responds to simple phrases." },
      { title: "Smart Decisions", description: "Fun activities showing how computers make choices." }
    ]
  },

  {
    title: "Coding Adventures",
    subtitle: "Interactive coding with block-based and beginner-friendly tools",
    subCards: [
      { title: "Drag & Drop Coding", description: "Learn fundamentals using Scratch and visual tools." },
      { title: "Game Creation", description: "Build small games to practice logic and creativity." },
      { title: "Robot Control Coding", description: "Program robots to move, turn, sense, and explore." }
    ]
  },

  {
    title: "Innovation Lab",
    subtitle: "Let kids explore, create, and solve real-world problems",
    subCards: [
      { title: "Mini Projects", description: "Weekly challenges such as maze-solving robots." },
      { title: "Creative Engineering", description: "Kids design mechanisms with LEGO, cardboard, and motors." },
      { title: "Show & Tell Day", description: "Present their creations and learn to explain ideas confidently." }
    ]
  }
];
	return (
		<div className="" >
			

			<HeroSection/>
			<VideoComponent/>
			<SwiperSection/>
			<MentorshipSection card={cards}/>
			<AltComponent/>
			<PricingSection/>
			{/* overflow tag */}
	
		</div>
	);
}
 