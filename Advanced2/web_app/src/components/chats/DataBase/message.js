import React from "react"


export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                    <li className="message my-message float-left message-flow seperate-msgs">
                        <audio controls autobuffer="false">
                            <source src={this.props.data} />
                        </audio>
                        <span className="float-left fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                    </li>
                )
            } else {
                return (
                    <li className="message other-message float-right message-flow seperate-msgs ">
                        <audio controls autobuffer="false">
                            <source src={this.props.data} />
                        </audio>
                        <span className="float-right fs-6">
                            
                            {this.props.timeSent}
                        </span>
                    </li>
                )
            }
        }

        if (this.props.type == 'video') {
            if (this.props.isMine) {
                return (
                    <li className="message my-message float-left message-flow seperate-msgs ">
                        <video controls src={this.props.data} autobuffer="false" className="ido-dumb" />
                        <br/>
                        <span className="float-right fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                        <br/>
                    </li>
                )
            }

            return (
                <li className="message other-message float-right message-flow seperate-msgs ">
                    <video controls src={this.props.data} autobuffer="false" className="ido-dumb" />
                    <br/>
                    <span className="float-left fs-6 message-flow">
                        {this.props.timeSent}
                    </span>
                    <br/>
                </li>
            )

        }

        if (this.props.type == 'img') {
            if (this.props.isMine) {
                return (
                    <li className="message my-message float-left message-flow seperate-msgs ">
                        <img controls src={this.props.data} className="ido-dumb" />
                        <br/>
                        <span className="float-right fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                        <br/>
                    </li>
                )
            }
            return (
                <li className="message other-message float-right message-flow seperate-msgs ">
                <img controls src={this.props.data} className="ido-dumb" />
                <br/>
                <span className="float-left fs-6 message-flow">
                    {this.props.timeSent}
                </span>
                <br/>
            </li>
            )

        }
    }
}