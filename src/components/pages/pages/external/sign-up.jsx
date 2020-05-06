import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../../scripts/scripts-basic.js';

class SignUp extends Component {
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
    <form className="splash-container">
        <div className="card external_card">
            <div className="card-header">
                <h3 className="mb-1">Registrations Form</h3>
                <p>Please enter your user information.</p>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <input className="form-control form-control-lg" type="text" name="nick" required="" placeholder="Username" autoComplete="off" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="E-mail" autoComplete="off" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" id="pass1" type="password" required="" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" required="" placeholder="Confirm" />
                </div>
                <div className="form-group pt-2">
                    <button className="btn btn-block btn-primary" type="submit">Register My Account</button>
                </div>
                <div className="form-group">
                    <label className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" /><span className="custom-control-label">By creating an account, you agree the <a href="#">terms and conditions</a></span>
                    </label>
                </div>
                <div className="form-group row pt-0">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                        <button className="btn btn-block btn-social btn-facebook " type="button">Facebook</button>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button className="btn  btn-block btn-social btn-twitter" type="button">Twitter</button>
                    </div>
                </div>
            </div>
            <div className="card-footer bg-white">
                <p>Already member? <Link to="/external/login" className="text-secondary">Login Here.</Link></p>
            </div>
        </div>
    </form>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default SignUp;