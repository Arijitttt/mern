import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import './contact.css'
export default function Contact() {
  return (
    <>
     <div className="top">
      <div className="box">
        <div className="box-content">

          <div className="icon">
            <h3><FaPhoneAlt/></h3>
          </div>
          <div className="writing">
            <h3>Phone</h3>
            <p>123-456-7890</p>
          </div>
       
        </div>
        
      </div>
      <div className="box">
      <div className="box-content">

<div className="icon">
  <h3><FaPhoneAlt/></h3>
</div>
<div className="writing">
  <h3>Email</h3>
  <p>abhattacharya030@gmail.com</p>
</div>

</div>
      </div>
      <div className="box">
      <div className="box-content">

<div className="icon">
  <h3><FaPhoneAlt/></h3>
</div>
<div className="writing">
  <h3>Address</h3>
  <p>Kolkata , India</p>
</div>

</div>
      </div>
      </div> 

      <div className="bottom">
        <div className="bottomWrapper">
          <h3>Get in Touch</h3>
          <form action="">
           <div className="inernal-mini-boxes">
            <div className="internal-box">
              <input type="text" placeholder="Name" id='name'/>
            </div>
            <div className="internal-box">
            <input type="email" placeholder="email" id="email" autoComplete='on'/>
            </div>
            <div className="internal-box">
            <input type="number" placeholder="phone number" id="phone-number" autoComplete='on'/>
            </div>
           </div>
           
           <div className="conatct-textarea">
           <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Message..."
          
        ></textarea>
           </div>
           <div className="contact-button">
            <button>Send Response</button>
           </div>
           </form>
        </div>
      </div>
    </>
  )
}
