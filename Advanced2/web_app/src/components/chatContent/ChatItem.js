import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.type == "text") {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>

    );
    }
    if(this.props.type == "audio") {

        <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
        >
        <div className="chat__item__content">
          <audio src={this.props.msg}/>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    }

    if(this.props.type == "video") {

    }

    if(this.props.type == "img") {


    }

  }
}
