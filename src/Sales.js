import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './Sales.css'
const Sales = () =>  (
    <div>
      <section className="p-t-0 p-b-30 m-b-15">
        <div className="container padding-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className='dollar-icon' style={{ background: '#2B88C4', borderRadius: '10px' }}>
                <center>
               
                <h1 className='pt-15px pb-15px'>$</h1>
                </center>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <h1 className="azonixfont m-0 mb-p30">Sales</h1>
              <h4>by Taxpro</h4>
              <p className="text-dark">Lead Management, Opportunity Management, Quotation Management, Sales Order Management, Sales Analytics.</p>
              <span>
                <button href="#" className="btn btn-primary">Book a demo</button>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-t-30 p-b-30">
        <div className="container">
          <div className="">
            <center>
              <h2 className="azonixfont">EXPLORE our sales module</h2>
            </center>

            <div className="row p-t-30 align-items-center">
              <div className="col-md-6" style={{ textAlign: 'justify' }}>
                <p className="text-dark">The TaxPro sales module is designed to help businesses streamline their sales processes, from lead generation to order fulfillment. With our software, you can easily manage your sales pipeline, track customer interactions, and close deals faster.</p>
                <p className="text-dark"><b>Our sales module includes the following features:</b></p>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Lead Management: Easily capture and track leads from multiple sources, assign them to sales reps, and prioritize them based on their level of interest.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Opportunity Management: Convert leads into opportunities, track the progress of each opportunity, and forecast revenue based on the probability of closing.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Quotation Management: Create and send professional-looking quotations to customers, track their status, and convert them into sales orders.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Sales Order Management: Manage your sales orders, track inventory levels, and create delivery notes and invoices.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Sales Analytics: Get real-time insights into your sales performance, track key performance indicators (KPIs), and make data-driven decisions to improve your sales processes</p>
                </div>
              </div>
              <div className="col-md-6">
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1688982299/1_axujzw.png' alt='logo' className='img p-20px m-15px'/>
              </div>  
            </div>
         </div>
        </div>
      </section>
      <section>
        <div className='contactussection p-15 m-0 pt-15 pb-15'>
            <div className='p-15 m-15'>
                <h1>Ready to start?<span className='heading'>Get taxpro today.</span></h1>
            </div>
            <button className='button btn btn-primary p-2 m-0'>Contact us</button>
        </div>
      </section>
    </div>
  );

export default Sales;
