import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import General from './general.jsx';
import Datatable from './datatable.jsx';

class Tables extends Component {
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
            <Route path={`${this.state.match.url}/general`} render={(props) => 
                <General {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/datatables`} render={(props) => 
                <Datatable {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
        </Switch>
    );
  }
}

export default Tables;