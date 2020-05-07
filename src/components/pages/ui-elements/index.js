import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import $ from 'jquery';

import NoMatch from '../../helpers/no-match';

import Cards from './cards.jsx';
import General from './general.jsx';
import Carousel from './carousel.jsx';
import ListGroup from './listgroup.jsx';
import Typography from './typography.jsx';
import Accordions from './accordions.jsx';
import Tabs from './tabs.jsx';

class Elements extends Component {
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
            <Route path={`${this.state.match.url}/cards`} render={(props) => 
                <Cards {...props}
                  base_url={this.state.base_url}
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/general`} render={(props) => 
                <General {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/carousel`} render={(props) => 
                <Carousel {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/listgroup`} render={(props) => 
                <ListGroup {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/typography`} render={(props) => 
                <Typography {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/accordions`} render={(props) => 
                <Accordions {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                  basename={this.state.basename}
                />} 
            />
            <Route path={`${this.state.match.url}/tabs`} render={(props) => 
                <Tabs {...props}
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

export default Elements;