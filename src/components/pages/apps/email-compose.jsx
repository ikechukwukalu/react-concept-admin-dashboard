import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import select2 from 'select2';
import summernote from 'summernote';

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class EmailCompose extends Component {
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
      $('.js-example-basic-multiple').select2({ tags: true });
      $('#summernote').summernote({
          height: 300

      });
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
            <div className="container-fluid">
                <aside className="page-aside">
                    <div className="aside-content">
                        <div className="aside-header">
                            <button className="navbar-toggle" data-target=".aside-nav" data-toggle="collapse" type="button"><span className="icon"><i className="fas fa-caret-down"></i></span></button><span className="title">Mail Service</span>
                            <p className="description">Service description</p>
                        </div>
                        <div className="aside-compose"><a className="btn btn-lg btn-secondary btn-block" href="#">Compose Email</a></div>
                        <div className="aside-nav collapse">
                            <ul className="nav">
                                <li><a href="#"><span className="icon"><i className="fas fa-fw fa-inbox"></i></span>Inbox<span className="badge badge-primary float-right">8</span></a></li>
                                <li className="active"><a href="#"><span className="icon"><i className="fas fa-fw  fa-envelope"></i></span>Sent Mail</a></li>
                                <li><a href="#"><span className="icon"><i className="fas fa-fw fa-briefcase"></i></span>Important<span className="badge badge-secondary float-right">4</span></a></li>
                                <li><a href="#"><span className="icon"><i className="fas fa-fw fa-file"></i></span>Drafts</a></li>
                                <li><a href="#"><span className="icon"><i className="fas fa-fw fa-star"></i></span>Tags</a></li>
                                <li><a href="#"><span className="icon"><i className="fas fa-fw fa-trash"></i></span>Trash</a></li>
                            </ul><span className="title">Labels</span>
                            <ul className="nav nav-pills nav-stacked">
                                <li><a href="#"><i className="m-r-10 mdi mdi-label text-secondary"></i>
                                    Important </a></li>
                                <li><a href="#">
                                <i className="m-r-10 mdi mdi-label text-primary"></i> Business   </a></li>
                                <li><a href="#"> <i className="m-r-10 mdi mdi-label text-brand"></i>
                                Inspiration </a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <div className="main-content container-fluid p-0">
                    <div className="email-head">
                        <div className="email-head-title">Compose new message<span className="icon mdi mdi-edit"></span></div>
                    </div>
                    <div className="email-compose-fields">
                        <div className="to">
                            <div className="form-group row pt-0">
                                <label className="col-md-1 control-label">To:</label>
                                <div className="col-md-11">
                                    <select className="js-example-basic-multiple" multiple="multiple" defaultValue={['Yellow', 'Blue']}>
                                        <option value="Yellow">Yellow</option>
                                        <option value="White">White</option>
                                        <option value="Blue">Blue</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="to cc">
                            <div className="form-group row pt-2">
                                <label className="col-md-1 control-label">Cc</label>
                                <div className="col-md-11">
                                    <select className="js-example-basic-multiple" multiple="multiple" defaultValue={['Alaska', 'Victoria']}>
                                        <option value="Alabama">Alabama</option>
                                        <option value="Alaska">Alaska</option>
                                        <option value="Melbourne">Melbourne</option>
                                        <option value="Victoria">Victoria</option>
                                        <option value="Newyork">Newyork</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="subject">
                            <div className="form-group row pt-2">
                                <label className="col-md-1 control-label">Subject</label>
                                <div className="col-md-11">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="email editor">
                        <div className="col-md-12 p-0">
                            <div className="form-group">
                                <label className="control-label sr-only" htmlFor="summernote">Descriptions </label>
                                <textarea className="form-control" id="summernote" name="editordata" rows="6" placeholder="Write Descriptions"></textarea>
                            </div>
                        </div>
                        <div className="email action-send">
                            <div className="col-md-12 ">
                                <div className="form-group">
                                    <button className="btn btn-primary btn-space" type="submit"><i className="icon s7-mail"></i> Send</button>
                                    <button className="btn btn-secondary btn-space" type="button"><i className="icon s7-close"></i> Cancel</button>
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

export default EmailCompose;