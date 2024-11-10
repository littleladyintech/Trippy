import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img11.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
      <>
      <Navbar/>
      <Hero
      clName="hero-mid"
      heroImage ={AboutImg}
      title ="About"
      />
       <AboutUs/>
       <Footer/>
      </>
    )
}

export default About;