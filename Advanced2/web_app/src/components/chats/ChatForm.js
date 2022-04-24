import React from "react"
import ContactView from "./ContactView"

import './chats.css'
import ChatInfo from "./ChatInfo"

class ChatForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="chat-card card chat-app">
                            <div id="plist" className="people-list">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span class="input-group-text search-buttun-chat"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search..."></input>
                                </div>
                                <ul className="list-unstyled chat-list me-2 mb-0">
                                    <ContactView
                                        img="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        name="Vincent Porter"
                                        timeLeft="7 mins" />

                                    <li class="clearfix active">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                        <div class="about">
                                            <div class="name">Aiden Chavez</div>
                                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                        </div>
                                    </li>

                                    <ContactView
                                        img="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        name="Mike Thomas"
                                        timeLeft="10 min" />
                                </ul>
                            </div>
                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div class="col-lg-6">
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            </a>
                                            <ChatInfo
                                                name="Aiden Chavez"
                                                onlineState="Last seen: 2 hours ago"
                                            />
                                        </div>
                                        <div class="col-lg-6 hidden-sm text-right">
                                            <a class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                                            <a class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                                            <a class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                                            <a class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                                        </div>
                                    </div>

                                </div>
                                <div class="chat-history">
                                    <ul class="m-b-0">
                                        <li class="clearfix">
                                            <div class="message-data text-right">
                                                <span class="message-data-time">10:10 AM, Today</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div>
                                            <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                <span class="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div class="message my-message">Are we meeting today?</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                <span class="message-data-time">10:15 AM, Today</span>
                                            </div>
                                            <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                        </li>
                                    </ul>
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