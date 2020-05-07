import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import C3 from './c3.jsx';
import Chartist from './chartist.jsx';
import Chart from './chart.jsx';
import Morris from './morris.jsx';
import Sparkline from './sparkline.jsx';
import Gauge from './gauge.jsx';

class Charts extends Component {
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
            <Route path={`${this.state.match.url}/c3`} render={(props) => 
                <C3 {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
            <Route path={`${this.state.match.url}/chartist`} render={(props) => 
                <Chartist {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
            <Route path={`${this.state.match.url}/chart`} render={(props) => 
                <Chart {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
            <Route path={`${this.state.match.url}/morris`} render={(props) => 
                <Morris {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
            <Route path={`${this.state.match.url}/sparkline`} render={(props) => 
                <Sparkline {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />}
            />
            <Route path={`${this.state.match.url}/gauge`} render={(props) => 
                <Gauge {...props}
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

export default Charts;