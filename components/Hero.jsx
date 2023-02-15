import img from "../images/Airbnb-image.png"


export default function Main(){
    return(
        <section className="hero">
            <img src={img}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}