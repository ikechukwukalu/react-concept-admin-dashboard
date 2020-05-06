import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import JvectorMap from './jvector.jsx';
import GoogleMap from './google-map.jsx';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname,
      match: this.props.match
    }
  }
  
  render() {
    return (
        
      <Switch>
            <Route path={`${this.state.match.url}/vector`} render={(props) => 
                <JvectorMap {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/google`} render={(props) => 
                <GoogleMap {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />}
            />
        </Switch>
    );
  }
}

export default Maps;