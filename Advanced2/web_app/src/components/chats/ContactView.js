export default function ContactView(props) {
    if(props.timeLeft == "online") {
        return (
        <li className="clearfix">
        <img src={props.img}/>
        <div className="about">
            <div className="name">{props.name} </div>
            <div className="status"> <i className="fa fa-circle online"></i>online</div>
        </div>
    </li>
        )
    }
    return (
        <li className="clearfix">
            <img src={props.img}/>
            <div className="about">
                <div className="name">{props.name} </div>
                <div className="status"> <i className="fa fa-circle offline"></i> left {props.timeLeft} ago </div>
            </div>
        </li>
    )
}