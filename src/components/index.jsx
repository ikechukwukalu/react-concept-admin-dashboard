import React, { Component, useState, useEffect } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

import NoMatch from './helpers/no-match';

import Header from './includes/header.jsx';
import Footer from './includes/footer.jsx';

import Ecommerce from './pages/ecommerce';
import FinanceDashboard from './pages/finance/finance-dashboard.jsx';
import SalesDashboard from './pages/sales/sales-dashboard.jsx';
import Influencer from './pages/influencer';
import Elements from './pages/ui-elements';
import Charts from './pages/charts';
import Forms from './pages/forms';
import Tables from './pages/tables';
import Pages from './pages/pages';
import Apps from './pages/apps';
import Icons from './pages/icons';
import Maps from './pages/maps';

function RouteChange () {
  const history = useHistory();

  useEffect(() => {
    document.getElementById('root').dispatchEvent(new CustomEvent('route_change', {detail: history.location.pathname}));
  }, [history.location.pathname]);

  return null;
}


class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname
    }
  }

  componentDidMount() {
    document.getElementById('root').addEventListener('route_change', this.route_change);
  }

  route_change = (e) => {
    this.setState({
      path: e.detail
    }, () => console.log(this.state.path));
  }

  render() {
    return [
      <div key="main" className="dashboard-main-wrapper">
        <RouteChange />
        <Header
          base_url={this.state.base_url} 
          api_url={this.state.api_url}
        />
        <div className="dashboard-wrapper">
          <Switch>
              <Route exact path="/">
                <Redirect to="/ecommerce/dashboard" />
              </Route>
              <Route path="/ecommerce" render={(props) => 
                <Ecommerce {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/finance/dashboard" render={(props) => 
                <FinanceDashboard {...props} 
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/sales/dashboard" render={(props) => 
                <SalesDashboard {...props} 
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/influencer" render={(props) => 
                <Influencer {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/elements" render={(props) => 
                <Elements {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/charts" render={(props) => 
                <Charts {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/forms" render={(props) => 
                <Forms {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/tables" render={(props) => 
                <Tables {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/pages" render={(props) => 
                <Pages {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/apps" render={(props) => 
                <Apps {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/icons" render={(props) => 
                <Icons {...props}
                  base_url={this.state.base_url} 
                  api_url={this.state.api_url}
                />} 
              />
              <Route path="/maps" render={(props) => 
                <Maps {...props}
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
          <Footer
            key={"footer"+this.state.path}
            base_url={this.state.base_url} 
            api_url={this.state.api_url}
            path={this.state.path}
          />
        </div>
      </div>
    ];
  }
}

export default Components;
