import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-pages-cropper.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class CropperImage extends Component {
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
                            <h2 className="pageheader-title">Cropper</h2>
                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Cropper</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-9">
                                        {/* <h3>Demo:</h3> */}
                                        <div className="img-container">
                                            <img id="image" src={this.state.base_url+"assets/images/card-img-1.jpg"} alt="Picture" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        {/* <h3>Preview:</h3> */}
                                        <div className="docs-preview clearfix">
                                            <div className="img-preview preview-lg"></div>
                                            <div className="img-preview preview-md"></div>
                                            <div className="img-preview preview-sm"></div>
                                            <div className="img-preview preview-xs"></div>
                                        </div>
                                        {/* <h3>Data:</h3> */}
                                        <div className="docs-data">
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataX">X</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataX" placeholder="x" />
                                                <span className="input-group-append">
                                            <span className="input-group-text">px</span>
                                                </span>
                                            </div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataY">Y</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataY" placeholder="y" />
                                                <span className="input-group-append">
                                            <span className="input-group-text">px</span>
                                                </span>
                                            </div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataWidth">Width</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataWidth" placeholder="width" />
                                                <span className="input-group-append">
                                            <span className="input-group-text">px</span>
                                                </span>
                                            </div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataHeight">Height</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataHeight" placeholder="height" />
                                                <span className="input-group-append">
                                            <span className="input-group-text">px</span>
                                                </span>
                                            </div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataRotate">Rotate</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataRotate" placeholder="rotate" />
                                                <span className="input-group-append">
                                            <span className="input-group-text">deg</span>
                                                </span>
                                            </div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataScaleX">ScaleX</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" />
                                            </div>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="dataScaleY">ScaleY</label>
                                            </span>
                                                <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 docs-buttons">
                        {/* <h3>Toolbar:</h3> */}
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="setDragMode" data-option="move" title="Move">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)">
                        <span className="fas fa-arrows-alt"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="setDragMode" data-option="crop" title="Crop">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)">
                        <span className="fa fa-crop"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="zoom" data-option="0.1" title="Zoom In">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;zoom&quot;, 0.1)">
                        <span className="fa fa-search-plus"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="zoom" data-option="-0.1" title="Zoom Out">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;zoom&quot;, -0.1)">
                        <span className="fa fa-search-minus"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="move" data-option="-10" data-second-option="0" title="Move Left">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, -10, 0)">
                        <span className="fa fa-arrow-left"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="move" data-option="10" data-second-option="0" title="Move Right">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 10, 0)">
                        <span className="fa fa-arrow-right"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="move" data-option="0" data-second-option="-10" title="Move Up">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 0, -10)">
                        <span className="fa fa-arrow-up"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="move" data-option="0" data-second-option="10" title="Move Down">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;move&quot;, 0, 10)">
                        <span className="fa fa-arrow-down"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="rotate" data-option="-45" title="Rotate Left">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;rotate&quot;, -45)">
                        <span className="fas fa-undo"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="rotate" data-option="45" title="Rotate Right">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;rotate&quot;, 45)">
                        <span className="fa fa-redo"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="scaleX" data-option="-1" title="Flip Horizontal">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;scaleX&quot;, -1)">
                        <span className="fa fa-arrows-alt-h"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="scaleY" data-option="-1" title="Flip Vertical">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;scaleY&quot;, -1)">
                        <span className="fa fa-arrows-alt-v"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="crop" title="Crop">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;crop&quot;)">
                        <span className="fa fa-check"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="clear" title="Clear">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;clear&quot;)">
                        <span className="fas fa-trash"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="disable" title="Disable">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;disable&quot;)">
                        <span className="fa fa-lock"></span>
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="enable" title="Enable">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;enable&quot;)">
                        <span className="fa fa-unlock"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-light" data-method="reset" title="Reset">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;reset&quot;)">
                        <span className="fas fa-undo-alt"></span>
                                </span>
                            </button>
                            <label className="btn btn-outline-light btn-upload m-b-0" htmlFor="inputImage" title="Upload image file">
                                <input type="file" className="sr-only" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="Import image with Blob URLs">
                        <span className="fa fa-upload"></span>
                                </span>
                            </label>
                            <button type="button" className="btn btn-outline-light" data-method="destroy" title="Destroy">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;destroy&quot;)">
                        <span className="fa fa-power-off"></span>
                                </span>
                            </button>
                        </div>
                        <div className="btn-group btn-group-crop">
                            <button type="button" className="btn btn-outline-light" data-method="getCroppedCanvas" data-option="{ &quot;maxWidth&quot;: 4096, &quot;maxHeight&quot;: 4096 }">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCroppedCanvas&quot;, { maxWidth: 4096, maxHeight: 4096 })">
                        Get Cropped Canvas
                        </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })">
                        160&times;90
                        </span>
                            </button>
                            <button type="button" className="btn btn-outline-light" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })">
                        320&times;180
                        </span>
                            </button>
                        </div>
                        <div className="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" role="dialog" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="getCroppedCanvasTitle">Cropped</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body"></div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-light" data-dismiss="modal">Close</button>
                                        <a className="btn btn-outline-light" id="download" href="#" download="cropped.html">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-light" data-method="getData" data-option data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getData&quot;)">
                        Get Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="setData" data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setData&quot;, data)">
                        Set Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="getContainerData" data-option data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getContainerData&quot;)">
                        Get Container Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="getImageData" data-option data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getImageData&quot;)">
                        Get Image Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="getCanvasData" data-option data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCanvasData&quot;)">
                        Get Canvas Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="setCanvasData" data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setCanvasData&quot;, data)">
                        Set Canvas Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="getCropBoxData" data-option data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;getCropBoxData&quot;)">
                        Get Crop Box Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="setCropBoxData" data-target="#putData">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="$().cropper(&quot;setCropBoxData&quot;, data)">
                        Set Crop Box Data
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="moveTo" data-option="0">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="cropper.moveTo(0)">
                        Move to [0,0]
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="zoomTo" data-option="1">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="cropper.zoomTo(1)">
                        Zoom to 100%
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="rotateTo" data-option="180">
                            <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="cropper.rotateTo(180)">
                        Rotate 180°
                    </span>
                        </button>
                        <button type="button" className="btn btn-outline-light" data-method="scale" data-option="-2" data-second-option="-1">
                            <span className="docs-tooltip" data-toggle="tooltip" title="cropper.scale(-2, -1)">
                        Scale (-2, -1)
                    </span>
                        </button>
                        <textarea className="form-control" id="putData" rows="1" placeholder="Get data to here or set data with this value"></textarea>
                    </div>
                    <div className="col-md-3 docs-toggles">
                        {/* <h3>Toggles:</h3> */}
                        <div className="btn-group d-flex flex-nowrap" data-toggle="buttons">
                            <label className="btn btn-outline-light active">
                                <input type="radio" className="sr-only" id="aspectRatio0" name="aspectRatio" defaultValue="1.7777777777777777" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 16 / 9">
                        16:9
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="aspectRatio1" name="aspectRatio" defaultValue="1.3333333333333333" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 4 / 3">
                        4:3
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="aspectRatio2" name="aspectRatio" defaultValue="1" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 1 / 1">
                        1:1
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="aspectRatio3" name="aspectRatio" defaultValue="0.6666666666666666" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: 2 / 3">
                        2:3
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="aspectRatio4" name="aspectRatio" defaultValue="NaN" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="aspectRatio: NaN">
                        Free
                        </span>
                            </label>
                        </div>
                        <div className="btn-group d-flex flex-nowrap" data-toggle="buttons">
                            <label className="btn btn-outline-light active">
                                <input type="radio" className="sr-only" id="viewMode0" name="viewMode" defaultValue="0" defaultChecked={true} />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 0">
                        VM0
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="viewMode1" name="viewMode" defaultValue="1" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 1">
                        VM1
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="viewMode2" name="viewMode" defaultValue="2" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 2">
                        VM2
                        </span>
                            </label>
                            <label className="btn btn-outline-light">
                                <input type="radio" className="sr-only" id="viewMode3" name="viewMode" defaultValue="3" />
                                <span className="docs-tooltip" data-toggle="tooltip" data-animation="false" title="View Mode 3">
                        VM3
                        </span>
                            </label>
                        </div>
                        <div className="dropdown dropup docs-options">
                            <button type="button" className="btn btn-outline-light btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true">
                                Toggle Options
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="toggleOptions" role="menu">
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="responsive" type="checkbox" name="responsive" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="responsive">responsive</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="restore" type="checkbox" name="restore" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="restore">restore</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="checkCrossOrigin" type="checkbox" name="checkCrossOrigin" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="checkCrossOrigin">checkCrossOrigin</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="checkOrientation" type="checkbox" name="checkOrientation" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="checkOrientation">checkOrientation</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="modal" type="checkbox" name="modal" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="modal">modal</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="guides" type="checkbox" name="guides" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="guides">guides</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="center" type="checkbox" name="center" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="center">center</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="highlight" type="checkbox" name="highlight" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="highlight">highlight</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="background" type="checkbox" name="background" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="background">background</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="autoCrop" type="checkbox" name="autoCrop" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="autoCrop">autoCrop</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="movable" type="checkbox" name="movable" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="movable">movable</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="rotatable" type="checkbox" name="rotatable" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="rotatable">rotatable</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="scalable" type="checkbox" name="scalable" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="scalable">scalable</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="zoomable" type="checkbox" name="zoomable" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="zoomable">zoomable</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="zoomOnTouch" type="checkbox" name="zoomOnTouch" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="zoomOnTouch">zoomOnTouch</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="zoomOnWheel" type="checkbox" name="zoomOnWheel" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="zoomOnWheel">zoomOnWheel</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="cropBoxMovable" type="checkbox" name="cropBoxMovable" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="cropBoxMovable">cropBoxMovable</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="cropBoxResizable" type="checkbox" name="cropBoxResizable" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="cropBoxResizable">cropBoxResizable</label>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="form-check">
                                        <input className="form-check-input" id="toggleDragModeOnDblclick" type="checkbox" name="toggleDragModeOnDblclick" defaultChecked={true} />
                                        <label className="form-check-label" htmlFor="toggleDragModeOnDblclick">toggleDragModeOnDblclick</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default CropperImage;