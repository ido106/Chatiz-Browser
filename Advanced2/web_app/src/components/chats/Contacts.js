import React from "react";

import "./chats.css";

class Contacts extends React.Component {
    render() {
        return (
            <ul class="list-unstyled chat-list mt-2 mb-0">
                <li class="clearfix">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"></img>
                    <div class="about">
                        <div class="name">Vincent Porter</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> left 5 mins ago </div>
                    </div>
                </li>
                <li class="clearfix active">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"></img>
                    <div class="about">
                        <div class="name">Aiden Chavez</div>
                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                    </div>
                </li>
                <li class="clearfix">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"></img>
                    <div class="about">
                        <div class="name">Mike Thomas</div>
                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                    </div>
                </li>
                <li class="clearfix">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"></img>
                    <div class="about">
                        <div class="name">Christian Kelly</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> left 11 hours ago </div>
                    </div>
                </li>
                <li class="clearfix">
                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"></img>
                    <div class="about">
                        <div class="name">Monica Ward</div>
                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                    </div>
                </li>
                <li class="clearfix">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"></img>
                    <div class="about">
                        <div class="name">Dean Henry</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 27 </div>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Contacts