import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Hrm.css'

const Hrm = () =>  (
    <div>
      <section className="p-t-0 p-b-30 m-b-15">
        <div className="container padding-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div  style={{ background: '#2B88C4', borderRadius: '10px' }}>
                <center>
               
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689061183/icons8-id-verified-96_he3ozz.png' alt='box-logo' className='icon  pt-15px pb-15px'/>
                </center>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <h1 className="azonixfont m-0 mb-p30">HRM</h1>
              <h4>by Taxpro</h4>
              <p className="text-dark">Inventory Management, Sales Order Management, Purchase Order Management, Barcode Scanning, Reporting and Analytics, Multi-location Inventory Management</p>
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
              <h2 className="azonixfont">EXPLORE our HRM  module</h2>
            </center>

            <div className="row p-t-30 align-items-center">
              <div className="col-md-6" style={{ textAlign: 'justify' }}>
                <p className="text-dark">Introducing TaxPro's HRM (Human Resource Management) Module - the ultimate solution for managing your employee information, payroll, and benefits efficiently. With this powerful module, you can easily streamline your HR operations, ensuring timely processing of employee information and maximizing your workforce productivity.</p>
                <p className="text-dark"><b>Our HRM module includes the following features:</b></p>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Employee Management: Maintain a centralized database of employee information, including personal details, employment history, and performance records.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Payroll Management: Streamline your payroll operations by automating the calculation of salaries, taxes, and other deductions. You can also create custom payroll rules to handle complex payroll scenarios.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Benefits Management: Manage employee benefits, including health insurance, retirement plans, and other perks. You can also track benefit enrollment and eligibility.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>Time and Attendance Management: Track employee time and attendance, including clock-in and clock-out times, break times, and overtime.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>Performance Management: Set goals and track employee performance, including regular performance reviews and feedback</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i>Reporting and Analytics: Generate reports to analyze your HR operations, track employee performance, and identify areas for improvement.</p>
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

export default Hrm;
