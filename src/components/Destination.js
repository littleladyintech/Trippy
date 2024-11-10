import Mountain1 from "../assets/img5.jpg";
import Mountain2 from "../assets/img11.jpg";
import DestinationData from "./DestionationData";
import "./DestinationStyle.css"
const Destination =() =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData
            className="first-destination"
            heading ="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a Volcano inside a lake inside an island if you fancy a closer look, the hike up to the crater is a mere 45 minutes and is easy enough for beginners. Guides will assist you most of the way and you'll see the pecuilar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip and then unwind with some bulato before heading back home."

            img1= {Mountain1}
            img2= {Mountain2}

            />

         <DestinationData
             className="first-destination-reverse"
            heading ="Mt. Daguldul, Batangas"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a Volcano inside a lake inside an island if you fancy a closer look, the hike up to the crater is a mere 45 minutes and is easy enough for beginners. Guides will assist you most of the way and you'll see the pecuilar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip and then unwind with some bulato before heading back home."

            img1= {Mountain1}
            img2= {Mountain2}

            />
        </div>
    )
}



export default Destination;