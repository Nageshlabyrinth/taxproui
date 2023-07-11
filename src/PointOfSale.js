import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './PointOfSales.css'

const PointOfSale = () =>  (
    <div>
      <section className="p-t-0 p-b-30 m-b-15">
        <div className="container padding-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div  style={{ background: '#2B88C4', borderRadius: '10px' }}>
                <center>
               
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689058017/point-of-sale_asvv4o.png' alt='box-logo' className='icon  pt-15px pb-15px'/>
                </center>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <h1 className="azonixfont m-0 mb-p30">Point Of Sale</h1>
              <h4>by Taxpro</h4>
              <p className="text-dark">Product Catalog, Sales Order Management, Payment Processing, Customer Relationship Management, Inventory Management, Sales Analytics.</p>
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
              <h2 className="azonixfont">EXPLORE our Point of sale module</h2>
            </center>

            <div className="row p-t-30 align-items-center">
              <div className="col-md-6" style={{ textAlign: 'justify' }}>
                <p className="text-dark">The TaxPro point of sale (POS) module is designed to help businesses efficiently manage their retail operations, from product sales to customer transactions. Our software provides a range of features to streamline the sales process, improve customer satisfaction, and increase sales revenue.</p>
                <p className="text-dark"><b>Our POS module includes the following features:</b></p>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Product Catalog: Create and manage product catalogs, including product descriptions, pricing, and images.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Sales Order Management: Manage sales orders, track order status, and fulfill orders.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Payment Processing: Accept multiple payment methods, including cash, credit/debit cards, and mobile payments.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>Customer Relationship Management: Manage customer and prospect data, including contact information, communication history, and preferences.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Inventory Management: Track inventory levels, manage stock levels, and generate inventory reports.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>TSales Analytics: Get real-time insights into your sales performance, track key performance indicators (KPIs), and optimize your sales operations.</p>
                </div>
                <p>The TaxPro point of sale module is designed to help businesses of all sizes and industries efficiently manage their retail operations, increase customer satisfaction, and grow sales revenue. Contact us today to learn more about how our software can help your business.</p>
              </div>
              <div className="col-md-6">
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689056128/4_iiupkf.png' alt='logo' className='img p-20px m-15px'/>
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

export default PointOfSale;
