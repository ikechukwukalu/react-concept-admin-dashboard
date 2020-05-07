import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-sales-dashboard.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class SalesDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      basename: this.props.basename,
      path: this.props.basename.length > 0 ? window.location.pathname.trim().replace('/'+this.props.basename, '') : window.location.pathname.trim(),
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
            <div className="container-fluid  dashboard-content">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-header">
                            <h3 className="mb-2">Sales Dashboard Template </h3>
                            <p className="pageheader-text">Lorem ipsum dolor sit ametllam fermentum ipsum eu porta consectetur adipiscing elit.Nullam vehicula nulla ut egestas rhoncus.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Sales Dashboard Template</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="text-muted">Customers</h5>
                                <div className="metric-value d-inline-block">
                                    <h1 className="mb-1 text-primary">32,100 </h1>
                                </div>
                                <div className="metric-label d-inline-block float-right text-success">
                                    <i className="fa fa-fw fa-caret-up"></i><span>5.27%</span>
                                </div>
                            </div>
                            <div id="sparkline-1"></div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="text-muted">Order</h5>
                                <div className="metric-value d-inline-block">
                                    <h1 className="mb-1 text-primary">4,200 </h1>
                                </div>
                                <div className="metric-label d-inline-block float-right text-danger">
                                    <i className="fa fa-fw fa-caret-down"></i><span>1.08%</span>
                                </div>
                            </div>
                            <div id="sparkline-2"></div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="text-muted">Revenue</h5>
                                <div className="metric-value d-inline-block">
                                    <h1 className="mb-1 text-primary">$5,656</h1>
                                </div>
                                <div className="metric-label d-inline-block float-right text-danger">
                                    <i className="fa fa-fw fa-caret-down"></i><span>7.00%</span>
                                </div>
                            </div>
                            <div id="sparkline-3">
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="text-muted">Growth</h5>
                                <div className="metric-value d-inline-block">
                                    <h1 className="mb-1 text-primary">+28.45% </h1>
                                </div>
                                <div className="metric-label d-inline-block float-right text-success">
                                    <i className="fa fa-fw fa-caret-up"></i><span>4.87%</span>
                                </div>
                            </div>
                            <div id="sparkline-4"></div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="row">
                    <div className="col-xl-8 col-lg-12 col-md-8 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Revenue</h5>
                            <div className="card-body">
                                <canvas id="revenue" width="400" height="150"></canvas>
                            </div>
                            <div className="card-body border-top">
                                <div className="row">
                                    <div className="offset-xl-1 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 p-3">
                                        <h4> Today's Earning: $2,800.30</h4>
                                        <p>Suspendisse potenti. Done csit amet rutrum.
                                        </p>
                                    </div>
                                    <div className="offset-xl-1 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 p-3">
                                        <h2 className="font-weight-normal mb-3"><span>$48,325</span>                                                    </h2>
                                        <div className="mb-0 mt-3 legend-item">
                                            <span className="fa-xs text-primary mr-1 legend-title "><i className="fa fa-fw fa-square-full"></i></span>
                                            <span className="legend-text">Current Week</span></div>
                                    </div>
                                    <div className="offset-xl-1 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 p-3">
                                        <h2 className="font-weight-normal mb-3">

                                                        <span>$59,567</span>
                                                    </h2>
                                        <div className="text-muted mb-0 mt-3 legend-item"> <span className="fa-xs text-secondary mr-1 legend-title"><i className="fa fa-fw fa-square-full"></i></span><span className="legend-text">Previous Week</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-12 col-md-4 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Total Sale</h5>
                            <div className="card-body">
                                <canvas id="total-sale" width="220" height="155"></canvas>
                                <div className="chart-widget-list">
                                    <p>
                                        <span className="fa-xs text-primary mr-1 legend-title"><i className="fa fa-fw fa-square-full"></i></span><span className="legend-text"> Direct</span>
                                        <span className="float-right">$300.56</span>
                                    </p>
                                    <p>
                                        <span className="fa-xs text-secondary mr-1 legend-title"><i className="fa fa-fw fa-square-full"></i></span>
                                        <span className="legend-text">Affilliate</span>
                                        <span className="float-right">$135.18</span>
                                    </p>
                                    <p>
                                        <span className="fa-xs text-brand mr-1 legend-title"><i className="fa fa-fw fa-square-full"></i></span> <span className="legend-text">Sponsored</span>
                                        <span className="float-right">$48.96</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="fa-xs text-info mr-1 legend-title"><i className="fa fa-fw fa-square-full"></i></span> <span className="legend-text"> E-mail</span>
                                        <span className="float-right">$154.02</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Top Selling Products</h5>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="bg-light">
                                            <tr className="border-0">
                                                <th className="border-0">#</th>
                                                <th className="border-0">Image</th>
                                                <th className="border-0">Product Name</th>
                                                <th className="border-0">Product Id</th>
                                                <th className="border-0">Quantity</th>
                                                <th className="border-0">Price</th>
                                                <th className="border-0">Order Time</th>
                                                <th className="border-0">Customer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/product-pic.jpg"} alt="user" className="rounded" width="45" /></div>
                                                </td>
                                                <td>Product #1 </td>
                                                <td>id000001 </td>
                                                <td>20</td>
                                                <td>$80.00</td>
                                                <td>27-08-2018 01:22:12</td>
                                                <td>Patricia J. King </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/product-pic-2.jpg"} alt="user" className="rounded" width="45" /></div>
                                                </td>
                                                <td>Product #2 </td>
                                                <td>id000002 </td>
                                                <td>12</td>
                                                <td>$180.00</td>
                                                <td>25-08-2018 21:12:56</td>
                                                <td>Rachel J. Wicker </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/product-pic-3.jpg"} alt="user" className="rounded" width="45" /></div>
                                                </td>
                                                <td>Product #3 </td>
                                                <td>id000003 </td>
                                                <td>23</td>
                                                <td>$820.00</td>
                                                <td>24-08-2018 14:12:77</td>
                                                <td>Michael K. Ledford </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/product-pic-4.jpg"} alt="user" className="rounded" width="45" /></div>
                                                </td>
                                                <td>Product #4 </td>
                                                <td>id000004 </td>
                                                <td>34</td>
                                                <td>$340.00</td>
                                                <td>23-08-2018 09:12:35</td>
                                                <td>Michael K. Ledford </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="8"><a href="#" className="btn btn-outline-light float-right">View Details</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Revenue by Location</h5>
                            <div className="card-body">
                                <div id="locationmap" style={{width:"100%", height:"200px"}}></div>
                            </div>
                            <div className="card-body border-top">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="sell-ratio">
                                            <h5 className="mb-1 mt-0 font-weight-normal">New York</h5>
                                            <div className="progress-w-percent">
                                                <span className="progress-value">72k </span>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="sell-ratio">
                                            <h5 className="mb-1 mt-0 font-weight-normal">San Francisco</h5>
                                            <div className="progress-w-percent">
                                                <span className="progress-value">39k</span>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar" role="progressbar" style={{width: "39%"}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="sell-ratio">
                                            <h5 className="mb-1 mt-0 font-weight-normal">Sydney</h5>
                                            <div className="progress-w-percent">
                                                <span className="progress-value">25k </span>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar" role="progressbar" style={{width: "39%"}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="sell-ratio">
                                            <h5 className="mb-1 mt-0 font-weight-normal">Singapore</h5>
                                            <div className="progress-w-percent mb-0">
                                                <span className="progress-value">61k </span>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar" role="progressbar" style={{width: "61%"}} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        
                        <div className="card">
                            <h5 className="card-header"> Sales By Social Source</h5>
                            <div className="card-body p-0">
                                <ul className="social-sales list-group list-group-flush">
                                    <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle facebook-bgcolor mr-2"><i className="fab fa-facebook-f"></i></span><span className="social-sales-name">Facebook</span><span className="social-sales-count text-dark">120 Sales</span>
                                    </li>
                                    <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle twitter-bgcolor mr-2"><i className="fab fa-twitter"></i></span><span className="social-sales-name">Twitter</span><span className="social-sales-count text-dark">99 Sales</span>
                                    </li>
                                    <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle instagram-bgcolor mr-2"><i className="fab fa-instagram"></i></span><span className="social-sales-name">Instagram</span><span className="social-sales-count text-dark">76 Sales</span>
                                    </li>
                                    <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle pinterest-bgcolor mr-2"><i className="fab fa-pinterest-p"></i></span><span className="social-sales-name">Pinterest</span><span className="social-sales-count text-dark">56 Sales</span>
                                    </li>
                                    <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle googleplus-bgcolor mr-2"><i className="fab fa-google-plus-g"></i></span><span className="social-sales-name">Google Plus</span><span className="social-sales-count text-dark">36 Sales</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn-primary-link">View Details</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        
                        <div className="card">
                            <h5 className="card-header"> Sales By Traffic Source</h5>
                            <div className="card-body p-0">
                                <ul className="traffic-sales list-group list-group-flush">
                                    <li className="traffic-sales-content list-group-item "><span className="traffic-sales-name">Direct</span><span className="traffic-sales-amount">$4000.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1 text-success">5.86%</span></span>
                                    </li>
                                    <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Search<span className="traffic-sales-amount">$3123.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1 text-success">5.86%</span></span>
                                        </span>
                                    </li>
                                    <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Social<span className="traffic-sales-amount ">$3099.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1 text-success">5.86%</span></span>
                                        </span>
                                    </li>
                                    <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Referrals<span className="traffic-sales-amount ">$2220.00   <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light"><i className="fa fa-fw fa-arrow-down"></i></span><span className="ml-1 text-danger">4.02%</span></span>
                                        </span>
                                    </li>
                                    <li className="traffic-sales-content list-group-item "><span className="traffic-sales-name">Email<span className="traffic-sales-amount">$1567.00   <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light"><i className="fa fa-fw fa-arrow-down"></i></span><span className="ml-1 text-danger">3.86%</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn-primary-link">View Details</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Sales By Country Traffic Source</h5>
                            <div className="card-body p-0">
                                <ul className="country-sales list-group list-group-flush">
                                    <li className="country-sales-content list-group-item"><span className="mr-2"><i className="flag-icon flag-icon-us" title="us" id="us"></i> </span>
                                        <span className="">United States</span><span className="float-right text-dark">78%</span>
                                    </li>
                                    <li className="list-group-item country-sales-content"><span className="mr-2"><i className="flag-icon flag-icon-ca" title="ca" id="ca"></i></span><span className="">Canada</span><span className="float-right text-dark">7%</span>
                                    </li>
                                    <li className="list-group-item country-sales-content"><span className="mr-2"><i className="flag-icon flag-icon-ru" title="ru" id="ru"></i></span><span className="">Russia</span><span className="float-right text-dark">4%</span>
                                    </li>
                                    <li className="list-group-item country-sales-content"><span className=" mr-2"><i className="flag-icon flag-icon-in" title="in" id="in"></i></span><span className="">India</span><span className="float-right text-dark">12%</span>
                                    </li>
                                    <li className="list-group-item country-sales-content"><span className=" mr-2"><i className="flag-icon flag-icon-fr" title="fr" id="fr"></i></span><span className="">France</span><span className="float-right text-dark">16%</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn-primary-link">View Details</a>
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

export default SalesDashboard;