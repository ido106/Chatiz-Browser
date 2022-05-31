

export default function ContactView(props) {
        return (
        <li className="clearfix"
        onClick={()=> props.setActiveChat(props.name, props.lastSeen, props.nickName)}
        >
        <div className="about">
            <div className="name">{props.nickName} </div>
            {props.lastMessage.length > 17  ?
            (<div className="small">{props.lastMessage.data && props.lastMessage.data.substr(0,17) + "..."}</div>) :
            (<div className="small">{props.lastMessage.data}</div>)}
            {props.lastSeen ? 
            (<div className="status"> <i className="fa fa-circle online"></i>online</div>) :
            (<div className="status"> <i className="fa fa-circle offline"></i> left {props.lastSeen} ago </div>)
            }
        </div>
    </li>
        )
}