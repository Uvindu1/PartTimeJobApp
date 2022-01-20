import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Login extends Component {
    render() {
        return (

            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="lower">
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <span className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </span>
                </div>
            </form>

        );
    }
}