import React from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"
import Message from './DataBase/message'
import users from "../sign_in/users";


class ChatForm extends React.Component {

    constructor(props) {
        super(props);
        var chatInfo = null
        this.props.userMessage.forEach(e => {
            if (e.user == this.props.UserData.myUser) {
                chatInfo = e.contacts;
                e.lastSeen = "online";
            }
        })
        this.mediaRecorder = null;
        this.state = {
            isRecording: false,
            user: this.props.UserData.myUser,
            chatInfos: chatInfo,
            activeChat: {
                name: null,
                lastSeen: Date.now(),
                img: null
            },
            ignore: false
        }

        this.contacts = this.contacts.bind(this);
        this.titleChat = this.titleChat.bind(this);
        this.setActiveChat = this.setActiveChat.bind(this);
        this.showMessages = this.showMessages.bind(this);
        this.send = this.send.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.handleAudioButton = this.handleAudioButton.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.addChat = this.addChat.bind(this);
        this.cancelErrors = this.cancelErrors.bind(this);
    }



    //********************************************************************************************************** */
    send(messageType, newData) {

        var date = new Date();
        let min = date.getMinutes().toString();
        let hours = date.getHours().toString();
        if (date.getHours() < 10) {
            hours = "0" + hours;
        }

        if (date.getMinutes() < 10) {
            min = "0" + min;
        }

        this.props.userMessage.find(element => element.user == this.state.user).contacts.find(element => element.name == this.state.activeChat.name).messages.push({
            type: messageType,
            data: newData,
            timeSent: hours + ":" + min,
            isMine: true
        });


        this.props.userMessage.find(element => element.user == this.state.activeChat.name).contacts.find(element => element.name == this.state.user).messages.push({
            type: messageType,
            data: newData,
            timeSent: hours + ":" + min,
            isMine: true
        });

        this.setState({
            ignore: !this.state.ignore
        })

        var audio = new Audio('/audio/MessageSent.mp3');
        audio.play();
        setTimeout(function() {
            document.getElementById('textMessage').value = "";
            let objDiv = document.getElementById("clearfix");
            objDiv.scrollTop = objDiv.scrollHeight;
            if (this.state.activeChat == null || newData == "") {
                return;
            }
        }, 100);
    }



    showMessages() {
        if (this.state.activeChat.name == null) {
            return
        }
        var msgs = this.props.userMessage.find(element => element.user == this.state.user).contacts.find(element => element.name == this.state.activeChat.name).messages
        if (msgs != null) {
            return msgs.map((element, k) => {
                return (
                    <div>
                        <Message {...element} key={k}></Message>
                    </div>
                );
                
            })
        }
    }

    setActiveChat(userName, userNamelastSeen, userImg) {
        this.setState({
            activeChat: {
                name: userName,
                lastSeen: userNamelastSeen,
                img: userImg
            }
        });
    }


    contacts() {
        return this.state.chatInfos.map((element, k) => {
            return <ContactView
                name={element.name}
                img={element.img}
                lastSeen={element.lastSeen}
                key={k}
                setActiveChat={this.setActiveChat}
            />
        });
    }


    titleChat() {
        if (this.state.activeChat != null) {
            return <ChatInfo
                name={this.state.activeChat.name}
                lastSeen={this.state.activeChat.lastSeen}
            />
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


    handleAudioButton() {
        var mic = document.getElementById("mic");
        this.setState({ isRecording: !this.state.isRecording });
        if (this.state.isRecording) {
            mic.className = "fa fa-microphone";
            this.stopRecording();
        }
        else {
            mic.className = "fa fa-microphone-slash";
            this.startRecording();
        }
    }

    handleVideo() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = "video/*";
        input.click();
        console.log("before onChange")
        input.onchange = e => {
            console.log("before send")
            this.send('video', URL.createObjectURL((e.target.files[0])));
            console.log("after send")
        }
    }

    handleImage() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/png, image/gif, image/jpeg";
        input.click();
        input.onchange = e => {
            this.send('img', URL.createObjectURL((e.target.files[0])));
        }
    }


