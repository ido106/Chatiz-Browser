import React from "react"


export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
 
            if (this.props.sent) {
                return (
                    <li className="clearfix">
                        <div className="message my-message message-data float-left fs-5 message-flow">
                            {this.props.content}<br />
                            <div className="float-left small fs-6">
                                {this.props.created}
                            </div>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li className="clearfix">
                        <div className="message other-message message-data float-right fs-5 message-flow">
                            {this.props.content}<br />
                            <div className="float-right small fs-6">
                                {this.props.created}
                            </div>
                        </div>

                    </li>
                )
            }
    }
}