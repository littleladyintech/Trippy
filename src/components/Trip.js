import "./TripStyles.css"
import TripData  from "./TripData";
import Trip1 from "../assets/img12.jpg";
import Trip2 from "../assets/img3.jpg";
import Trip3 from "../assets/img4.jpg";



function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Map.</p>
            <div className="tripcard">
                <TripData
                image= {Trip1}
                heading ="Trip to Indonesia"
                text="Indonesia, officially the Republic of Indonesia, One of the most iconic views in Luzon, Mt. Taal boasts a Volcano inside a lake inside an island if you fancy a closer look, the hike up to the crater is a mere 45 minutes and is easy enough for beginners. "
                />
                 <TripData
                image= {Trip2}
                heading ="Trip to Malaysia"
                text="Malaysia, officially the Republic of Malaysia, One of the most iconic views in Luzon, Mt. Taal boasts a Volcano inside a lake inside an island if you fancy a closer look, the hike up to the crater is a mere 45 minutes and is easy enough for beginners. "
                />

<TripData
                image= {Trip3}
                heading ="Trip to France"
                text="France, officially the Republic of France, One of the most iconic views in Luzon, Mt. Taal boasts a Volcano inside a lake inside an island if you fancy a closer look, the hike up to the crater is a mere 45 minutes and is easy enough for beginners. "
                />
                 </div>
        </div>
    )
}

export default Trip;