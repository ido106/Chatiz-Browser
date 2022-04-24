export default function (props) {
    return (
        <div class="chat-about">
            <h6 class="m-b-0">{props.name}</h6>
            <small>{props.onlineState}</small>
        </div>
    )
}