    cancelErrors() {
        document.getElementById('errorUserIsYou').className = "d-none";
        document.getElementById('errorUserInChat').className = "d-none";
        document.getElementById('errorUserDontExist').className = "d-none";
    }

    addChat() {
        let newName = document.getElementById('addChatName').value;
        var cantAdd = false;

        if (newName == this.state.user) {
            console.log("1")

            document.getElementById('errorUserIsYou').className = "";
            cantAdd = true;

        }
        this.state.chatInfos.forEach((element) => {
            if (element.name == newName) {
                console.log("2")
                document.getElementById('errorUserInChat').className = "";
                cantAdd = true;
            }
        })
        var exits = false;
        users.forEach((element) => {
            if (element.UserName == newName) {
                exits = true;
            }
        });

        if (!exits) {
            document.getElementById('errorUserDontExist').className = "";
            cantAdd = true;
        }

        if (cantAdd) {
            return;
        }

        this.props.userMessage.find(element => element.user == this.state.user).contacts.push({
            name: newName,
            lastSeen: this.props.userMessage.find(element => element.user == newName).lastSeen,
            img: this.props.userMessage.find(element => element.user == newName).img,
            messages: []
        })


        this.props.userMessage.find(element => element.user == newName).contacts.push({
            name: this.state.user,
            lastSeen: this.props.userMessage.find(element => element.user == this.state.user).lastSeen,
            img: this.props.userMessage.find(element => element.user == this.state.user).img,
            messages: []
        })

        this.setState({
            ignore: !this.state.ignore
        })

        document.getElementById("closeAddChat").click();
    }

    contantToolbar() {
        if (this.state.activeChat.name == null) {
            return
        }

        return (
            <div className="chat-header clearfix">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                            <img src={this.state.activeChat.img} alt="avatar" />
                        </a>
                        {this.titleChat()}
                    </div>
                    <div className="col-lg-6 hidden-sm text-right">
                        <a className="btn btn-outline-secondary"><i className="fa fa-file-video-o " onClick={this.handleVideo}></i></a>
                        <a className="btn btn-outline-primary"><i className="fa fa-image" onClick={this.handleImage}></i></a>
                        <a className="btn btn-outline-info"><i className="fa fa-microphone" id="mic" onClick={this.handleAudioButton}></i></a>
                        {/* <a className="btn btn-outline-warning"><i className="fa fa-question"></i></a>*/}
                    </div>
                </div>

            </div>
        )
    }

    enterTextToolbar() {
        if (this.state.activeChat.name == null) {
            return
        }

        return (
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
        )
    }


    render() {
        return (
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="chat-card card chat-app ">
                            <div id="plist" className="people-list">
                                <div className="input-group">
                                    <button type="button" className="btn btn-primary fa fa-user-plus " data-bs-toggle="modal" data-bs-target="#exampleModal">

                                    </button>
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

                                {this.contantToolbar()}

                                <div className="chat-history" id="clearfix">
                                    <ul className="m-b-0 logo">
                                        <li className="clearfix" >
                                            {this.showMessages()}
                                        </li>
                                    </ul>
                                </div>

                                {this.enterTextToolbar()}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add chat</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group position-relative fixed-bottom">
                                    <div className="input-group-prepend">
                                        <button className="input-group-text send-buttun-chat d-flex justify-content-center" onClick={this.addChat}>
                                            <i className="fa fa-plus "></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control mb-0" placeholder="Enter name here..." id="addChatName" onChange={this.cancelErrors} />
                                </div>
                                <div className="d-none" id="errorUserDontExist">
                                    <div className="errorMessage">
                                        User does not exist!
                                    </div>
                                </div>

                                <div className="d-none" id="errorUserInChat">
                                    <div className="errorMessage">
                                        You already have this contact!
                                    </div>
                                </div>

                                <div className="d-none" id="errorUserIsYou">
                                    <div className="errorMessage">
                                        Cant Add yourself!
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeAddChat">Close</button>

                                <button type="button" className="btn btn-primary" onClick={this.addChat}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatForm