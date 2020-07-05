import React from 'react';
import Tabs from './Tabs';
import dashboard from './dashboard.png';
import books from './books-general-ledger.png';
import invoice from './invoicing.png';
import payments from './payments.webp';
import report from './report-pnl.png';

import './styles.css';

function Fifth() {
  return (
    <div className="container ">
    <div className='k1'>
    <h2 className="section-title">Everything You Need</h2>
    <p className="section-description">Create professional invoices, generate beautiful PDFs and send them to your customers.</p>
    </div>
    
    
    <div className="k">
      <Tabs>
        <div label="Dashboard" className="">
        <img src={dashboard} alt="one"/>
        </div>
        <div label="Invoicing">
        <img src={invoice} alt="one"/>
        </div>
        <div label="Payments">
        <img src={payments} alt="one"/>
        </div>
        <div label="Financial Reports">
        <img src={report} alt="one"/>
        </div>
        <div label="Ledger">
        <img src={books} alt="one"/>
        </div>
      </Tabs>
    </div>
    </div>
    
  );
}

export default Fifth;