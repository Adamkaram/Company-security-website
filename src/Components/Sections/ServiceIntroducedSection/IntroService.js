// import React from 'react'

const IntroService = () => {
  return (
    <>
      <section className="skills  Network-area">
        <div className="coulmn-left-img lines-img"></div>
        <div className="max-width">
          <h2 className="text-title text-red">Network Penetration Testing</h2>
          <div className="skills-content">
            <div className="column left column-left">
              <p className="text-web">
                <h2 className="contentNumber">
                  <span className="Number">01</span>
                </h2>
                <div className="text-title">Understanding Risk Levels</div>
                <h2 className="text text-Network">
                  {" "}
                  Some security weaknesses could expose sensitive information,
                  which can result in violating compliance requirements, bad
                  press, and of course, the loss of customer trust. On the other
                  hand, exploitable vulnerabilities that merely lead to losing
                  next month’s cafeteria menu may not threaten that much harm to
                  a company. It’s essential to determine the risk levels for
                  various systems to allocate resources accordingly.
                </h2>
              </p>
            </div>
            <div className="column right ">
              <img className="world-Network" src="images/world-Network.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="skills  Network-area">
        <div className="coulmn-left-img lines-img"></div>
        <div className="max-width">
          <div className="skills-content">
            <div className="column right ">
              <img className="world-Network" src="images/lock.png" />
            </div>
            <div className="column left column-left">
              <p className="text-web">
                <h2 className="contentNumber">
                  <span className="Number">02</span>
                </h2>
                <div className="text-title">Vulnerability Assessment</div>
                <h2 className="text text-Network">
                  {" "}
                  Whether you’re a small, medium or a large company, you might
                  appear on a cybercriminal radar. You’ve probably run a
                  vulnerability scan and gained some input on your security
                  status. But do you know what is truly at stake, if found
                  exposures were used by a hacker? If the answer is not a
                  forceful “yes”, maybe it’s about time to think of a
                  vulnerability assessment.
                </h2>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills  Network-area">
        <div className="coulmn-left-img lines-img"> </div>
        <div className="max-width">
          <div className="skills-content">
            <div className="column left column-left">
              <p className="text-web">
                <h2 className="contentNumber">
                  <span className="Number">03</span>
                </h2>
                <div className="text-title">
                  Mobile applications Penetration{" "}
                </div>
                <h2 className="text text-Network">
                  {" "}
                  LorienSec offers a comprehensive mobile app penetration
                  testing service designed to help your organization prevent a
                  potentially disastrous data breach. From easy to spot
                  encryption defects, to complex logical errors in your app,
                  LorienSec is your trusted partner for “black box” mobile app
                  security reviews. Hackers are increasingly targeting mobile
                  apps and their associated APIs. Your organization must take
                  the security of its mobile apps seriously or risk exposing
                  sensitive company data. Contact VeraSafe today for an estimate
                  for your next manual mobile app pen test.
                </h2>
              </p>
            </div>
            <div className="column right ">
              <img className="world-Network" src="images/image-5@2x.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="skills  Network-area">
        <div className="coulmn-left-img lines-img"> </div>
        <div className="max-width">
          <div className="skills-content">
            <div className="column right ">
              <img className="world-Network" src="images/thief.png" />
            </div>
            <div className="column left column-left">
              <p className="text-web">
                <h2 className="contentNumber">
                  <span className="Number">04</span>
                </h2>
                <div className="text-title">Physical Penetration Testing</div>
                <h2 className="text text-Network">
                  Physical penetration testing is a simulated intrusion attempt
                  that is designed to identify weaknesses in your business’
                  physical security. This is different from our other types of
                  testing as the target is not a cyber one, instead, it is your
                  physical location. Successful and partially successful
                  attempts to break into your premises will highlight
                  vulnerabilities in your physical security which could be
                  exploited by criminals. This is important information which is
                  key to improving your security.
                </h2>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroService;
