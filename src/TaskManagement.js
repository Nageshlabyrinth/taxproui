import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './TaskManagement.css'

const TaskManagement = () =>  (
    <div>
      <section className="p-t-0 p-b-30 m-b-15">
        <div className="container padding-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div  style={{ background: '#2B88C4', borderRadius: '10px' }}>
                <center>
               
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689058605/icons8-to-do-96_hk87sd.png' alt='box-logo' className='icon  pt-15px pb-15px'/>
                </center>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <h1 className="azonixfont m-0 mb-p30">Task Management</h1>
              <h4>by Taxpro</h4>
              <p className="text-dark">Task Assignment, Task Priority, Task Collaboration, Task Tracking, Task Analytics</p>
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
              <h2 className="azonixfont">EXPLORE our task management</h2>
            </center>

            <div className="row p-t-30 align-items-center">
              <div className="col-md-6" style={{ textAlign: 'justify' }}>
                <p className="text-dark">The TaxPro task management module is designed to help businesses efficiently manage their tasks and projects, from assignment to completion. Our software provides a range of features to streamline task workflows, improve collaboration, and increase productivity.</p>
                <p className="text-dark"><b>Our task management module includes the following features:</b></p>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Task Assignment: Assign tasks to team members, set deadlines, and track progress.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Task Priority: Prioritize tasks based on urgency and importance, and set reminders for upcoming deadlines.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Task Collaboration: Collaborate with team members on tasks, share files and comments, and receive notifications for updates.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Task Tracking: Track task completion, monitor progress, and get real-time status updates.</p>
                </div>
                <div style={{ background: '#a2ddb1', padding: '8px', borderRadius: '10px', marginBottom: '10px' }}>
                  <p className="text-dark no-margin"><i className="fas fa-check-circle"></i> Task Analytics: Get real-time insights into your task performance, track key performance indicators (KPIs), and optimize your task workflows.</p>
                </div>
                <p>The TaxPro task management module is designed to help businesses of all sizes and industries efficiently manage their tasks and projects, improve collaboration, and increase productivity. Contact us today to learn more about how our software can help your business.</p>
              </div>
              <div className="col-md-6">
                <img src='https://res.cloudinary.com/dots1s0gu/image/upload/v1689056243/4_w1qhrb.png' alt='logo' className='img p-20px m-15px'/>
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

export default TaskManagement;
