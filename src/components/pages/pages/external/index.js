import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import Login from './login.jsx';
import SignUp from './sign-up.jsx';
import NotFound from './404-notfound.jsx';
import ForgotPassword from './forgot-password.jsx';

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      basename: this.props.basename,
      match: this.props.match
    }
  }
  
  render() {
    return (
        
      <Switch>
            <Route path={`${this.state.match.url}/login`} render={(props) => 
                <Login {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
            <Route path={`${this.state.match.url}/sign-up`} render={(props) => 
                <SignUp {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/404`} render={(props) => 
                <NotFound {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/forgot-password`} render={(props) => 
                <ForgotPassword {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route render={(props) =>
                <NotFound {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
        </Switch>
    );
  }
}

export default Pages;