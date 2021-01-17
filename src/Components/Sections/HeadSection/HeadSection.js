// import React from 'react'

const HeadSection = ()  => {
    return (
      <section className="home" id="home">
        <video loop autoPlay muted id="myVideo">
          <source src={"images/entersoft_bannervideo.mp4"} type="video/mp4" />
        </video>
        <div className="max-width Home-v">
          <div className="home-content">
            <div className="text-2">
              Red teaming <br /> operations
            </div>
            <div className="text-1">
              We offer a range of cybersecurity <br /> services that help you
              preventand <br /> respond to evolving threats
            </div>
            <div className="text-3">
              <span className="typing"></span>
            </div>
            <a href="#">Contact US</a>
          </div>
        </div>
      </section>
    );
}


export default HeadSection;