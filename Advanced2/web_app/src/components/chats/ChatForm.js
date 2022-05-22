import React from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"
import Message from './DataBase/message'
import users from "../sign_in/users";
import { Navigate } from "react-router-dom"
import time from "./DataBase/Time.js"



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
            usersToShow: chatInfo,
            activeChat: {
                name: null,
                lastSeen: Date.now(),
                img: "/avatars/no-profile-picture.png"
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
        this.updateContactsList = this.updateContactsList.bind(this);
        this.signOut = this.signOut.bind(this);
    }



    //********************************************************************************************************** */
    send(messageType, newData) {
        if ((messageType == "text" && newData == "") || this.state.activeChat == null) {
            return;
        }
        var date = new Date();
        let currentTime = time();
        this.props.userMessage.find(element => element.user == this.state.user).contacts.find(element => element.name == this.state.activeChat.name).messages.push({
            type: messageType,
            data: newData,
            timeSent: currentTime,
            isMine: true,
        });

        this.props.userMessage.find(element => element.user == this.state.activeChat.name).contacts.find(element => element.name == this.state.user).messages.push({
            type: messageType,
            data: newData,
            timeSent:currentTime,
            isMine: false,
        });

        let changeModified = contact => {
            contact.lastModifiedMonth = date.getMonth();
            contact.lastModifiedDay = date.getDate();
            contact.lastModifiedHour = date.getHours();
            contact.lastModifiedMinute = date.getMinutes();
            contact.lastModifiedSecond = date.getSeconds();
        }

        changeModified(this.props.userMessage.find(element => element.user == this.state.activeChat.name).contacts.find(element => element.name == this.state.user));
        changeModified(this.props.userMessage.find(element => element.user == this.state.user).contacts.find(element => element.name == this.state.activeChat.name));

        this.setState({
            ignore: !this.state.ignore
        })

        var audio = new Audio('/audio/MessageSent.mp3');
        audio.play();
        setTimeout(function () {
            document.getElementById('textMessage').value = "";
            let objDiv = document.getElementById("clearfix");
            objDiv.scrollTop = objDiv.scrollHeight;
            if (this.state.activeChat == null || newData == "") {
                return;
            }
        }, 100);
        this.updateContactsList();
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
        return this.state.usersToShow.map((element, k) => {
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
        input.onchange = e => {
            this.send('video', URL.createObjectURL((e.target.files[0])));
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

        if (newName == this.state.user) {
            document.getElementById('errorUserIsYou').className = "";
            return;
        }
        let isInChat = false;
        this.state.chatInfos.forEach((element) => {
            if (element.name == newName) {
                document.getElementById('errorUserInChat').className = "";  
                isInChat = true;
                return
            }
        })
        if(isInChat) {
            return;
        }
        var exits = false;
        users.forEach((element) => {
            if (element.UserName == newName) {
                exits = true;
            }
        });

        if (!exits) {
            document.getElementById('errorUserDontExist').className = "";
            return;
        }



        this.props.userMessage.find(element => element.user == this.state.user).contacts.push({
            name: newName,
            lastSeen: this.props.userMessage.find(element => element.user == newName).lastSeen,
            img: this.props.userMessage.find(element => element.user == newName).img,
            messages: [],
            lastModifiedMonth: 1,
            lastModifiedDate: 1,
            lastModifiedHour: 1,
            lastModifiedMinute: 1,
            lastModifiedSecond: 1,
        })


        this.props.userMessage.find(element => element.user == newName).contacts.push({
            name: this.state.user,
            lastSeen: this.props.userMessage.find(element => element.user == this.state.user).lastSeen,
            img: this.props.userMessage.find(element => element.user == this.state.user).img,
            messages: [],            lastModifiedMonth: 1,
            lastModifiedDate: 1,
            lastModifiedHour: 1,
            lastModifiedMinute: 1,
            lastModifiedSecond: 1,
        })

        this.setState({
            ignore: !this.state.ignore
        })

        document.getElementById("closeAddChat").click();
    }

    contantToolbar() {
        if (this.state.activeChat == null) {
            return
        }

        return (
            <div className="chat-header clearfix ">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                            <img src={this.state.activeChat.img} alt="avatar" />
                        </a>
                        {this.titleChat()}
                    </div>
                    <div className="col-lg-6 hidden-sm">
                        <a className="btn btn-outline-info my-btn float-right"><i className="fa fa-microphone" id="mic" onClick={this.handleAudioButton}></i></a>
                        <a className="btn btn-outline-primary my-btn float-right"><i className="fa fa-image" onClick={this.handleImage}></i></a>
                        <a className="btn btn-outline-secondary float-right"><i className="fa fa-file-video-o " onClick={this.handleVideo}></i></a>

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

    updateContactsList() {
        let search = document.getElementById('userSearch').value;
        this.state.usersToShow = this.state.chatInfos.filter((chat) => chat.name.startsWith(search));
        let sortFunc = (a,b) => {
            if(a.lastModifiedMonth < b.lastModifiedMonth) {
                return 1;
            };
            if(a.lastModifiedMonth > b.lastModifiedMonth) {
                return -1;
            };

            if(a.lastModifiedDay < b.lastModifiedDay) {
                return 1;
            };
            if(a.lastModifiedDay > b.lastModifiedDay) {
                return -1;
            };

            if(a.lastModifiedHour < b.lastModifiedHour) {
                return 1;
            };
            if(a.lastModifiedHour > b.lastModifiedHour) {
                return -1;
            };

            if(a.lastModifiedMinute < b.lastModifiedMinute) {
                return 1;
            };
            if(a.lastModifiedMinute > b.lastModifiedMinute) {
                return -1;
            };

            if(a.lastModifiedSecond < b.lastModifiedSecond) {
                return 1;
            };
            if(a.lastModifiedSecond > b.lastModifiedSecond) {
                return -1;
            };
            
            return 0;
        }
         this.state.usersToShow = this.state.usersToShow.sort(sortFunc);
        this.setState({
            ignore: !this.state.ignore
        })
    }

    signOut() {
        this.props.userMessage.forEach(e => {
            if (e.user == this.props.UserData.myUser) {
                e.lastSeen = time();
            }
        })
        
        this.props.setUserData((prevState) => ({ ...prevState, myUser: null }))
    }


    render() {
        if(this.props.UserData.myUser == null) {
                return <Navigate to="/" />
        }
        return (   
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="chat-card card chat-app ">
                            <div id="plist" className="people-list">
                                <div className="input-group">
                                    <button type="button" className="btn btn-danger fa fa-sign-out" onClick={this.signOut} />
                                    <button type="button" className="btn btn-primary fa fa-user-plus " data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

                                    <div className="input-group-prepend">

                                        <span className="input-group-text search-buttun-chat"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..." id="userSearch" onChange={this.updateContactsList}></input>
                                </div>
                                <ul className="list-unstyled chat-list me-2 mb-0">

                                    <li>
                                        {this.contacts()}
                                    </li>
                                </ul>
                            </div>
                            <div className="chat">

                                {this.contantToolbar()}
                                <div className="chat-history " id="clearfix">
                                    
                                    <ul className="m-b-0">
                                        {this.showMessages()}
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