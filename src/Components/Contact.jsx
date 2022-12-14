import "./Styles/contact.css";
import React from 'react';
import ContactForm from "./contactForm";
import GDCV from "./Styles/Images/GDCV.pdf"

import WDCV from "./Styles/Images/WDCV.pdf"
function Contact(){
  return (
    <div className=" contactContainer">
    <div className="contactHeader">

    </div>

    <div className="contactFormContainer">
    <ContactForm />
    </div>

<h2 style={{fontSize:"3rem"}}>OR</h2>

<div className="contactme1 contactme ">

            <h2>Or contact me:</h2>
      <h3>Email: darronmgordon@gmail.com </h3>

      <div className="gdcvLinkCon">
      <h4><a href={GDCV} download>Game Development CV</a></h4>
      </div>

      <div className="wdcvLinkCon">
      <h4><a href={WDCV} download>Website Development CV</a></h4>
      </div>

      </div>
 </div>
  


  );
};

export default Contact;
