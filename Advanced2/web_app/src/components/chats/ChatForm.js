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
            chatInfos: chatInfo,
            activeChat : {
                name: "ido",
                lastSeen: Date.now(),
            },
        }
        this.contacts = this.contacts.bind(this);
        this.titleChat = this.titleChat.bind(this);
        this.setActiveChat = this.setActiveChat.bind(this);
        this.showMessages = this.showMessages.bind(this);
        this.send = this.send.bind(this);



    }



    send(data) {
        console.log(data);
        if(this.state.activeChat == null) {
            return;
        }

        // this.setState({
        // })
        // let msgs = null
        // this.state.chatInfos.forEach(element => {
        //     if(element.name == this.state.activeChat.name) {
        //         msgs = element.messages;
        //     }
        // });
        // if(msgs ==null) {
        //     return;
        // }
        // msgs.push({
        //     type : "text",
        //     data: data,
        //     timeSent: Date.now(),
        //     isMine : true
        // })
    }

    // messages() {
    //     return this.state.talkingTo.messages.map((message, key) => {
    //         return <Message {...message} key={key}> </Message>
    //     }
    //     )
    // }
    showMessages() {
        if(this.state.activeChat == null) {
            return <div className="no-active-note">No Active Chat</div>
        }

        let msgs = null
        this.state.chatInfos.forEach(element => {
            if(element.name == this.state.activeChat.name) {
                msgs = element.messages;
            }
        });
        if(msgs !=null) {
        return msgs.map((element,k) => {
            console.log("1");

            return <Message {...element} key={k}></Message>
        })
    }
    }

    setActiveChat(userName, userNamelastSeen) {
        console.log(userName);
        this.setState({activeChat : {
        name: userName,
        lastSeen : userNamelastSeen
        }});
    }


    contacts() {
        return this.state.chatInfos.map((element, k) => {
            return <ContactView name={element.name} img={element.img} lastSeen={element.lastSeen} key={k}
             onClick={ () => {
                this.setActiveChat(element.name, element.lastSeen);
                }} />
        });
    }


    titleChat() {
        if(this.state.activeChat != null) {
            return <ChatInfo name={this.state.activeChat.name} lastSeen={this.state.activeChat.lastSeen}></ChatInfo>

        }

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
                                         {this.titleChat()}
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
                                        {this.showMessages()}
                                        </li>
                                    </ul>
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0 stick-down">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text send-buttun-chat"><i className="fa fa-send" onClick={()=>{
                                                console.log("sending data");
                                                this.send(document.getElementById('textMessage').value);
                                                }} ></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter text here..." id="textMessage"/>
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