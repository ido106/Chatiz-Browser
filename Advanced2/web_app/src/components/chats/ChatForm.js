import React from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"
import Message from './DataBase/message'

class ChatForm extends React.Component {

    constructor(props) {
        super(props);
        var chatInfo = null
        this.props.userMessage.forEach(e => {
            if (e.user == this.props.UserData.myUser) {
                chatInfo = e.contacts;
            }
        })
        this.mediaRecorder = null;
        this.state = {
            isRecording : false,
            user: this.props.UserData.myUser,
            chatInfos: chatInfo,
            activeChat: {
                name: "ido",
                lastSeen: Date.now(),
            },
            ignore : false
        }
        this.contacts = this.contacts.bind(this);
        this.titleChat = this.titleChat.bind(this);
        this.setActiveChat = this.setActiveChat.bind(this);
        this.showMessages = this.showMessages.bind(this);
        this.send = this.send.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.handleAudioButton = this.handleAudioButton.bind(this);


    }


    //********************************************************************************************************** */
    send(messageType, newData) {
        if (this.state.activeChat == null || newData == "") {
            return;
        }
        var date = new Date();
        this.props.userMessage.find(element => element.user == this.state.user).contacts.find(element => element.name == this.state.activeChat.name).messages.push({
            type: messageType,
            data: newData,
            timeSent: date.getHours().toString() + ":" + date.getMinutes().toString(),
            isMine: true
        });

        this.setState ({
            ignore : !this.state.ignore
        }
        )


        document.getElementById('textMessage').value = "";
    }



    showMessages() {
        var msgs = this.props.userMessage.find(element => element.user == this.state.user).contacts.find(element => element.name == this.state.activeChat.name).messages
        if (msgs != null) {
            return msgs.map((element, k) => {
                return <Message {...element} key={k}></Message>
            })
        }
    }

    setActiveChat(userName, userNamelastSeen) {
        this.setState({
            activeChat: {
                name: userName,
                lastSeen: userNamelastSeen
            }
        });
    }


    contacts() {
        return this.state.chatInfos.map((element, k) => {
            return <ContactView name={element.name} img={element.img} lastSeen={element.lastSeen} key={k}
                onClick={() => {
                    this.setActiveChat(element.name, element.lastSeen);
                }} />
        });
    }


    titleChat() {
        if (this.state.activeChat != null) {
            return <ChatInfo name={this.state.activeChat.name} lastSeen={this.state.activeChat.lastSeen}></ChatInfo>
        }
    }


    stopRecording() {
        if (this.mediaRecorder == null) {
            return;
        }
        this.mediaRecorder.stop();
    };

    startRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.mediaRecorder.start();

                const audioChunks = [];
                this.mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                this.mediaRecorder.addEventListener("stop", () => {
                    let audioMessage = new Blob(audioChunks);
                    stream.getTracks().forEach(track => track.stop());
                    this.send('audio', URL.createObjectURL(audioMessage));

                });
            });
    };


    handleAudioButton ()  {
        var mic = document.getElementById("mic");
        this.setState({isRecording : !this.state.isRecording});
        if(this.state.isRecording) {
            mic.className="fa fa-microphone-slash";
            this.stopRecording();
        }
        else {
            mic.className="fa fa-microphone";
            this.startRecording();
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
                                            <a className="btn btn-outline-info"><i className="fa fa-microphone-slash" id="mic" onClick={this.handleAudioButton}></i></a>
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


                                <div className="chat-message clearfix" id="toMarginSearch">
                                    <div className="input-group position-relative fixed-bottom">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text send-buttun-chat"><i className="fa fa-send" onClick={() => {
                                                this.send("text", document.getElementById('textMessage').value);
                                            }} ></i></span>
                                        </div>
                                        <input type="text" className="form-control mb-0" placeholder="Enter text here..." id="textMessage" />
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