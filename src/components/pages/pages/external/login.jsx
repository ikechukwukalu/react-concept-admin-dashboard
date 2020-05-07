import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../../scripts/scripts-basic.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname
    }
  }

  componentDidMount() {
    $('body').addClass('external_pages');
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
    $('body').removeClass('external_pages');
  }
  
  render() {
    return (
        <Fragment>
            <div className="splash-container">
                <div className="card external_card">
                    <div className="card-header text-center"><Link to="/"><img className="logo-img" src={this.state.base_url+"assets/images/logo.png"} alt="logo" /></Link><span className="splash-description">Please enter your user information.</span></div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input className="form-control form-control-lg" id="username" type="text" placeholder="Username" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-lg" id="password" type="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" /><span className="custom-control-label">Remember Me</span>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                        </form>
                    </div>
                    <div className="card-footer bg-white p-0  ">
                        <div className="card-footer-item card-footer-item-bordered">
                            <Link to="/external/sign-up" className="footer-link">Create An Account</Link></div>
                        <div className="card-footer-item card-footer-item-bordered">
                            <Link to="/external/forgot-password" className="footer-link">Forgot Password</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default Login;