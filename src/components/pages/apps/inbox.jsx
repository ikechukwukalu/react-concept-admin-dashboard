import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Inbox extends Component {
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
    $(document).ready(function() {

        // binding the check all box to onClick event
        $(".chk_all").click(function() {

            var checkAll = $(".chk_all").prop('checked');
            if (checkAll) {
                $(".checkboxes").prop("checked", true);
            } else {
                $(".checkboxes").prop("checked", false);
            }

        });

        // if all checkboxes are selected, then checked the main checkbox class and vise versa
        $(".checkboxes").click(function() {

            if ($(".checkboxes").length == $(".subscheked:checked").length) {
                $(".chk_all").attr("checked", "checked");
            } else {
                $(".chk_all").removeAttr("checked");
            }

        });

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
                            <li className="active"><a href="#"><span className="icon"><i className="fas fa-fw fa-inbox"></i></span>Inbox<span className="badge badge-primary float-right">8</span></a></li>
                            <li><a href="#"><span className="icon"><i className="fas fa-fw  fa-envelope"></i></span>Sent Mail</a></li>
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
                <div className="email-inbox-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="email-title"><span className="icon"><i className="fas fa-inbox"></i></span> Inbox <span className="new-messages">(2 new messages)</span> </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="email-search">
                                <div className="input-group input-search">
                                    <input className="form-control" type="text" placeholder="Search mail..." /><span className="input-group-btn">
                                   <button className="btn btn-secondary" type="button"><i className="fas fa-search"></i></button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="email-filters">
                    <div className="email-filters-left">
                        <label className="custom-control custom-checkbox be-select-all">
                            <input className="custom-control-input chk_all" type="checkbox" name="chk_all" /><span className="custom-control-label"></span>
                        </label>
                        <div className="btn-group">
                            <button className="btn btn-light dropdown-toggle" data-toggle="dropdown" type="button">
                                With selected <span className="caret"></span></button>
                            <div className="dropdown-menu" role="menu"><a className="dropdown-item" href="#">Mark as rea</a><a className="dropdown-item" href="#">Mark as unread</a><a className="dropdown-item" href="#">Spam</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-light" type="button">Archive</button>
                            <button className="btn btn-light" type="button">Span</button>
                            <button className="btn btn-light" type="button">Delete</button>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-light dropdown-toggle" data-toggle="dropdown" type="button">Order by <span className="caret"></span></button>
                            <div className="dropdown-menu dropdown-menu-right" role="menu"><a className="dropdown-item" href="#">Date</a><a className="dropdown-item" href="#">From</a><a className="dropdown-item" href="#">Subject</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Size</a>
                            </div>
                        </div>
                    </div>
                    <div className="email-filters-right"><span className="email-pagination-indicator">1-50 of 253</span>
                        <div className="btn-group email-pagination-nav">
                            <button className="btn btn-light" type="button"><i className="fas fa-angle-left"></i></button>
                            <button className="btn btn-light" type="button"><i className="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="email-list">
                    <div className="email-list-item email-list-item--unread">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="1" id="one" /><span className="custom-control-label"></span>
                            </label><a className="favorite active" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right"><span className="icon"><i className="fas fa-paperclip"></i> </span>28 Jul</span><span className="from">Penelope Thornton</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item email-list-item--unread">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="2" id="two" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right"></span><span className="date float-right"><span className="icon"><i className="fas fa-paperclip"></i></span> 13 Jul</span><span className="from">Benji Harper</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="3" id="three" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right">23 Jun</span><span className="from">Justine Myranda</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="4" id="four" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right">17 May</span><span className="from">John Doe</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="5" id="five" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right">16 May</span><span className="from">Sherwood Clifford</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="6" id="six" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right">12 May</span><span className="from">Kristopher Donny</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="7" id="seven" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right">12 May</span><span className="from">Kristopher Donny</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
                        </div>
                    </div>
                    <div className="email-list-item">
                        <div className="email-list-actions">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input checkboxes" type="checkbox" defaultValue="8" id="eight" /><span className="custom-control-label"></span>
                            </label><a className="favorite" href="#"><span><i className="fas fa-star"></i></span></a>
                        </div>
                        <div className="email-list-detail"><span className="date float-right">12 May</span><span className="from">Kristopher Donny</span>
                            <p className="msg">Urgent - You forgot your keys in the class room, please come imediatly!</p>
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

export default Inbox;