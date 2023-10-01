import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Partners from "./components/Partners";
import Integration from "./components/Integration";
import TrainAI from "./components/TrainAI";
import AiPartner from "./components/AiPartner";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Phone from "./components/Phone";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Partners />
			<Intro />
			<Integration />
			<TrainAI />
			<AiPartner />
			<Tokenomics />
			<Roadmap />
			<Team />
			<Phone />
			<Footer />
		</>
	);
}

export default App;
