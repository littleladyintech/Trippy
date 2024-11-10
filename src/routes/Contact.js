import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/img5.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Destination from "../components/Destination";

function Contact (){
    return(
      <>
      <Navbar/>
      <Hero
      clName="hero-mid"
      heroImage ={ContactImg}
      title ="Contact"
      />
      <ContactForm/>
       <Footer/>
      </>
    )
}

export default Contact
;