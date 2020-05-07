import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../../scripts/scripts-basic.js';

class ForgotPassword extends Component {
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
              <div className="card external_pages">
                  <div className="card-header text-center"><img className="logo-img" src={this.state.base_url+"assets/images/logo.png"} alt="logo" /><span className="splash-description">Please enter your user information.</span></div>
                  <div className="card-body">
                      <form>
                          <p>Don't worry, we'll send you an email to reset your password.</p>
                          <div className="form-group">
                              <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autoComplete="off" />
                          </div>
                          <div className="form-group pt-1"><Link className="btn btn-block btn-primary btn-xl" to="/">Reset Password</Link></div>
                      </form>
                  </div>
                  <div className="card-footer text-center">
                      <span>Don't have an account? <Link to="/external/sign-up">Sign Up</Link></span>
                  </div>
              </div>
          </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default ForgotPassword;