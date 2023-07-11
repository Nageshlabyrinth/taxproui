import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Accounting&Finance.css'

const AccountingFinance = () =>  (
    <div>
      <section className="p-t-0 p-b-30 m-b-15">
        <div className="container padding-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div  style={{ background: '#2B88C4', borderRadius: '10px' }}>
                <center>
               
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689056715/payment_ewbmby.png' alt='box-logo' className='icon  pt-15px pb-15px'/>
                </center>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <h1 className="azonixfont m-0 mb-p30">Accounting & Finance Module</h1>
              <h4>by Taxpro</h4>
              <p className="text-dark">General Ledger, Accounts Receivable, Accounts Payable, Bank Reconciliation, Financial Reporting, Tax Management.</p>
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
              <h2 className="azonixfont">EXPLORE our accounting module</h2>
            </center>

            <div className="row p-t-30 align-items-center">
              <div className="col-md-6" style={{ textAlign: 'justify' }}>
                <p className="text-dark">The TaxPro accounts and finance module is a comprehensive solution for managing your financial operations. Our software offers a range of features to help you streamline your accounting processes, track your financial performance, and make informed business decisions.</p>
                <p className="text-dark"><b>Our accounts and finance module includes the following features:</b></p>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> General Ledger: Manage your company's financial transactions, track income and expenses, and generate financial statements.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Accounts Receivable: Track customer invoices, generate statements, and manage collections.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Accounts Payable: Manage vendor invoices, track payments, and reconcile accounts.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>Bank Reconciliation: Reconcile your bank accounts with your financial records, identify discrepancies, and correct errors.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Financial Reporting: Generate customizable financial reports, including balance sheets, income statements, cash flow statements, and more.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>Tax Management: Calculate and track taxes, generate tax reports, and file tax returns.</p>
                </div>
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

export default AccountingFinance;
