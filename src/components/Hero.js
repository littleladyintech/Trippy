
import "./HeroStyles.css"
function Hero (props){

    return(
      <>
      <div className={props.clName}
        style={{
          backgroundImage: `url(${props.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken"
        }}
      >
        {/* <img alt="heropic" src={props.heroImage}/>  */}
        <div className="overlay"></div>
       <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
       
        <a href={props.url} className={props.btnClass}>{props.buttonName}</a>

       </div>

      </div>
      </>
    )
}

export default Hero;
