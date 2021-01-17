import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [Open, setOpen] = useState(false);
  const opensvg = () => {
    const buttons = document.getElementsByClassName("demo__buttons")[0];

    let delay = 200;
    let steps = [];
    let curStep = 0;
    for (let i = 0; i <= 3; i++) {
      steps[i] = "demo__step-" + i;
    }

    function setStep(index) {
      buttons.classList.remove("step-1", "step-0", "step-3", "step-2");
      buttons.classList.add("step-" + curStep);
    }

    let lastTimeout;

    function animate() {
      if (curStep >= 4) {
        curStep = 0;
        return;
      }

      Open = true;
      setStep(curStep);
      curStep++;
      lastTimeout = setTimeout(animate, delay);
    }

    if (!Open) {
      console.log("i will open Now");
      animate();
    } else {
      console.log("i will CLose");
      console.log("open");
      buttons.classList.remove("step-1", "step-0", "step-3", "step-2");
      clearTimeout(lastTimeout);
      Open = !Open;
      curStep = 0;
    }
  };
  return (
    <>
      <div className="scroll-up-btn">
        <svg
          className="toBottom "
          id="scroll-Bottom"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60">
          <title>scroll</title>
          <circle cx="30" cy="30" r="29" className="c-c1 " />
          <polyline className="c-2" points="43.62 22.19 30 37.81 16.38 22.19" />
        </svg>
      </div>
      <div className="social-media-btn">
        <svg
          className="svg-s"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="0"
          height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="demo">
          <div className="demo__buttons">
            <div className="demo__social-btn-4 demo__social-btn">
              <i class="fa fa-snapchat"></i>
            </div>
            <div className="demo__social-btn-3 demo__social-btn">
              <i class="fa fa-instagram"></i>
            </div>
            <div className="demo__social-btn-2 demo__social-btn">
              <i class="fa fa-facebook"></i>
            </div>
            <div className="demo__social-btn-1 demo__social-btn">
              <i class="fa fa-twitter"></i>
            </div>
            <div onClick={() => opensvg()} className="demo__open-btn">
              <i class="fa fa-share-alt"></i>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Lorien<span>Sec</span>
            </a>
          </div>
          <ul className="menu">
            <Link to="/">
              {" "}
              <li>
                <a href="#home" className="menu-btn">
                  Home
                </a>
              </li>
            </Link>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#teams" className="menu-btn">
                Teams
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
            <Link to="/Blog">
              {" "}
              <li>
                <a className="menu-btn">Blog</a>
              </li>
            </Link>
            <Link to="/Singin">
              {" "}
              <li>
                <a className="menu-btn">Login</a>
              </li>
            </Link>
            <li>
              <div className="toggle-box">
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="toggle-box-checkbox"
                />
                <label
                  for="toggle-box-checkbox"
                  className="toggle-box-label-left"></label>
                <label
                  for="toggle-box-checkbox"
                  className="toggle-box-label"></label>
              </div>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
