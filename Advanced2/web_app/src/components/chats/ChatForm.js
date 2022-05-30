import React, { useState } from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"
import Message from './DataBase/message'
import { Navigate } from "react-router-dom"
import { Globaltoken } from "../sign_in/SignIn"
import { GlobalConts } from "../sign_in/SignIn"




class ChatForm extends React.Component {

    constructor(props) {
        super(props);
 
        console.log("ChatForm Constructor.....");
        
        this.mediaRecorder = null;
        this.state = {
            messages: [],
            contactList: null,
            activeChat: {name: null, nickName: null, lastSeen: null,

                userName : null,
                nickName : null,
                lastMessage : null,
            },
        }
        //console.log("constructor");
        console.log(GlobalConts.contacts);
        console.log(this.state.contactList);
        //console.log("end of const");
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
        this.getAllContacts = this.getAllContacts.bind(this);
    }



    //************************************ */





    async send(messageType, newData) {
        if ((messageType == "text" && newData == "") || this.state.activeChat.userName == null) {
            return;
        }


        const res = fetch("http://localhost:7026/api/contacts/" + this.state.activeChat.userName + "/messages",  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token,

            },
            body: JSON.stringify({
                content: newData
            })
        })

        if (await res.status() != 201) {
            
        }

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

        var msgs = this.state.messages;
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

    setActiveChat(userName, userNamelastSeen, nickName) {
        console.log("username is: " + userName);
        this.setState({
            activeChat: {
                name: userName,
                nickName: nickName,
                lastSeen: userNamelastSeen,
            }
        });
   }

    contacts() {
        console.log("token for getAllContact is: ", Globaltoken.token)
        this.getAllContacts();
        //console.log("ido")
        console.log(this.state.contactList)
       // console.log("shahar")
        console.log(GlobalConts.contacts);
        if(this.state.contactList == null) {
            //console.log("2222222222222222222222222222222222");
            return;
        }
        return this.state.contactList.map((element, k) => {
            console.log("username = " + element.lastSeen);
            return <ContactView
                // nickName={element.name}
                // name={element.id}
                // lastSeen={element.lastdate}
                // key={k}
                // setActiveChat={this.setActiveChat}
                // lastMessage={element}

                nickName={element.nickname}
                name={element.contactUsername}
                lastSeen={element.lastSeen}
                key={k}
                setActiveChat={this.setActiveChat}
                lastMessage={element.lastMessage == null ? ("") : element.lastMessage}
            />
        });
    }


    titleChat() {
        if (this.state.activeChat != null) {
            return <ChatInfo
                name={this.state.activeChat.nickName}
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

    async getAllContacts() {
        await fetch("https://localhost:7038/api/contacts", {
             method: 'GET',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + Globaltoken.token,
             }
         }).then(response2=>{
             //console.log("response2: ",response2);
             response2.text().then(
                 response3 => {
                     this.setState(prevState => ({
                         ...prevState,
                         contactList: response3,
                     }))


                     GlobalConts.contacts = response3;
                     console.log("GlobalConts in ChatForm = " , this.state.contactList);
                 }
             )
          })
         }

    // async getAllContacts() {
     
    //         await fetch("https://localhost:7038/api/contacts", {
    //              method: 'GET',
    //              headers: {
    //                  'Accept': 'application/json',
    //                  'Content-Type': 'application/json',
    //                  'Authorization': 'Bearer ' + Globaltoken.token,
    //              }
    //          }).then(response2=>{
    //              console.log("response2: ",response2);
    //              return response2
    //           })
    //          .then(async data=>{
    //              console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    //              console.log(await data.json());
    //              let conts = JSON.stringify(await data.json());
    //              console.log("conts:", conts);
    //              this.setState(prevState => ({
    //                 ...prevState,
    //                 contactList : conts, 
    //             }))
    //          })
    //      }
     


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
        document.getElementById('addChatFailed').className = "d-none";
    }

    async addChat() {
        let newUserName = document.getElementById('addChatUserName').value;
        let newNickName = document.getElementById('addChatNickname').value;
        let newServer = document.getElementById('addChatServer').value;


        if (newUserName == this.state.user) {
            document.getElementById('errorUserIsYou').className = "";
            return;
        }

        await fetch("https://localhost:7038/api/contacts", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Globaltoken.token,
            },
            body : JSON.stringify({
                "id" : newUserName,
                "name" : newNickName,
                "server" : newServer, 
            }),

        }).then(response2=>console.log("response2: ",response2))
        .then(data => {
            console.log(data);
        })

        document.getElementById('addChatFailed').className = "";


        document.getElementById("closeAddChat").click();

        await this.getAllContacts();
    }

    contantToolbar() {
        if (this.state.activeChat == null) {
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

    async updateContactsList() {
        let search = document.getElementById('userSearch').value;

        // const res = await fetch("https://localhost:7038/api/contacts",
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     })
        // const data = res.status();

        // if (data == 200) {
        //     this.state.contactList = await res.json();
        // }


        this.state.contactList = this.state.contactList.filter((chat) => chat.name.startsWith(search));


        let sortFunc = (a, b) => {
            if (a.lastdate > b.lastdate) {
                return -1;
            }
            return 1;
        }
        this.state.contactList = this.state.contactList.sort(sortFunc);



        this.setState({
            ignore: !this.state.ignore
        })

    }

    signOut() {

        this.props.setUserData((prevState) => ({ ...prevState, myUser: null }))
    }


    render() {
        if (this.props.UserData.myUser == null) {
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
                                <ul className="list-unstyled chat-list me-2 mb-0 show-contacts">

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
                                    </div>
                                    <div className="form-group">
                                        username:
                                        <input type="text" className="form-control mb-0" placeholder="Enter username here..." id="addChatUserName" onChange={this.cancelErrors} />
                                        nickname:
                                        <input type="text" className="form-control mb-0" placeholder="Enter nickname here..." id="addChatNickname" onChange={this.cancelErrors} />
                                        server:
                                        <input type="text" className="form-control mb-0" placeholder="Enter server here..." id="addChatServer" onChange={this.cancelErrors} />
                                    </div>
                                </div>
                                <div className="d-none" id="addChatFailed">
                                    <div className="errorMessage">
                                        Failed to add user!
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