import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class MessageChat extends Component {
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
            <div className="main-container">
                <div className="navbar bg-white breadcrumb-bar border-bottom">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Overview</a>
                            </li>
                            <li className="breadcrumb-item"><a href="pages-app.html">App Pages</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Chat</li>
                        </ol>
                    </nav>
                    <div className="dropdown">
                        <button className="btn btn-outline-light btn-sm" data-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-cog"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Manage Members</a>
                            <a className="dropdown-item" href="#">Subscribe</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#">Leave Chat</a>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <div className="chat-module">
                        <div className="chat-module-top">
                            <form>
                                <div className="input-group input-group-round">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <input type="search" className="form-control filter-list-input" placeholder="Search chat" aria-label="Search Chat" />
                                </div>
                            </form>
                            <div className="chat-module-body">
                                <div className="media chat-item">
                                    <img alt="William" src={this.state.base_url+"assets/images/avatar-1.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">William</span>
                                            <span>4 days ago</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Hey guys, Phasellus imperdiet arcu venenatis, malesuada nulla a, porta sem. Curabitur nec massa ultrices, consequat erat sit amet, luctus justo. Brand Concept &amp; Design!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="Komal" src={this.state.base_url+"assets/images/avatar-2.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">Komal</span>
                                            <span>4 days ago</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Nice one <a href="#">@Komal</a>, Nulla ut diam porttitor odio malesuada malesuada eu at ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="tanu" src={this.state.base_url+"assets/images/avatar-3.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">Tanu</span>
                                            <span>3 days ago</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Roger that boss! <a href="#">@Ravi</a> Donec quis ante ut felis tincidunt blandit. 🔥</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="Bhoomi" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">Bhoomi</span>
                                            <span>3 days ago</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <h1 id="-">😉</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="William" src={this.state.base_url+"assets/images/avatar-1.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">William</span>
                                            <span>2 days ago</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Can't wait! <a href="#">@David</a> Curabitur nec massa ultrices, consequat erat sit amet, luctus justo. <a href="#">  Meeting</a>?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="Daniel" src={this.state.base_url+"assets/images/avatar-2.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">Daniel</span>
                                            <span>Yesterday</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Quisque condimentum elit quis nibh condimentum, in maximus tortor viverra. 🤓</p>
                                        </div>
                                        <div className="media media-attachment">
                                            <div className="avatar bg-primary">
                                                <i className="fas fa-file"></i>
                                            </div>
                                            <div className="media-body">
                                                <a href="#" className="">questionnaire-draft.doc</a>
                                                <span>24kb Document</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="Fallon" src={this.state.base_url+"assets/images/avatar-3.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">Fallon</span>
                                            <span>2 hours ago</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Great start guys, Fusce tempus ipsum a mi rutrum, at dignissim mauris vulputate.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="media chat-item">
                                    <img alt="Kimberly" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="rounded-circle user-avatar-lg" />
                                    <div className="media-body">
                                        <div className="chat-item-title">
                                            <span className="chat-item-author">Kimberly</span>
                                            <span>Just now</span>
                                        </div>
                                        <div className="chat-item-body">
                                            <p>Well done <a href="#">@all</a>. See you all Fusce tempus ipsum a mi rutrum, at dignissim mauris vulputate. 🤜</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-module-bottom">
                            <form className="chat-form">
                                <textarea className="form-control" placeholder="Type message" rows="1"></textarea>
                                <div className="chat-form-buttons">
                                    <button type="button" className="btn btn-link">
                                        <i className="far fa-smile"></i>
                                    </button>
                                    <div className="custom-file custom-file-naked">
                                        <input type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" for="customFile">
                                            <i className="fas fa-paperclip"></i>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="chat-sidebar collapse" id="sidebar-collapse">
                        <div className="chat-sidebar-content">
                            <div className="chat-team-sidebar text-small">
                                <div className="chat-team-sidebar-top">
                                    <div className="media align-items-center">
                                        <a href="#" className="mr-2">
                                            <img alt="Team Avatar" src={this.state.base_url+"assets/images/avatar-2.jpg"} className="rounded-circle user-avatar-xl"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mb-1">Pipeline Fans</h5>
                                            <p>A collective of Pipeline enthusiasts sharing the the love</p>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs nav-justified" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active show" id="members-tab" data-toggle="tab" href="#members" role="tab" aria-controls="members" aria-selected="true">Members</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="files-tab" data-toggle="tab" href="#files" role="tab" aria-controls="files" aria-selected="false">Files</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="chat-team-sidebar-bottom">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="members" role="tabpanel" aria-labelledby="members-tab" data-filter-list="list-group">
                                            <div id="test-list">
                                                <form className="px-3 mb-3">
                                                    <div className="input-group input-group-round">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                            <i className="fas fa-search"></i>
                                                        </span>
                                                        </div>
                                                        <input type="text" className="form-control search" placeholder="Filter members" aria-label="Filter Members" />
                                                    </div>
                                                </form>
                                                <div className="list-group list-group-flush  list">
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Claire Connors" src={this.state.base_url+"assets/images/avatar-1.jpg"} className="avatar" />
                                                            <div className="media-body ">
                                                                <h6 className="mb-0 name">Claire Connors</h6>
                                                                <span className="name">Administrator</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Marcus Simmons" src={this.state.base_url+"assets/images/avatar-2.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Marcus Simmons</h6>
                                                                <span className="name">Administrator</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Peggy Brown" src={this.state.base_url+"assets/images/avatar-3.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Peggy Brown</h6>
                                                                <span className="name">Project Manager</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Harry Xai" src={this.state.base_url+"assets/images/avatar-3.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Harry Xai</h6>
                                                                <span className="name">Project Manager</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Sally Harper" src={this.state.base_url+"assets/images/avatar-1.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Sally Harper</h6>
                                                                <span className="name">Developer</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Ravi Singh" src={this.state.base_url+"assets/images/avatar-2.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Ravi Singh</h6>
                                                                <span className="name">Developer</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-3.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">David Whittaker</h6>
                                                                <span className="name">Designer</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Kerri-Anne Banks" src={this.state.base_url+"assets/images/avatar-4.jpg"}  className="avatar " />
                                                        <div className="media-body ">
                                                            <h6 className="mb-0 name ">Kerri-Anne Banks</h6>
                                                            <span className="name ">Marketing</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                    <a className="list-group-item list-group-item-action " href="# ">
                                                    <div className="media media-member mb-0 ">
                                                        <img alt="Masimba Sibanda " src={this.state.base_url+"assets/images/avatar-3.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Masimba Sibanda</h6>
                                                                <span className="name">Designer</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="list-group-item list-group-item-action" href="#">
                                                        <div className="media media-member mb-0">
                                                            <img alt="Krishna Bajaj" src={this.state.base_url+"assets/images/avatar-2.jpg"}  className="avatar" />
                                                        <div className="media-body ">
                                                            <h6 className="mb-0 name ">Krishna Bajaj</h6>
                                                            <span className="name ">Marketing</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                    <a className="list-group-item list-group-item-action " href="# ">
                                                    <div className="media media-member mb-0 ">
                                                        <img alt="Kenny Tran " src={this.state.base_url+"assets/images/avatar-1.jpg"} className="avatar" />
                                                            <div className="media-body">
                                                                <h6 className="mb-0 name">Kenny Tran</h6>
                                                                <span className="name">Contributor</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="files" role="tabpanel" aria-labelledby="files-tab" data-filter-list="dropzone-previews">
                                            <div id="test-list-2">
                                                <form className="px-3 mb-3">
                                                    <div className="input-group input-group-round">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                            <i className="fas fa-search"></i>
                                                        </span>
                                                        </div>
                                                        <input type="text" className="form-control search" placeholder="Filter members" aria-label="Filter Members" />
                                                    </div>
                                                </form>
                                                <ul className="d-none dz-template list-unstyled">
                                                    <li className="list-group-item dz-preview dz-file-preview">
                                                        <div className="media align-items-center dz-details">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary dz-file-representation">
                                                                        <img src="https://jituchauhan.com/" className="avatar" data-dz-thumbnail="" alt="" />
                                                                        <i className="fas fa-paperclip"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar" data-title="David Whittaker" data-toggle="tooltip" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div className="dz-file-details">
                                                                    <a href="#" className="dz-filename">
                                                                    <span data-dz-name=""></span>
                                                                </a>
                                                                    <br />
                                                                    <span className="text-small dz-size" data-dz-size=""></span>
                                                                </div>
                                                                <img alt="Loader" src={this.state.base_url+"assets/images/loader.svg"} className="dz-loading" />
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#" data-dz-remove="">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <button className="btn btn-danger btn-sm dz-remove" data-dz-remove="">
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="progress dz-progress">
                                                            <div className="progress-bar dz-upload" data-dz-uploadprogress=""></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <form className="dropzone dz-clickable" action="http://mediumra.re/dropzone/upload.php">
                                                    <span className="dz-message">Drop files here or click here to upload</span>
                                                </form>
                                                <ul className="list-group list-group-activity dropzone-previews flex-column-reverse list-group-flush list ">
                                                    <li className="list-group-item" data-t="null" data-i="null" data-l="null" data-e="null">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="Peggy Brown" src={this.state.base_url+"assets/images/avatar-1.jpg"} className="avatar filter-by-data-title" data-title="Peggy Brown" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">client-questionnaire</a>
                                                                    <br />
                                                                    <span className="name">48kb Text Doc</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="Harry Xai" src={this.state.base_url+"assets/images/avatar-2.jpg"} className="avatar filter-by-data-title" data-title="Harry Xai" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">moodboard_images</a>
                                                                    <br />
                                                                    <span className="name">748kb ZIP</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-image"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="Ravi Singh" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="Ravi Singh" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">possible-hero-image</a>
                                                                    <br />
                                                                    <span className="name">1.2mb JPEG image</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="Claire Connors" src={this.state.base_url+"assets/images/avatar-3.jpg"} className="avatar filter-by-data-title" data-title="Claire Connors" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">LandingPrototypes</a>
                                                                    <br />
                                                                    <span className="name">415kb Sketch Doc</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="media align-items-center">
                                                            <ul className="avatars list-unstyled">
                                                                <li>
                                                                    <div className="avatar bg-primary">
                                                                        <i className="fas fa-file"></i>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <img alt="David Whittaker" src={this.state.base_url+"assets/images/avatar-4.jpg"} className="avatar filter-by-data-title" data-title="David Whittaker" data-toggle="tooltip" data-filter-by="data-title" />
                                                                </li>
                                                            </ul>
                                                            <div className="media-body d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <a href="#" className="name">Branding-Proforma</a>
                                                                    <br />
                                                                    <span className="name">15kb Text Document</span>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#">Download</a>
                                                                        <a className="dropdown-item" href="#">Share</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item text-danger" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
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

export default MessageChat;