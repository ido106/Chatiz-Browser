import React from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"
import Message from './DataBase/message'
import userMessage from "./DB"

class ChatForm extends React.Component {

    constructor(props) {
        super(props);
        var chatInfo = null
        userMessage.forEach(e => {
            if (e.user == this.props.UserData.myUser) {
                chatInfo = e.contacts;
            }
        })

        this.state = {
            user: this.props.UserData.myUser,
            chatInfos: chatInfo
        }
        this.contacts = this.contacts.bind(this);
    }



    // send(params) {
    //     console.log(document.getElementById("textMessage").value);
    //     if(this.state.talkingTo == null) {
    //         return;
    //     }
    //     this.state.talkingTo.sendMessage(document.getElementById("textMessage").value);
    // }

    // messages() {
    //     return this.state.talkingTo.messages.map((message, key) => {
    //         return <Message {...message} key={key}> </Message>
    //     }
    //     )
    // }
    contacts() {
        return this.state.chatInfos.map((element, k) => {
            return <ContactView name={element.name} img={element.img} lastSeen={element.lastSeen} key={k} />

        });
    }

    render() {

        return (
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="chat-card card chat-app ">
                            <div id="plist" className="people-list">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text search-buttun-chat"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..."></input>
                                </div>
                                <ul className="list-unstyled chat-list me-2 mb-0">

                                    <li>
                                        {this.contacts()}
                                    </li>
                                </ul>
                            </div>
                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            </a>
                                            <ChatInfo
                                                name="Aiden khbkbkjb"
                                                onlineState="Last seen: 2 hours ago"
                                            />
                                        </div>
                                        <div className="col-lg-6 hidden-sm text-right">
                                            <a className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                                            <a className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                                            <a className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                                            <a className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                                        </div>
                                    </div>

                                </div>
                                <div className="chat-history">
                                    <ul className="m-b-0 logo">
                                        <li className="clearfix">

                                        </li>
                                    </ul>
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0 stick-down">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text send-buttun-chat"><i className="fa fa-send" onClick={this.send}></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter text here..." id="textMessage" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatForm