import star from "../images/star.jpeg"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} className="main-img" />
            <div>
                <img src={star} className="star-img" />
                <span> {props.stats.rating}</span>
                <span className="gray"> ({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <div>{props.title}</div>
            <div><span className="bold">From ${props.price} </span>/ person</div>
        </div>
    )
}