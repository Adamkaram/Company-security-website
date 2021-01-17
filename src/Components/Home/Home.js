import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import App from "./App.css"
import HeadSection from "../Sections/HeadSection/HeadSection"
import Company from "../Sections/Company/Company"
import Services from "../Sections/ServiceSection/Service"
import Skills from "../Sections/ComponySkills/Skills"
import Works from "../Sections/WorkSection/Works"
import IntroService from "../Sections/ServiceIntroducedSection/IntroService"
import WorkWith from "../Sections/WorkWith/WorkWith"
import WepApp from "../Sections/WepAppPentisting/WepApp"
import ClientTestmonial from "../Sections/ClientTestimonial/ClientTestmonial"
import Email from "../Email/Email"
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <>
            < HeadSection/>
            <Company />
            <Services />
            <Skills />
            <Works />
            <IntroService />
            <WorkWith />
            <WepApp />
            <ClientTestmonial />
            <Email />
       </> 
    )
}


export default Home;