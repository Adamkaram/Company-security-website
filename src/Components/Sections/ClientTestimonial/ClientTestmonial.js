// import React from 'react'

const ClientTestmonial = () => {

    const imageClick = (e) => {
        const d = document.querySelectorAll(".testimonial-pics img");
        // d.classList.remove("active");
        d.forEach(el => el.classList.remove("active"));
        e.target.classList.toggle("active")



        const c = document.querySelectorAll(".testimonial");
        c.forEach(el => el.classList.remove("active"));

        const s = document.getElementById(e.target.getAttribute('alt'))
        s.classList.add("active");

        // e.target.getAttribute('alt').classList.add("active");

        // c.target.classList.add("active")

        console.log(e.target)


    }

    return (   
      <section>
        <div className="testimonial-section">
            <div className="inner-width">
                <h1>What Our Clients Says</h1>
                <img src="images/quote-icon.png" />
                <div className="testimonial-pics">
                    <img onClick={(e)=> imageClick(e)} src="images/trophy.png " alt="test-1" className="active"/> <img onClick={(e)=> imageClick(e)} src="images/trophy.png " alt="test-2"/> <img onClick={(e)=> imageClick(e)} src="images/trophy.png " alt="test-3"/> <img onClick={ (e)=> imageClick(e)} src="images/trophy.png " alt="test-4"/> </div>
                <div className="testimonial-contents">
                    <div className="testimonial active" id="test-1">
                        <p>We were going to launch an application created by ourselves. We decided to trust LorienSec to check the code of our application and we were not wrong. Because they exhaustively reviewed the code, it was found that our code was very vulnerable, as well as containing some errors that could cause the application to fail. Thanks to his detailed report, we were able to solve the problems satisfactorily.</p>
                        <span className="description">Holden / Product Owner</span>
                    </div>
                    <div className="testimonial" id="test-2">
                        <p>After some experiences I already knew that having a secure code is the basis to avoid attacks through our applications. With LorienSec everything is simple, we got in touch with them and we told them our problems. They quickly got down to work, made an offer that suited our needs and started working. After the tests, our engineers were able to correct a few critical vulnerabilities that without the help of LorienSec would have been impossible to discover.</p>
                        <span className="description">Carla / Company Owner</span>
                    </div>
                    <div className="testimonial" id="test-3">
                        <p>We are very satisfied with the Audit of our website. The communication with LorienSec has been very fluid and all the relevant information is transmitted immediately. We are also very happy with the final report, since the vulnerabilities are described in detail.</p>
                        <span className="description">Samual / </span>
                    </div>
                    <div className="testimonial" id="test-4">
                        <p>Thanks to LorienSec we discovered that our wireless network was exposed in such a way that anyone could have entered the company network and see confidential files. Once this vulnerability was discovered we could manage it and fix it very quickly. Remarkable the speed and the efficiency of LorienSec Security team.</p>
                        <span className="description">Marina / Developer</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}


export default ClientTestmonial;