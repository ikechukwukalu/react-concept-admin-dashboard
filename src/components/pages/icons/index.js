import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import IconFontawesome from './fontawesome.jsx';
import IconMaterial from './material.jsx';
import IconSimpleLine from './simple-line.jsx';
import IconThemify from './themify.jsx';
import IconFlag from './flag.jsx';
import IconWeather from './weather.jsx';


class Icons extends Component {
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
            <Route path={`${this.state.match.url}/fontawesome`} render={(props) => 
                <IconFontawesome {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/material`} render={(props) => 
                <IconMaterial {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/simple-lineicon`} render={(props) => 
                <IconSimpleLine {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/themify`} render={(props) => 
                <IconThemify {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/flag`} render={(props) => 
                <IconFlag {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/weather`} render={(props) => 
                <IconWeather {...props}
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

export default Icons;