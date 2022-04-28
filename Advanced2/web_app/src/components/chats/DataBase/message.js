import React from "react"


export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            data: props.data,
            timeSent: props.timeSent,
            isMine: false
        }
    }

    render() {
        if (this.state.type == "text") {
            if (this.state.isMine) {
                console.log("my msg data is = " + this.state.data);
                return (
                    <li className="clearfix">
                        <div className="message my-message float-left fs-5 ido_dumb">
                            {this.state.data}<br />
                            <div className="float-right small fs-6">
                                {this.state.timeSent}
                            </div>
                        </div>

                    </li>
                )
            } else {
                return (
                    <li className="clearfix">
                        <div className="message other-message float-right fs-5 ido_dumb">
                            {this.state.data}<br />
                            <div className="float-left fs-6">
                                12:54
                            </div>
                        </div>

                    </li>
                )
            }
        }
        if (this.state.data == "audio") {
            if (this.state.isMine) {
                return (
                    <div>
                    <audio controls>
                        <source src={URL.createObjectURL(this.state.data)} />
                    </audio>
                    </div>
                )
            }
        }
    }




}