import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import InfluencerDashboard from './influencer-dashboard.jsx';
import InfluencerFinder from './influencer-finder.jsx';
import InfluencerProfile from './influencer-profile.jsx';

class Influencer extends Component {
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
            <Route path={`${this.state.match.url}/dashboard`} render={(props) => 
                <InfluencerDashboard {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/finder`} render={(props) => 
                <InfluencerFinder {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/profile`} render={(props) => 
                <InfluencerProfile {...props}
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

export default Influencer;