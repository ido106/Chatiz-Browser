import React from "react"
import AllChats from "./AllChats";
import Contacts from "./Contacts";

import "./chats.css";

class ChatForm extends React.Component {
    render() {
        return (
            <div class="row clearfix">
                <div class="col-lg-11">
                    <div class="card chat-app">
                        <div id="plist" class="people-list">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-search"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Search..."></input>
                            </div>
                            <Contacts />
                        </div>
                        <AllChats />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatForm