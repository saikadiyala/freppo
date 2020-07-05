import React from 'react';
import frappe from './frappe-team.webp';
import './Seventh.css';


function Seventh(){
  return(
    <div className="bg-light">
   <div className="section section-padding-top section-padding-bottom ">
       <div className="container">
       <h2 className="section-title j">From the Team Behind ERPNext</h2>
     <p className="section-description p">We have been building business software for over a decade now. Learning from our mistakes and picking the best parts of our flagship product ERPNext, we came up with a simple app that does one thing well, Accounting.</p>
        <img alt="Frappe Team" className="section-image" src={frappe}/>
            </div>
            </div>
   
    </div>
    

  );
}
export default Seventh;