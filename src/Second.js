import React from 'react';
import frappe from './frappebooks-hero.png';
import './Second.css';

function Second(){
  return(
    <div className="g">
    <div className="section section-padding-top section-padding-bottom">
      <div className="container">
        <div className="hero-with-right-image row no-gutters flex-nowrap">
           <div className="hero-content col-12 col-md-6">
               <div><h1> Free, Modern Desktop Accounting</h1>
               <p className="hero-subtitle">Simple, well designed, desktop accounting software for freelancers and small businesses. Free and Open Source.</p>
               <div>
            <a className="btn btn-lg btn-primary" href="/">Download</a>
            <a className="btn btn-lg btn-light" href="/">GitHub</a>
            </div>
    </div>
    </div>
    <img alt="b" className=" col-xs-0 image-with-blur hero-image image-loaded" height="600" src={frappe} width="600"/>
      </div>
      </div>
      </div>
      </div>
  );
}
export default Second;