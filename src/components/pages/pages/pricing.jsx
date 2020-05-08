import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.location.pathname,
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
        <div className="container-fluid dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Pricing </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offset-xl-1 col-xl-10">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="section-block">
                    <h3>Influencer Pricing Table</h3>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header bg-primary text-center p-3 ">
                            <h4 className="mb-0 text-white"> Basic</h4>
                        </div>
                        <div className="card-body text-center">
                            <h1 className="mb-1">$150</h1>
                            <p>Per Month Plateform</p>
                        </div>
                        <div className="card-body border-top">
                            <ul className="list-unstyled bullet-check font-14">
                                <li>Facebook, Instagram, Pinterest,Snapchat.</li>
                                <li>Guaranteed follower growth for increas brand awareness.</li>
                                <li>Daily updates on choose platforms</li>
                                <li>Stronger customer service through daily interaction</li>
                                <li>Monthly progress report</li>
                                <li>1 Million Followers</li>
                            </ul>
                            <a href="#" className="btn btn-outline-secondary btn-block btn-lg">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header bg-info text-center p-3">
                            <h4 className="mb-0 text-white"> Standard</h4>
                        </div>
                        <div className="card-body text-center">
                            <h1 className="mb-1">$350</h1>
                            <p>Per Month Plateform</p>
                        </div>
                        <div className="card-body border-top">
                            <ul className="list-unstyled bullet-check font-14">
                                <li>Facebook, Instagram, Pinterest,Snapchat.</li>
                                <li>Guaranteed follower growth for increas brand awareness.</li>
                                <li>Daily updates on choose platforms</li>
                                <li>Stronger customer service through daily interaction</li>
                                <li>Monthly progress report</li>
                                <li>2 Blog Post & 3 Social Post</li>
                                <li>5 Millions Followers</li>
                                <li>Growth Result</li>
                            </ul>
                            <a href="#" className="btn btn-secondary btn-block btn-lg">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header bg-primary text-center p-3">
                            <h4 className="mb-0 text-white">Premium</h4>
                        </div>
                        <div className="card-body text-center">
                            <h1 className="mb-1">$550</h1>
                            <p>Per Month Plateform</p>
                        </div>
                        <div className="card-body border-top">
                            <ul className="list-unstyled bullet-check font-14">
                                <li>Facebook, Instagram, Pinterest,Snapchat.</li>
                                <li>Guaranteed follower growth for increas brand awareness.</li>
                                <li>Daily updates on choose platforms</li>
                                <li>Stronger customer service through daily interaction</li>
                                <li>Monthly progress report & Growth Result</li>
                                <li>4 Blog Post & 6 Social Post</li>
                            </ul>
                            <a href="#" className="btn btn-secondary btn-block btn-lg">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
           </div>
            <div className="offset-xl-1 col-xl-10">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="section-block">
                    <h3>Feature Based Pricing</h3>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header bg-white text-center p-4 ">
                            <h3 className="mb-1">Professional</h3>
                            <span className="mb-2 d-block">Best for solor users</span>
                             <h1 className="mb-1"><span className="font-24">$</span><sub className="display-4">19</sub></h1>
                            <p>a month per user</p>
                            <a href="#" className="btn btn-secondary mb-2">Start 14 Day Free Trial</a>
                            <p>$19 month to month</p>
                        </div>
                        <div className="card-body">
                           <ul className="list-unstyled bullet-check font-14  mb-0">
                                <li>Up to 10 Templates</li>
                                <li>Unlimited Download & Access</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="card-body border-top">
                            <ul className="list-unstyled font-14 ">
                                <li>Integer in lorem dapibus</li>
                                <li>Lacinia libero eget, faucibus leo.</li>
                                <li>Quisque consectetur arcu</li>
                                <li>Integer cursus metus quis</li>
                                <li>Vivamus in velit at mauris imperdiet</li>
                                <li>Nunc pellentesque facilisis finibus.</li>
                            </ul>
                            <a href="#" className="btn btn-outline-secondary btn-block btn-lg">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header bg-white text-center p-4 ">
                            <h3 className="mb-1">Business</h3>
                            <span className="mb-2 d-block">Best for small & medium businesses</span>
                             <h1 className=" mb-1"><span className="font-24">$</span><sub className="display-4">19</sub></h1>
                            <p>a month per user</p>
                            <a href="#" className="btn btn-secondary mb-2">Start 14 Day Free Trial</a>
                            <p>$39 month to month</p>
                        </div>
                        <div className="card-body">
                           <ul className="list-unstyled bullet-check mb-0">
                                <li>Up to 10 Templates</li>
                                <li>Unlimited Download & Access</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="card-body border-top">
                            <ul className="list-unstyled">
                                <li>Integer in lorem dapibus</li>
                                <li>Lacinia libero eget, faucibus leo.</li>
                                <li>Quisque consectetur arcu</li>
                                <li>Integer cursus metus quis</li>
                                <li>Vivamus in velit at mauris imperdiet</li>
                                <li>Nunc pellentesque facilisis finibus.</li>
                            </ul>
                            <a href="#" className="btn btn-outline-secondary btn-block btn-lg">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-header bg-white text-center p-4 ">
                            <h3 className="mb-1">Business</h3>
                            <span className="mb-2 d-block">Best for small & medium businesses</span>
                             <h1 className=" mb-1"> <sub className="display-4">Let's Talk</sub></h1>
                            <p>For more details contact us.</p>
                            <a href="#" className="btn btn-secondary mb-2">Contact us Now</a>
                            <p>Ask to our expert.</p>
                        </div>
                        <div className="card-body">
                           <ul className="list-unstyled bullet-check mb-0">
                                <li>Up to 10 Templates</li>
                                <li>Unlimited Download & Access</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="card-body border-top">
                            <ul className="list-unstyled">
                                <li>Integer in lorem dapibus</li>
                                <li>Lacinia libero eget, faucibus leo.</li>
                                <li>Quisque consectetur arcu</li>
                                <li>Integer cursus metus quis</li>
                                <li>Vivamus in velit at mauris imperdiet</li>
                                <li>Nunc pellentesque facilisis finibus.</li>
                            </ul>
                            <a href="#" className="btn btn-outline-secondary btn-block btn-lg">Get Started</a>
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

export default Pricing;