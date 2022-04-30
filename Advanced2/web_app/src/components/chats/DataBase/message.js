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
                        <div className="message my-message message-data float-left fs-5 message-flow">
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
                        <div className="message other-message message-data float-right fs-5 message-flow">
                            {this.props.data}<br />
                            <div className="float-right small fs-6">
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
                    <li className="clearfix">
                    <div className="message my-message message-data float-left message-flow">
                        <audio controls autobuffer="false">
                            <source src={this.props.data} />
                        </audio>
                        <span className="float-left fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li className="clearfix">
                    <div className="message other-message message-data float-right message-flow">
                        <audio controls autobuffer="false">
                            <source src={this.props.data} />
                        </audio>
                        <span className="float-right fs-6 message-flow">
                            
                            {this.props.timeSent}
                        </span>
                        </div>
                    </li>
                )
            }
        }

        if (this.props.type == 'video') {
            if (this.props.isMine) {
                return (
                    <li className="clearfix">
                    <div className="message my-message message-data float-left message-flow">
                        <video controls src={this.props.data} autobuffer="false" className="ido-dumb" />
                        <br/>
                        <span className="float-right fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                        <br/>
                    </div>
                    </li>

                )
            }

            return (
                <li className="clearfix">
                <div className="message other-message message-data float-right message-flow">
                    <video controls src={this.props.data} autobuffer="false" className="ido-dumb" />
                    <br/>
                    <span className="float-left fs-6 message-flow">
                        {this.props.timeSent}
                    </span>
                    <br/>
                    </div>
                </li>
            )

        }

        if (this.props.type == 'img') {
            if (this.props.isMine) {
                return (
                    <li className="clearfix pb-2">

                    <div className="message my-message mt-1 float-left message-flow">
                            <img controls src={this.props.data} className="ido-dumb"  />
                        <br/>
                        <span className="float-right fs-6 message-flow">
                            {this.props.timeSent}
                        </span>
                        <br/>
                        </div>
                    </li>
                )
            }
            return (
                <li className="clearfix pb-2">

                <div className="message other-message mt-1 float-right message-flow">
                        <img controls src={this.props.data} className="ido-dumb"  />
                    <br/>
                    <span className="float-left fs-6 message-flow">
                        {this.props.timeSent}
                    </span>
                    <br/>
                    </div>
                </li>
            )

        }
    }
}