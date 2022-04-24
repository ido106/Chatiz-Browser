export default function ContactView(props) {
    return (
        <li className="clearfix">
            <img src={props.img}/>
            <div class="about">
                <div class="name">{props.name} </div>
                <div class="status"> <i class="fa fa-circle offline"></i> left {props.timeLeft} ago </div>
            </div>
        </li>
    )
}