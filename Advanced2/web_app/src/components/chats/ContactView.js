

export default function ContactView(props) {
    if(props.lastSeen == "online") {
        return (
        <li className="clearfix"
        onClick={()=> props.setActiveChat(props.name, props.lastSeen)}
        >
        <img src={props.img}/>
        <div className="about">
            <div className="name">{props.name} </div>
            <div className="status"> <i className="fa fa-circle online"></i>online</div>
        </div>
    </li>
        )
    }

    const handleClick = () => {
        props.setActiveChat(props.name, props.lastSeen)
    }

    return (

        <li className="clearfix"
        onClick={handleClick}
        >
            <img src={props.img}/>
            <div className="about">
                <div className="name">{props.name} </div>
                <div className="status"> <i className="fa fa-circle offline"></i> left {props.lastSeen} ago </div>
            </div>
        </li>
    )
}