import React, { Component } from 'react'; 
import {Helmet} from "react-helmet"; 

class Scripts extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { base_url: this.props.base_url } 
    } 
    render() {
        return (
            <Helmet> 
                <script src={this.state.base_url+'assets/js/vendors-chart-c3.js'}></script> 
            </Helmet>  
        ); 
    } 
} 
export default Scripts;