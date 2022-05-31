import React from "react"


export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
 
 
            if (this.props.isMine) {
                return (
                    <li className="clearfix">
                        <div className="message my-message message-data float-left fs-5 message-flow">
                            {this.props.data}<br />
                            <div className="float-left small fs-6">
                                {Date.parse(this.props.timeSent)}
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
                                {Date.parse(this.props.timeSent)}
                            </div>
                        </div>

                    </li>
                )
            }
    }
}