import React from "react"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatForm from "../chats/ChatForm";
import { useNavigate } from "react-router-dom";


import './sign_in.css';
import users from "./users";

// function Invoices() {
//     let navigate = useNavigate();
//     return (
//       <div>
//         navigate('/')
//       </div>
//     );
//   }

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid_user: true,
            userName: '',
            passWord: ''
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({ userName: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ passWord: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var check1 = false;

        users.forEach((element) => {
            if (
                element.UserName == this.state.userName &&
                element.Password == this.state.passWord
            ) {
                check1 = true;
            }
        });

        if (check1) {
            this.setState({
                valid_user: true
            });
            // <ChatForm
            //     username={this.state.userName}
            //     password={this.state.passWord}
            // />

            //<Invoices/>
        } else {
            this.setState({
                valid_user: false
            });
        }
    }

    render() {
        return (
            <div className="container">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />

                {/* Fontawesome CDN */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />

                {/* Custom styles */}
                <link rel="stylesheet" type="text/css" href="styles.css" />

                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            {!this.state.valid_user ? <p className="text-danger">Incorrect username or password</p> : null}
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" value={this.state.userName} onChange={this.handleChangeUsername} className="form-control" placeholder="username" />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" onChange={this.handleChangePassword} value={this.state.passWord} className="form-control" placeholder="password" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" /> Remember Me
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/SignUp" onClick={()=>{this.setState({valid_user : true})}}>Sign Up</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn