import React, { useState } from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"
import Message from './DataBase/message'
import { Navigate } from "react-router-dom"
import { Globaltoken } from "../sign_in/SignIn"
import { GlobalConts } from "../sign_in/SignIn"
import { GlobalIsSigninDone } from "../sign_in/SignIn"
import { data } from "jquery"




class ChatForm extends React.Component {

    constructor(props) {
        super(props);

        //console.log("ChatForm Constructor.....");

        this.mediaRecorder = null;
        this.state = {
            messages: [],
            contactList: [],
            activeChat: {
                name: null,
                nickName: null,
                lastSeen: null,
                userName: null,
                nickName: null,
                lastMessage: null,
            },
            ignore: false,
            ignore2: false
        }
        ////console.log("constructor");
        //console.log(GlobalConts.contacts);
        //console.log(this.state.contactList);
        ////console.log("end of const");
        this.contacts = this.contacts.bind(this);
        this.titleChat = this.titleChat.bind(this);
        this.setActiveChat = this.setActiveChat.bind(this);
        this.showMessages = this.showMessages.bind(this);
        this.send = this.send.bind(this);
        this.addChat = this.addChat.bind(this);
        this.cancelErrors = this.cancelErrors.bind(this);
        this.updateContactsList = this.updateContactsList.bind(this);
        this.signOut = this.signOut.bind(this);
        this.getAllContacts = this.getAllContacts.bind(this);
        this.render2 = this.render2.bind(this);
        this.render3 = this.render3.bind(this);

        this.showCon = this.showCon.bind(this);
        this.getAllMessages = this.getAllMessages.bind(this);
    }



    //************************************ */


    render2() {
        if (GlobalIsSigninDone.isDone == false || this.state.ignore2) {
            return;
        }
        //console.log("rendering!");
        //console.log("contacts when rendering:");
        //console.log(this.state.contactList);
        this.setState({
            ignore2: true
        })
    }


    render3() {
        this.setState(prevState => ({
            ...prevState,
            ignore: !this.state.ignore,
        }))
    }



    async getAllMessages() {
        if (this.state.activeChat.name == null) {
            //console.log("suck my dick")
            return;
        }

        await fetch("https://localhost:7038/api/contacts/" + this.state.activeChat.name + "/messages", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Globaltoken.token,
            }
        }).then(response2 => {
            response2.json().then(
                response3 => {
                    //console.log("response in getAllMessages is");
                    //console.log(response3);
                    this.state.messages = response3;
                }
            )
        })

    }


    async send(messageType, newData) {
        //console.log("gggg");
        if ((messageType == "text" && newData == "") || this.state.activeChat.name == null) {
            //console.log(messageType);
            //console.log(newData);
            //console.log("lololo");
            return;
        }


        await fetch("https://localhost:7038/api/contacts/" + this.state.activeChat.name + "/messages", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Globaltoken.token,
            },
            body: JSON.stringify({
                content: newData
            }),

        }).then(response2 => response2)
            .then(data => {
  
            })

        setTimeout(function () {
            document.getElementById('textMessage').value = "";
            let objDiv = document.getElementById("clearfix");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 100);

        this.getAllMessages();
        this.render3();

    }



    showMessages() {

        //?
   
        this.getAllMessages();
        //console.log("work");

        if (this.state.activeChat.name == null) {
            //console.log("no messages for you bitch!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            return;
        }

        var msgs = this.state.messages;
        if (msgs != null) {
            //console.log("here are some messages for you bitch!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            return msgs.map((element, k) => {
                return (
                    <div>
                        <Message
                         {...element}
                          key={k}></Message>
                    </div>
                );

            })
        }
    }

    setActiveChat(userName, userNamelastSeen, nickName) {
        //console.log("username is: " + userName);
        this.setState({
            activeChat: {
                name: userName,
                nickName: nickName,
                lastSeen: userNamelastSeen,
            }
        });

        this.render3();
    }

    async getAllContacts() {
        await fetch("https://localhost:7038/api/contacts", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Globaltoken.token,
            }
        }).then(response2 => {
            response2.json().then(
                response3 => {
                    GlobalConts.contacts = response3;
                    //console.log("GlobalConts in ChatForm = ", GlobalConts.contacts);
                    /**this.setState(prevState =>({
                       ...prevState,
                        contactList : [GlobalConts.contacts[0]],
                    }))**/
                    //console.log("GlobalConts in ChatForm = ", GlobalConts.contacts);
                    if (GlobalConts.contacts == null) {
                        this.state.contactList = [];
                        return;
                    }
                    this.state.contactList = GlobalConts.contacts;
                    //console.log(this.state.contactList);
                }
            )
        })

        return GlobalConts.contacts[0];
    }


    contacts() {
        //console.log("token for getAllContact is: ", Globaltoken.token)

        var contact_array = this.getAllContacts();
        ////console.log("ido")
        //console.log("Actual Contact List: ", contact_array)
        // //console.log("shahar")
        ////console.log(GlobalConts.contacts);
        if (this.state.contactList == []) {
            //console.log("gggg")
        }
        //console.log("BEFORE typeof is : ", typeof (this.state.contactList))
        //console.log("AFTER typeof is : ", typeof (this.state.contactList))
        this.render2();
        return this.state.contactList.map((element, k) => {
            //console.log("username = " + element.userName);
            return <ContactView
                nickName={element.name}
                name={element.id}
                lastSeen={element.lastdate}
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
            body: JSON.stringify({
                "id": newUserName,
                "name": newNickName,
                "server": newServer,
            }),

        }).then(response2 => response2)
            .then(data => {
                //console.log(data);
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
                        </a>
                        {this.titleChat()}
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

    showCon() {
        //console.log("ddddffff")
        this.setState({
            ignore: !this.state.ignore
        })
        return;
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
                                    <button type="button" className="btn btn-primary fa fa-user-plus " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.cancelErrors}></button>

                                    <div className="input-group-prepend">

                                        <span className="input-group-text search-buttun-chat"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..." id="userSearch" onChange={this.updateContactsList}></input>
                                    <button type="button" className="btn btn-primary" onClick={this.showCon}>contacts</button>
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