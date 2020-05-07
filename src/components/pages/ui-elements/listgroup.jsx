import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class ListGroup extends Component {
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
        <div className="container-fluid dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Listgroup </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">UI Elements</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Listgroup</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
         
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Basic</h5>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item active">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Hover List Group</h5>
                            <div className="card-body">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action active"> Cras justo odio </a>
                                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                    <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Flush List</h5>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Contextual List</h5>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item list-group-item-primary">This is a primary list group item</li>
                                    <li className="list-group-item list-group-item-secondary">This is a secondary list group item</li>
                                    <li className="list-group-item list-group-item-success">This is a success list group item</li>
                                    <li className="list-group-item list-group-item-danger">This is a danger list group item</li>
                                    <li className="list-group-item list-group-item-warning">This is a warning list group item</li>
                                    <li className="list-group-item list-group-item-info">This is a info list group item</li>
                                    <li className="list-group-item list-group-item-light">This is a light list group item</li>
                                    <li className="list-group-item list-group-item-dark">This is a dark list group item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Custom Content</h5>
                            <div className="card-body">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1 text-white">List group item heading</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small>Donec id elit non mi porta.</small>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">List group item heading</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">List group item heading</h5>
                                            <small className="text-muted">3 days ago</small>
                                        </div>
                                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">List with Badges</h5>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Cras justo odio
                                        <span className="badge badge-primary badge-pill">14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Dapibus ac facilisis in
                                        <span className="badge badge-primary badge-pill">2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Morbi leo risus
                                        <span className="badge badge-primary badge-pill">1</span>
                                    </li>
                                </ul>
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

export default ListGroup;