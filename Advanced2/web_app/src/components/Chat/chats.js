import AllChats from "./all_chats";
import "./chats.css";
import Contacts from "./contacts";

function Chats(props) {

    return (
        // <div className="welcome">
        //     <h2>
        //         welcome {props.username}
        //     </h2>
        // </div>
        // <div class="container">
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

                        <Contacts/>

                    </div>
                    <AllChats/>
                </div>
            </div>
        </div>
    )
}


export default Chats