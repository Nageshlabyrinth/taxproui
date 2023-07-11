import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './CustomerResourceManagement.css'

const CustomerResourceManagement = () =>  (
    <div>
      <section className="p-t-0 p-b-30 m-b-15">
        <div className="container padding-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div  style={{ background: '#2B88C4', borderRadius: '10px' }}>
                <center>
               
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689055936/icons8-staff-96_qatwxz.png' alt='box-logo' className='icon  pt-15px pb-15px'/>
                </center>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <h1 className="azonixfont m-0 mb-p30">Customer Resource Management</h1>
              <h4>by Taxpro</h4>
              <p className="text-dark">Lead Management, Opportunity Management, Contact Management, Sales Order Management, Service Management, Customer Analytics.</p>
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
              <h2 className="azonixfont">EXPLORE OUR CRM</h2>
            </center>

            <div className="row p-t-30 align-items-center">
              <div className="col-md-6" style={{ textAlign: 'justify' }}>
                <p className="text-dark">The TaxPro customer resource management (CRM) module is designed to help businesses build and maintain strong relationships with their customers. Our software provides a range of features to streamline the customer lifecycle, from lead generation to customer retention.</p>
                <p className="text-dark"><b>Our CRM module includes the following features:</b></p>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Lead Management: Capture and track leads from multiple sources, assign them to sales reps, and prioritize them based on their level of interest.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Opportunity Management: Convert leads into opportunities, track the progress of each opportunity, and forecast revenue based on the probability of closing</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Contact Management: Manage customer and prospect data, including contact information, communication history, and preferences.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>  Sales Order Management: Manage sales orders, track order status, and fulfill orders.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Service Management: Track customer service requests, assign them to service reps, and track resolution time.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Customer Analytics: Get real-time insights into your customer behavior, track key performance indicators (KPIs), and optimize your customer interactions.</p>
                </div>
              </div>
              <div className="col-md-6">
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689056128/4_iiupkf.png' alt='logo' className='img p-20px m-15px'/>
              </div>  
              <p>The TaxPro CRM module is designed to help businesses of all sizes and industries improve their customer engagement and retention. Contact us today to learn more about how our software can help your business.</p>
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

export default CustomerResourceManagement;
