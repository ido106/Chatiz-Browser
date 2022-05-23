

export default function ContactView(props) {
        return (
        <li className="clearfix"
        onClick={()=> props.setActiveChat(props.name, props.lastSeen, props.img, props.nickName)}
        >
        <img src={props.img}/>
        <div className="about">
            <div className="name">{props.nickName} </div>
            <div className="small">{props.lastMessage.data && props.lastMessage.data.substr(0,25) + "..."}</div>
            {props.lastSeen ? 
            (<div className="status"> <i className="fa fa-circle online"></i>online</div>) :
            (<div className="status"> <i className="fa fa-circle offline"></i> left {props.lastSeen} ago </div>)
            }
        </div>
    </li>
        )

}