import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import FormElements from './form-elements.jsx';
import FormValidation from './form-validation.jsx';
import Multiselect from './multiselect.jsx';
import Datepicker from './datepicker.jsx';
import BootstrapSelect from './bootstrap-select.jsx';


class Forms extends Component {
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
            <Route path={`${this.state.match.url}/elements`} render={(props) => 
                <FormElements {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/validation`} render={(props) => 
                <FormValidation {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/multiselect`} render={(props) => 
                <Multiselect {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/datepicker`} render={(props) => 
                <Datepicker {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                />} 
            />
            <Route path={`${this.state.match.url}/bootstrap-select`} render={(props) => 
                <BootstrapSelect {...props}
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

export default Forms;