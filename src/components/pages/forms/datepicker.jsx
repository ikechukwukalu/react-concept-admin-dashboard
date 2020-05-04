import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-form-datepicker.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Datepicker extends Component {
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
            <div className="container-fluid dashboard-content">
                <div className="dashboard-forms ">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header" id="top">
                                <h2 className="pageheader-title">Datepicker </h2>
                                <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Forms</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Datepicker</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <h5 className="card-header">DatePicker</h5>
                                <div className="card-body">
                                    <h5>Basic</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker1" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker1" />
                                            <div className="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>Time Only</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker2" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker2" />
                                            <div className="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>Using Locales</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker3" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker3" />
                                            <div className="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="far fa-clock"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>Date Only</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker4" />
                                            <div className="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>No Icon</h5>
                                    <input type="text" className="form-control datetimepicker-input" id="datetimepicker5" data-toggle="datetimepicker" data-target="#datetimepicker5" />
                                </div>
                                <div className="card-body border-top">
                                    <h5>Enabled/Disabled Dates</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker6" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker6" />
                                            <div className="input-group-append" data-target="#datetimepicker6" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="fa fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>Linked Pickers</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker7" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker7" />
                                            <div className="input-group-append" data-target="#datetimepicker7" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="fa fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker8" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker8" />
                                            <div className="input-group-append" data-target="#datetimepicker8" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="fa fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>View Mode</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker10" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker10" />
                                            <div className="input-group-append" data-target="#datetimepicker10" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="fa fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>Min View Mode</h5>
                                    <div className="form-group">
                                        <div className="input-group date" id="datetimepicker11" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#datetimepicker11" />
                                            <div className="input-group-append" data-target="#datetimepicker11" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="fa fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-top">
                                    <h5>Inline</h5>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div id="datetimepicker13"></div>
                                                </div>
                                            </div>
                                        </div>
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

export default Datepicker;