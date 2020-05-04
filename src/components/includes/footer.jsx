import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.path
    }
  }
  
  render() {
    if(this.state.path.trim().search("/apps") == -1 )
    return (
      <div className="footer">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                       Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="text-md-right footer-links d-none d-sm-block">
                          <Link to="/">About </Link>
                          <Link to="/">Support </Link>
                          <Link to="/">Contact Us </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
    else 
      return <div></div>
  }
}

export default Footer;
