import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class EmailDetails extends Component {
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
            <div className="container-fluid">
                
                    <aside className="page-aside">
                        <div className="aside-content">
                            <div className="aside-header">
                                <button className="navbar-toggle" data-target=".aside-nav" data-toggle="collapse" type="button"><span className="icon"><i className="fas fa-caret-down"></i></span></button><span className="title">Mail Service</span>
                                <p className="description">Service description</p>
                            </div>
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
                                <div className="aside-compose"><a className="btn btn-lg btn-primary btn-block" href="#">Compose Email</a></div>
                            </div>
                        </div>
                    </aside>
                    <div className="main-content container-fluid p-0">
                        <div className="email-head">
                            <div className="email-head-subject">
                                <div className="title"><a className="active" href="#"><span className="icon"><i className="fas fa-star"></i></span></a> <span>Development Files</span>
                                    <div className="icons"><a href="#" className="icon"><i className="fas fa-reply"></i></a><a href="#" className="icon"><i className="fas fa-print"></i></a><a href="#" className="icon"><i className="fas fa-trash"></i></a></div>
                                </div>
                            </div>
                            <div className="email-head-sender">
                                <div className="date">August 23, 3:37</div>
                                <div className="avatar"><img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="Avatar" className="rounded-circle user-avatar-md" /></div>
                                <div className="sender"><a href="#">Justine Myranda</a> to <a href="#">me</a>
                                    <div className="actions"><a className="icon toggle-dropdown" href="#" data-toggle="dropdown"><i className="fas fa-caret-down"></i></a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" href="#">Mark as read</a><a className="dropdown-item" href="#">Mark as unread</a><a className="dropdown-item" href="#">Spam</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="email-body">
                            <p>Hello,</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                            <p><strong>Regards</strong>,
                                <br /> Justine Myranda</p>
                        </div>
                        <div className="email-attachments">
                            <div className="title">Attachments <span>(2 files, 16,24 KB)</span></div>
                            <ul>
                                <li><a href="#"><span className="icon mdi mdi-attachment-alt"></span> new-release.zip <span>(5.12 KB)</span></a></li>
                                <li><a href="#"><span className="icon mdi mdi-attachment-alt"></span> guidelines.pdf <span>(11.3 MB)</span></a></li>
                            </ul>
                        </div>
                    </div>
                
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default EmailDetails;