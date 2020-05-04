import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-finance-dashboard.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class FinanceDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname,
      active_links: ActiveLinkIds
    }
  }

  componentDidMount() {
      if(typeof this.state.active_links[this.state.path] == 'object') {
        this.state.active_links[this.state.path].map(el => {
            $('#'+el).addClass('active');
        });
        
      }
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
    if(typeof this.state.active_links[this.state.path] == 'object') {
      this.state.active_links[this.state.path].map(el => {
          $('#'+el).removeClass('active');
      });
      
    }
  }
  
  render() {
    return (
        <Fragment>
          <div className="dashboard-finance">
              <div className="container-fluid dashboard-content">
                
                  <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="page-header">
                              <h3 className="mb-2">Finance Dashboard </h3>
                              <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                              <div className="page-breadcrumb">
                                  <nav aria-label="breadcrumb">
                                      <ol className="breadcrumb">
                                          <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                          <li className="breadcrumb-item active" aria-current="page">Finance Dashboard Template</li>
                                      </ol>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="row">
                      <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                          <form>
                              <div className="form-group">
                                  <input className="form-control" type="text" name="daterange" defaultValue="01/01/2018 - 01/15/2018" />
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Total Income</h5>
                              <div className="card-body">
                                  <div className="metric-value d-inline-block">
                                      <h1 className="mb-1">$5,79,000</h1>
                                  </div>
                                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                      <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1">25%</span>
                                  </div>
                              </div>
                              <div className="card-body bg-light p-t-40 p-b-40">
                                  <div id="sparkline-revenue"></div>
                              </div>
                              <div className="card-footer text-center bg-white">
                                  <a href="#" className="card-link">View Details</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Total Expences</h5>
                              <div className="card-body">
                                  <div className="metric-value d-inline-block">
                                      <h1 className="mb-1">$1,79,000</h1>
                                  </div>
                                  <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                                      <span className="icon-circle-small icon-box-xs text-danger bg-danger-light"><i className="fa fa-fw fa-arrow-down"></i></span><span className="ml-1">15%</span>
                                  </div>
                              </div>
                              <div className="card-body text-center bg-light p-t-40 p-b-40">
                                  <div id="sparkline-revenue2"></div>
                              </div>
                              <div className="card-footer text-center bg-white">
                                  <a href="#" className="card-link">View Details</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Cash on Hand</h5>
                              <div className="card-body">
                                  <div className="metric-value d-inline-block">
                                      <h1 className="mb-1">$79,000</h1>
                                  </div>
                                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                      <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1">25%</span>
                                  </div>
                              </div>
                              <div className="card-body bg-light p-t-40 p-b-40">
                                  <div id="sparkline-revenue3"></div>
                              </div>
                              <div className="card-footer text-center bg-white">
                                  <a href="#" className="card-link">View Details</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Net Profit Margin</h5>
                              <div className="card-body">
                                  <div className="metric-value d-inline-block">
                                      <h1 className="mb-1">$92,000</h1>
                                  </div>
                                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                      <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span> <span className="ml-1">25%</span>
                                  </div>
                              </div>
                              <div className="card-body bg-light p-b-40 p-t-40">
                                  <div id="sparkline-revenue4"></div>
                              </div>
                              <div className="card-footer text-center bg-white">
                                  <a href="#" className="card-link">View Details</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="row">
                    
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">AP and AR Balance
                              </h5>
                              <div className="card-body">
                                  <canvas id="chartjs_balance_bar"></canvas>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">% of Income Budget</h5>
                              <div className="card-body">
                                  <div id="morris_gross" style={{height: "272px"}}></div>
                              </div>
                              <div className="card-footer bg-white">
                                  <p>Budget <span className="float-right text-dark">12,000.00</span></p>
                                  <p>Balance<span className="float-right text-dark">-2300.00 <span className="ml-2 text-secondary"><i className="fas fa-caret-up mr-1"></i>25%</span></span>
                                  </p>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">% of Expenses Budget</h5>
                              <div className="card-body">
                                  <div id="morris_profit" style={{height: "272px"}}></div>
                              </div>
                              <div className="card-footer bg-white">
                                  <p>Budget <span className="float-right text-dark">3500.00</span></p>
                                  <p>Balance <span className="float-right text-dark">230.00 <span className="ml-2 text-secondary"><i className="fas fa-caret-up mr-1"></i>25%</span></span>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">EBIT (Earnings Before Interest & Tax)</h5>
                              <div className="card-body">
                                  <div id="ebit_morris"></div>
                                  <div className="text-center">
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">EBIT (Earnings Before Interest & Tax)</span>
                                      </span>
                                      <p></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Cost of goods / Services <span className="float-right">1 Jan 2018 to 31 Dec 2018</span></h5>
                              <div className="card-body">
                                  <div id="goodservice"></div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div className="row">
                    
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Disputed vs Overdue Invoices</h5>
                              <div className="card-body">
                                  <div className="ct-chart-invoice ct-golden-section"></div>
                                  <div className="text-center m-t-40">
                                      <span className="legend-item mr-3">
                                                  <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full "></i></span><span className="legend-text">Disputed Invoices</span>
                                      </span>
                                      <span className="legend-item mr-3">
                                                  <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full "></i></span><span className="legend-text">Overdue Invoices</span>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Disputed Invoices</h5>
                              <div className="card-body">
                                  <div className="ct-chart-line-invoice ct-golden-section"></div>
                                  <div className="text-center m-t-10">
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">Disputed Invoices</span>
                                      </span>
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">Avarage</span>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Accounts Payable Age</h5>
                              <div className="card-body">
                                  <div id="account" style={{height: "300px"}}></div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Working Capital <span className="float-right">1 Jan 2018 to 31 Dec 2018</span></h5>
                              <div className="card-body">
                                  <div id="capital"></div>
                                  <div className="text-center m-t-10">
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">Working Capital</span>
                                      </span>
                                      <p></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="card">
                              <h5 className="card-header">Inventory Turnover</h5>
                              <div className="card-body">
                                  <div className="ct-chart-inventory ct-golden-section"></div>
                                  <div className="text-center m-t-10">
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">Turnover</span>
                                      </span>
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">Target</span>
                                      </span>
                                      <span className="legend-item mr-3">
                                              <span className="fa-xs text-info mr-1 legend-tile"><i className="fa fa-fw fa-square-full"></i></span>
                                      <span className="legend-text">Acheived</span>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default FinanceDashboard;