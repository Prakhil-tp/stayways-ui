import React , { Component } from 'react';



export default class Form extends Component {

    render(){
        return(
            <div>
            <div className="ui small modal " id="signup">
            <div className="header">Sign Up</div>
            <div className="content">
                <form className="ui equal width form" id="signupform">
                        <div className="required fields">
                                    <div className="field">
                                        <label>First Name</label>
                                        <input type="text" name="firstname" placeholder="First Name" />
                                    </div>
                                    <div className="required field">
                                        <label>Last Name</label>
                                        <input type="text" name="lastname" placeholder="Last Name" />
                                    </div>
                        </div>
                                    <div className="required field">
                                        <label>E-mail</label>
                                        <input type="email" name="email" placeholder="joe@schmoe.com" />
                                    </div>
                                    <div className="required field">
                                        <label>Password</label>
                                        <input type="password" name="password" />
                                    </div>
                                    <div className="required field">
                                        <div className="ui  checkbox">
                                            <input type="checkbox" name="terms" />
                                            <label>I agree to the Terms and Conditions</label>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <div id="submitButton" className="ui submit green button">Register</div>
                                        <div className="ui cancel button">Cancel</div>
                                    </div>
                                    <div id="info"></div>
                </form>
            </div>
            </div>
                              <div className="ui small modal " id="login">
                                <div className="header">Log In</div>
                                <div className="content">
                                    <form className="ui equal width form" id="loginform">

                                            <div className="required field">
                                                <label>E-mail</label>
                                                <input type="email" name="loginEmail" placeholder="joe@schmoe.com" />
                                            </div>
                                            <div className="required field">
                                                <label>Password</label>
                                                <input type="password" name="loginPassword" />
                                            </div>
                                
                                        <div className="actions">
                                            <div id="loginButton" className="ui submit blue button">Log In</div>
                                            <div className="ui cancel button">Cancel</div>
                                            <div id="loginInfo"></div>
                                        </div>
                                </form>
                                </div>
                            </div>
                </div>
        );
    }
}