// import React from 'react'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Our services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-bug"></i>
              <div className="text">Apps Design</div>
              <p>
                Identify physical, hardware, software and human vulnerabilities
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-award"></i>
              <div className="text">Knowing Risk</div>
              <p>
                Obtain a more realistic understanding of risk for your
                organization
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-tools"></i>
              <div className="text">Fix vulnerabilities</div>
              <p>Help address and fix all identified security weaknesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
