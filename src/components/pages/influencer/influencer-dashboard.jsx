import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-influencer-dashboard.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class InfluencerDashboard extends Component {
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
            <div className="dashboard-influence">
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h3 className="mb-2">Infulencer Dashboard Template </h3>
                                <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Influencer Dashboard Template</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>     
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card influencer-profile-data">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
                                            <div className="text-center">
                                                <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="User Avatar" className="rounded-circle user-avatar-xxl" />
                                            </div>
                                        </div>
                                        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
                                            <div className="user-avatar-info">
                                                <div className="m-b-20">
                                                    <div className="user-avatar-name">
                                                        <h2 className="mb-1">Henry Barbara</h2>
                                                    </div>
                                                    <div className="rating-star  d-inline-block">
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <i className="fa fa-fw fa-star"></i>
                                                        <p className="d-inline-block text-dark">14 Reviews </p>
                                                    </div>
                                                </div>
                                                {/* <div className="float-right"><a href="#" className="user-avatar-email text-secondary">www.henrybarbara.com</a></div> */}
                                                <div className="user-avatar-address">
                                                    <p className="border-bottom pb-3">
                                                        <span className="d-xl-inline-block d-block mb-2"><i className="fa fa-map-marker-alt mr-2 text-primary "></i>4045 Denver AvenueLos Angeles, CA 90017</span>
                                                        <span className="mb-2 ml-xl-4 d-xl-inline-block d-block">Joined date: 23 June, 2018  </span>
                                                        <span className=" mb-2 d-xl-inline-block d-block ml-xl-4">Male 
                                                                </span>
                                                        <span className=" mb-2 d-xl-inline-block d-block ml-xl-4">29 Year Old </span>
                                                    </p>
                                                    <div className="mt-3">
                                                        <a href="#" className="badge badge-light mr-1">Fitness</a> <a href="#" className="badge badge-light mr-1">Life Style</a> <a href="#" className="badge badge-light">Gym</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top user-social-box">
                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                    <div className="user-social-media d-xl-inline-block "><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                </div>
                            </div>
                        </div>
                    </div>                 
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-inline-block">
                                        <h5 className="text-muted">Total Views</h5>
                                        <h2 className="mb-0"> 10,28,056</h2>
                                    </div>
                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                        <i className="fa fa-eye fa-fw fa-sm text-info"></i>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-inline-block">
                                        <h5 className="text-muted">Total Followers</h5>
                                        <h2 className="mb-0"> 24,763</h2>
                                    </div>
                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
                                        <i className="fa fa-user fa-fw fa-sm text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-inline-block">
                                        <h5 className="text-muted">Partnerships</h5>
                                        <h2 className="mb-0">14</h2>
                                    </div>
                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
                                        <i className="fa fa-handshake fa-fw fa-sm text-secondary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-inline-block">
                                        <h5 className="text-muted">Total Earned</h5>
                                        <h2 className="mb-0"> $149.00</h2>
                                    </div>
                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
                                        <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>                
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <h5 className="card-header">Followers by Gender</h5>
                                <div className="card-body">
                                    <div id="gender_donut" style={{height: "230px"}}></div>
                                </div>
                                <div className="card-footer p-0 bg-white d-flex">
                                    <div className="card-footer-item card-footer-item-bordered w-50">
                                        <h2 className="mb-0"> 60% </h2>
                                        <p>Female </p>
                                    </div>
                                    <div className="card-footer-item card-footer-item-bordered">
                                        <h2 className="mb-0">40% </h2>
                                        <p>Male </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <h5 className="card-header">Followers by Age</h5>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">15 - 20</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "45%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">20 - 25</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "55%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">25 - 30</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">30 - 35</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "35%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">35 - 40</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "21%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">45 - 50</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "85%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">50 - 55</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "25%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-5 col-lg-12 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <h5 className="card-header">Top Folllowes by Locations </h5>
                                <div className="card-body">
                                    <canvas id="chartjs_bar_horizontal"></canvas>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="section-block">
                                <h3 className="section-title">My Active Campaigns</h3>
                            </div>
                            <div className="card">
                                <div className="campaign-table table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="border-0">
                                                <th className="border-0">Company</th>
                                                <th className="border-0">Campaign Name</th>
                                                <th className="border-0">Social Platform</th>
                                                <th className="border-0">Min / Max Views</th>
                                                <th className="border-0">Status</th>
                                                <th className="border-0">Start Date</th>
                                                <th className="border-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/dribbble.png"} alt="user" width="35" /></div>
                                                </td>
                                                <td>Fashion E Commerce </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
                                                        <span><a href="#"><i className="fab fa-fw fa-twitter-square twitter-color"></i></a></span>
                                                        <span><a href="#"><i className="fab fa-fw fa-instagram instagram-color"></i></a></span>
                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
                                                    </div>
                                                </td>
                                                <td>1,00,000 / 1,50,000</td>
                                                <td>70%</td>
                                                <td>7 Aug,2018</td>
                                                <td>
                                                    <div className="dropdown float-right">
                                                        <a href="#" className="dropdown-toggle card-drop" data-toggle="dropdown" aria-expanded="true">
                                                                <i className="mdi mdi-dots-vertical"></i>
                                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            
                                                            <a href="#" className="dropdown-item">Sales Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Export Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Profit</a>
                                                            
                                                            <a href="#" className="dropdown-item">Action</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/github.png"} alt="user" width="35" /></div>
                                                </td>
                                                <td>Fitness Products </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color "></i></a></span>
                                                        <span><a href="#"><i className="fab fa-fw fa-twitter-square twitter-color "></i></a></span>
                                                    </div>
                                                </td>
                                                <td>2,50,000 / 3,50,000</td>
                                                <td>70%</td>
                                                <td>10 Aug,2018</td>
                                                <td>
                                                    <div className="dropdown float-right">
                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            
                                                            <a href="#" className="dropdown-item">Sales Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Export Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Profit</a>
                                                            
                                                            <a href="#" className="dropdown-item">Action</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/dropbox.png"} alt="user" width="35" /></div>
                                                </td>
                                                <td>Gym Trainer Program </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color "></i></a></span>
                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color "></i></a></span>
                                                    </div>
                                                </td>
                                                <td>3,50,000 / 4,50,000</td>
                                                <td>70%</td>
                                                <td>22 Aug,2018</td>
                                                <td>
                                                    <div className="dropdown float-right">
                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            
                                                            <a href="#" className="dropdown-item">Sales Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Export Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Profit</a>
                                                            
                                                            <a href="#" className="dropdown-item">Action</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/bitbucket.png"} alt="user" width="30" /></div>
                                                </td>
                                                <td>2018 Top Product </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
                                                    </div>
                                                </td>
                                                <td>4,50,000 / 5,50,000</td>
                                                <td>70%</td>
                                                <td>25 Aug,2018</td>
                                                <td>
                                                    <div className="dropdown float-right">
                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            
                                                            <a href="#" className="dropdown-item">Sales Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Export Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Profit</a>
                                                            
                                                            <a href="#" className="dropdown-item">Action</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="m-r-10"><img src={this.state.base_url+"assets/images/mail_chimp.png"} alt="user" width="30" /></div>
                                                </td>
                                                <td>Top Dashboard Sale 2018</td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
                                                    </div>
                                                </td>
                                                <td>5,50,000 / 6,50,000</td>
                                                <td>70%</td>
                                                <td>27 Aug,2018</td>
                                                <td>
                                                    <div className="dropdown float-right">
                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            
                                                            <a href="#" className="dropdown-item">Sales Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Export Report</a>
                                                            
                                                            <a href="#" className="dropdown-item">Profit</a>
                                                            
                                                            <a href="#" className="dropdown-item">Action</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-block">
                                <h3 className="section-title">Recommended Campaigns</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card campaign-card text-center">
                                <div className="card-body">
                                    <div className="campaign-img"><img src={this.state.base_url+"assets/images/dribbble.png"} alt="user" className="user-avatar-xl" /></div>
                                    <div className="campaign-info">
                                        <h3 className="mb-1">Campaigns Name</h3>
                                        <p className="mb-3">Vestibulum porttitor laoreet faucibus.</p>
                                        <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">2,50,000</span></p>
                                        <p>Payout: <span className="text-dark font-medium ml-2">$22</span></p>
                                        <a href="#"><i className="fab fa-twitter-square fa-sm twitter-color"></i> </a><a href="#"><i className="fab fa-snapchat-square fa-sm snapchat-color"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card campaign-card text-center">
                                <div className="card-body">
                                    <div className="campaign-img"><img src={this.state.base_url+"assets/images/github.png"} alt="user" className=" user-avatar-xl" /></div>
                                    <div className="campaign-info">
                                        <h3 className="mb-1">Campaigns Name</h3>
                                        <p className="mb-3">Lorem ipsum dolor sit ament</p>
                                        <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">1,00,000</span></p>
                                        <p>Payout: <span className="text-dark font-medium ml-2">$28</span></p>
                                        <a href="#"><i className="fab fa-instagram fa-sm instagram-color"></i> </a><a href="#"><i className="fab fa-facebook-square fa-sm facebook-color"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card campaign-card text-center">
                                <div className="card-body">
                                    <div className="campaign-img"><img src={this.state.base_url+"assets/images/slack.png"} alt="user" className="user-avatar-xl" /></div>
                                    <div className="campaign-info">
                                        <h3 className="mb-1">Campaigns Name</h3>
                                        <p className="mb-3">Maecenas mattis tempor libero pretium.</p>
                                        <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">3,80,000</span></p>
                                        <p>Payout: <span className="text-dark font-medium ml-2">$36</span></p>
                                        <a href="#"><i className="fab fa-facebook-square fa-sm facebook-color"></i> </a><a href="#"><i className="fab fa-snapchat-square fa-sm snapchat-color"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card campaign-card text-center">
                                <div className="card-body">
                                    <div className="campaign-img"><img src={this.state.base_url+"assets/images/mail_chimp.png"} alt="user" className="user-avatar-xl" /></div>
                                    <div className="campaign-info">
                                        <h3 className="mb-1">Campaigns Name</h3>
                                        <p className="mb-3">Proin vitae lacinia leo</p>
                                        <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">4,50,000</span></p>
                                        <p>Payout: <span className="text-dark font-medium ml-2">$57</span></p>
                                        <a href="#"><i className="fab fa-twitter-square fa-sm twitter-color"></i> </a><a href="#"><i className="fab fa-snapchat-square fa-sm snapchat-color"></i></a>
                                        <a href="#"><i className="fab fa-facebook-square fa-sm facebook-color"></i></a>
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

export default InfluencerDashboard;