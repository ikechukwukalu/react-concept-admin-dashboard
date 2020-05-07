import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../../scripts/scripts-basic.js';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname
    }
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
  }
  
  render() {
    return (
        <Fragment>
            <div className="dashboard-main-wrapper p-0">
                <nav className="navbar navbar-expand dashboard-top-header bg-white">
                    <div className="container-fluid">
                        <div className="dashboard-nav-brand">
                            <Link className="dashboard-logo" to="/">Concept</Link>
                        </div>
                    </div>
                </nav>
                <div className="bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="error-section">
                                    <img src={this.state.base_url+"assets/images/error-img.png"} alt="" className="img-fluid" />
                                    <div className="error-section-content">
                                        <h1 className="display-3">Page Not Found</h1>
                                        <p> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                        <Link to="/" className="btn btn-secondary btn-lg">Back to homepage</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-dark text-center">
                                    Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default NotFound;