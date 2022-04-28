import React from "react"


export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.isMine)
        if (this.props.type == "text") {
            if (this.props.isMine) {
                return (
                    <li className="clearfix">
                        <div className="message my-message float-left fs-5 message-flow text-truncate">
                            {this.props.data}<br />
                            <div className="float-left small fs-6">
                                {this.props.timeSent}
                            </div>
                        </div>

                    </li>
                )
            } else {
                return (

                    <li className="clearfix">
                        <div className="message other-message float-right fs-5 message-flow">
                            {this.props.data}<br />
                            <div className="float-right fs-6">
                                {this.props.timeSent}
                            </div>
                        </div>

                    </li>
                )
            }
        }
        if (this.props.type == "audio") {
            if (this.props.isMine) {
                return (
                    <div className="message my-message float-left message-flow">
                        <audio controls autobuffer="false">
                            <source src={this.props.data} />
                        </audio>
                        <span className="float-left fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                    </div>
                )
            } else {
                return (
                    <div className="message other-message float-left message-flow ">
                        <audio controls autobuffer="false">
                            <source src={this.props.data} />
                        </audio>
                        <span className="float-right fs-6">
                            {this.props.timeSent}
                        </span>
                    </div>
                )
            }
        }

        if (this.props.type == 'video') {
            if (this.props.isMine) {

            }

        }

        if (this.props.type == 'img') {
            if (this.props.isMine) {

            }

        }
    }




}