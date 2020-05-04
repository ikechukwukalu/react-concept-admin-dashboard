import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-pages-calender.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Calendar extends Component {
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
        <div className="container-fluid  dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Calendar </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div id='calendar1'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div id='wrap'>
                                <div id='external-events'>
                                    <h4>Draggable Events</h4>
                                    <div className='fc-event'>My Event 1</div>
                                    <div className='fc-event bg-secondary border-secondary'>My Event 2</div>
                                    <div className='fc-event bg-brand border-brand'>My Event 3</div>
                                    <div className='fc-event bg-info border-info'>My Event 4</div>
                                    <div className='fc-event bg-success border-success'>My Event 5</div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id='drop-remove' />
                                        <label className="custom-control-label" htmlFor="drop-remove">Remove after drop</label>
                                    </div>
                                </div>
                                <div id='calendar'></div>
                                <div style={{clear: 'both'}}></div>
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

export default Calendar;