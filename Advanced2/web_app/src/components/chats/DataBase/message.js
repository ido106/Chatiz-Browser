import React from "react"


class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type : props.type,
            data: props.data,
            timeSent: props.timeSent,
            isMine : false
        }
    }

    render() {
        if(this.state.type == "text") {
            if(this.state.isMine) {
                return(
                    <li className="clearfix">
                        <div className="message-data text-right">
                            <span className="message-data-time">{this.state.timeSent}</span>
                        </div>
                        <div className="message my-message float-ledt">{this.state.data}</div>
                    </li>
            )} else{
                return(
                    <li className="clearfix">
                        <div className="message-data text-right">
                            <span className="message-data-time">{this.state.timeSent}</span>
                        </div>
                        <div className="message other-message float-right">{this.state.data}</div>
                    </li>
                )
            }
        }
        if(this.state.data == "audio") {
            return(
                <div></div>
            )
        }
    }




}