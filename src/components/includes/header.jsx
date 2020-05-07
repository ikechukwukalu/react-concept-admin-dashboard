import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import { UncontrolledCollapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler, Collapse } from 'reactstrap';


import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname,
      isOpen: false,
      isOpenSideNav: false
    }
  }

  
toggle = () => this.setState({isOpen: !this.state.isOpen});
toggleSideNav = () => this.setState({isOpenSideNav: !this.state.isOpenSideNav});
  
  render() {
    return (
      <Fragment>
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <Link className="navbar-brand" to="/ecommerce/dashboard">Concept</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item">
                            <div id="custom-search" className="top-search-bar">
                                <input className="form-control" type="text" placeholder="Search.." />
                            </div>
                        </li>
                        <UncontrolledDropdown className="nav-item notification" tag="li">
                            <DropdownToggle tag="a" id="navbarDropdownMenuLink1"  className="nav-link nav-icons" aria-haspopup={true} aria-expanded="false" >
                                <i className="fas fa-fw fa-bell"></i> <span className="indicator"></span>
                            </DropdownToggle>
                            <DropdownMenu tag="ul" className=" notification-dropdown" right>
                                <li>
                                    <PerfectScrollbar className="scrollbar" style={{height: '288px'}}>
                                        <div className="notification-title">Notification</div>
                                        <div className="notification-list">
                                            <div className="list-group">
                                                <div className="list-group-item list-group-item-action active">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img"><img src={this.state.base_url+"assets/images/avatar-2.jpg"} alt="" className="user-avatar-md rounded-circle" /></div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                                            <div className="notification-date">2 min ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img"><img src={this.state.base_url+"assets/images/avatar-3.jpg"} alt="" className="user-avatar-md rounded-circle" /></div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">John Abraham </span>is now following you
                                                            <div className="notification-date">2 days ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img"><img src={this.state.base_url+"assets/images/avatar-4.jpg"} alt="" className="user-avatar-md rounded-circle" /></div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                                                            <div className="notification-date">2 min ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img"><img src={this.state.base_url+"assets/images/avatar-5.jpg"} alt="" className="user-avatar-md rounded-circle" /></div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                                                            <div className="notification-date">2 min ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </PerfectScrollbar>
                                </li>
                                <li>
                                    <div className="list-footer"> <Link to="/ecommerce/dashboard">View all notifications</Link></div>
                                </li>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="nav-item connection" tag="li">
                            <DropdownToggle tag="a" className="nav-link" aria-haspopup={true} aria-expanded="false">
                                <i className="fas fa-fw fa-th"></i>
                            </DropdownToggle>
                            <DropdownMenu tag="ul" className="connection-dropdown" right>
                                <li className="connection-list">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <Link to="/ecommerce/dashboard" className="connection-item"><img src={this.state.base_url+"assets/images/github.png"} alt="" /> <span>Github</span></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <Link to="/ecommerce/dashboard" className="connection-item"><img src={this.state.base_url+"assets/images/dribbble.png"} alt="" /> <span>Dribbble</span></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <Link to="/ecommerce/dashboard" className="connection-item"><img src={this.state.base_url+"assets/images/dropbox.png"} alt="" /> <span>Dropbox</span></Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <Link to="/ecommerce/dashboard" className="connection-item"><img src={this.state.base_url+"assets/images/bitbucket.png"} alt="" /> <span>Bitbucket</span></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <Link to="/ecommerce/dashboard" className="connection-item"><img src={this.state.base_url+"assets/images/mail_chimp.png"} alt="" /><span>Mail chimp</span></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <Link to="/ecommerce/dashboard" className="connection-item"><img src={this.state.base_url+"assets/images/slack.png"} alt="" /> <span>Slack</span></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="conntection-footer"><Link to="/ecommerce/dashboard">More</Link></div>
                                </li>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="nav-item nav-user" tag="li">
                            <DropdownToggle tag="a" className="nav-link nav-user-img" id="navbarDropdownMenuLink2" aria-haspopup={true} aria-expanded="false">
                                <img src={this.state.base_url+"assets/images/avatar-1.jpg"} alt="" className="user-avatar-md rounded-circle" />
                            </DropdownToggle>
                            <DropdownMenu tag="div" className="nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2" right>
                                <div className="nav-user-info">
                                    <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                                    <span className="status"></span><span className="ml-2">Available</span>
                                </div>
                                <Link className="dropdown-item" to="/ecommerce/dashboard"><i className="fas fa-user mr-2"></i>Account</Link>
                                <Link className="dropdown-item" to="/ecommerce/dashboard"><i className="fas fa-cog mr-2"></i>Setting</Link>
                                <Link className="dropdown-item" to="/ecommerce/dashboard"><i className="fas fa-power-off mr-2"></i>Logout</Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </ul>
                </Collapse>
            </nav>
        </div>
        
        <div className="nav-left-sidebar sidebar-dark">
          <PerfectScrollbar>
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="d-xl-none d-lg-none" to="/ecommerce/dashboard">Dashboard</Link>
                    <NavbarToggler onClick={this.toggleSideNav} />
                    <Collapse isOpen={this.state.isOpenSideNav} navbar>
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#" id="submenu-1"><i className="fa fa-fw fa-user-circle"></i>Dashboard <span className="badge badge-success">6</span></a>
                                    <UncontrolledCollapse toggler="#submenu-1" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" id="submenu-1-1">E-Commerce</a>
                                                <UncontrolledCollapse toggler="#submenu-1-1" className="submenu">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="index" to="/ecommerce/dashboard">E Commerce Dashboard</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="ecommerce-product" to="/ecommerce/product">Product List</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="ecommerce-product-single" to="/ecommerce/product-single">Product Single</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="ecommerce-product-checkout" to="/ecommerce/product-checkout">Product Checkout</Link>
                                                        </li>
                                                    </ul>
                                                </UncontrolledCollapse>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="dashboard-finance" to="/finance/dashboard">Finance</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="dashboard-sales" to="/sales/dashboard">Sales</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" id="submenu-1-2">Influencer</a>
                                                <UncontrolledCollapse toggler="#submenu-1-2" className="submenu">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="dashboard-influencer" to="/influencer/dashboard">Influencer</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="influencer-finder" to="/influencer/finder">Influencer Finder</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" id="influencer-profile" to="/influencer/profile">Influencer Profile</Link>
                                                        </li>
                                                    </ul>
                                                </UncontrolledCollapse>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-2" ><i className="fa fa-fw fa-rocket"></i>UI Elements</a>
                                    <UncontrolledCollapse toggler="#submenu-2" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-cards" to="/elements/cards">Cards <span className="badge badge-secondary">New</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-general" to="/elements/general">General</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-carousel" to="/elements/carousel">Carousel</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-listgroup" to="/elements/listgroup">List Group</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-typography" to="/elements/typography">Typography</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-accordions" to="/elements/accordions">Accordions</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements-tabs" to="/elements/tabs">Tabs</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-3" ><i className="fas fa-fw fa-chart-pie"></i>Chart</a>
                                    <UncontrolledCollapse toggler="#submenu-3" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="c3" to="/charts/c3">C3 Charts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="chartist" to="/charts/chartist">Chartist Charts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="charts" to="/charts/chart">Chart</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="morris" to="/charts/morris">Morris</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="sparkline" to="/charts/sparkline">Sparkline</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="gauge" to="/charts/gauge">Guage</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#" id="submenu-4" ><i className="fab fa-fw fa-wpforms"></i>Forms</a>
                                    <UncontrolledCollapse toggler="#submenu-4" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="elements" to="/forms/elements">Form Elements</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="validation" to="/forms/validation">Parsely Validations</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="multiselect" to="/forms/multiselect">Multiselect</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="datepicker" to="/forms/datepicker">Date Picker</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="bootstrap-select" to="/forms/bootstrap-select">Bootstrap Select</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-5" ><i className="fas fa-fw fa-table"></i>Tables</a>
                                    <UncontrolledCollapse toggler="#submenu-5" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="table" to="/tables/general">General Tables</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="tables" to="/tables/datatables">Data Tables</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-divider">
                                    Features
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-6" ><i className="fas fa-fw fa-file"></i>Pages </a>
                                    <UncontrolledCollapse toggler="#submenu-6" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="invoice" to="/pages/invoice">Invoice</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="page" to="/pages/blank-page">Blank Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="header" to="/pages/blank-page-header">Blank Page Header</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/external/login">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/external/404">404 page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/external/sign-up">Sign up Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/external/forgot-password">Forgot Password</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="pricing" to="/pages/pricing">Pricing Tables</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="timeline" to="/pages/timeline">Timeline</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="calendar-page" to="/pages/calendar">Calendar</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="lists" to="/pages/sortable-nestable-lists">Sortable/Nestable List</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="widgets" to="/pages/widgets">Widgets</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="object" to="/pages/media-object">Media Objects</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="cropper" to="/pages/cropper-image">Cropper</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="picker" to="/pages/color-picker">Color Picker</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-7" ><i className="fas fa-fw fa-inbox"></i>Apps <span className="badge badge-secondary">New</span></a>
                                    <UncontrolledCollapse toggler="#submenu-7" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="inbox" to="/apps/inbox">Inbox</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="details" to="/apps/email-details">Email Detail</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="compose" to="/apps/email-compose">Email Compose</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="chat" to="/apps/message-chat">Message Chat</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-8" ><i className="fas fa-fw fa-columns"></i>Icons</a>
                                    <UncontrolledCollapse toggler="#submenu-8" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="fontawesome" to="/icons/fontawesome">FontAwesome Icons</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="material" to="/icons/material">Material Icons</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="lineicon" to="/icons/simple-lineicon">Simpleline Icon</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="themify" to="/icons/themify">Themify Icon</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="flag" to="/icons/flag">Flag Icons</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="weather" to="/icons/weather">Weather Icon</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-9" ><i className="fas fa-fw fa-map-marker-alt"></i>Maps</a>
                                    <UncontrolledCollapse toggler="#submenu-9" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" id="google" to="/maps/google">Google Maps</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="vector" to="/maps/vector">Vector Maps</Link>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="submenu-10" ><i className="fas fa-f fa-folder"></i>Menu Level</a>
                                    <UncontrolledCollapse toggler="#submenu-10" className="submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Level 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" id="submenu-11" >Level 2</a>
                                                <UncontrolledCollapse toggler="#submenu-11" className="submenu">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Level 1</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Level 2</a>
                                                        </li>
                                                    </ul>
                                                </UncontrolledCollapse>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Level 3</a>
                                            </li>
                                        </ul>
                                    </UncontrolledCollapse>
                                </li>
                            </ul>
                    </Collapse>
                </nav>
            </div>
          </PerfectScrollbar>
        </div>
      </Fragment>
    );
  }
}

export default Header;
