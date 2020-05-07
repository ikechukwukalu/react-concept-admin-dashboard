import React, { Component } from 'react';
import { BrowserRouter as Router  } from "react-router-dom";
import './App.css';
import Components from './components/index.jsx';
import ScrollToTop from './scroll.js';


class App extends Component {
  constructor() {
      super();
      this.state = {
        base_url: 'http://localhost/concept/', // For production - Change to base directory folder name Eg. https://localhost/basename/ 
        api_url: '', // The api url
        basename: 'concept'
      }
  }

  render() {
    return (
        <Router basename={'/concept'}> {/* For production - Change to base directory folder name Eg. https://localhost/basename/  */}
          <ScrollToTop>
            <Components base_url={this.state.base_url} api_url={this.state.api_url} basename={this.state.basename.trim().replace("/", "")} />
          </ScrollToTop>
        </Router>
    );
  }
}

export default App;
