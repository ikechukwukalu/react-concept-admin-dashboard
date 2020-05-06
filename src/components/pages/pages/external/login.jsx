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
            <div class="splash-container">
                <div class="card external_card">
                    <div class="card-header text-center"><Link to="/"><img class="logo-img" src={this.state.base_url+"assets/images/logo.png"} alt="logo" /></Link><span class="splash-description">Please enter your user information.</span></div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input class="form-control form-control-lg" id="username" type="text" placeholder="Username" autoComplete="off" />
                            </div>
                            <div class="form-group">
                                <input class="form-control form-control-lg" id="password" type="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label class="custom-control custom-checkbox">
                                    <input class="custom-control-input" type="checkbox"c/><span class="custom-control-label">Remember Me</span>
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
                        </form>
                    </div>
                    <div class="card-footer bg-white p-0  ">
                        <div class="card-footer-item card-footer-item-bordered">
                            <Link to="/external/sign-up" class="footer-link">Create An Account</Link></div>
                        <div class="card-footer-item card-footer-item-bordered">
                            <Link to="/external/forgot-password" class="footer-link">Forgot Password</Link>
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