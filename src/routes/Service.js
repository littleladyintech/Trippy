import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/img10.jpg";

import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service (){
    return(
      <>
      <Navbar/>
      <Hero
      clName="hero-mid"
      heroImage ={ServiceImg}
      title ="Service"
      />
        
         <Trip/>
         <Footer/>
      </>
    )
}

export default Service;