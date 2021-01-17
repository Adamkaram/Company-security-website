// import React from 'react'

const WepApp = () => {
  return (
    <section className="Web-Application skills">
      <div className="max-width">
        <h2 className="title">Web Application Testing </h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">
              Why You Need Web Application Penetration Testing
            </div>
            <p className="text-web">
              Businesses rely on web applications more than they ever have in
              the past to conduct daily business. That includes customer-facing
              applications that allow them to perform activities like making
              purchases or transferring money from one account to another. Many
              companies also depend on internal web products to conduct
              day-to-day business. Developers may use open source components and
              plugins when building web apps, opening the door to possible
              security risks.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="text">Threats to Web Applications</div>
              <div className="info">
                <i className="fas fa-bug"></i>
                <span className="Red-color">SQL Injection </span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <i className="fas fa-bug"></i>
                <span className="Red-color">Cross-Site Scripting (XSS)</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <i className="fas fa-bug"></i>
                <span className="Red-color">
                  Broken Authentication and Poor Session Management
                </span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <i className="fas fa-bug"></i>
                <span className="Red-color">Security Misconfiguration </span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <i className="fas fa-bug"></i>
                <span className="Red-color">
                  XML External Entities Injection (XXE){" "}
                </span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <i className="fas fa-bug"></i>
                <span className="Red-color">Broken Access Controls </span>
              </div>
              <div className="line php"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WepApp;
