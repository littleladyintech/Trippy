import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/img13.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        clName="hero"
        heroImage={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonName="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
