import React, { useState } from 'react';
import './about.css';
import me from '../../assets/me.jpg'
export default function About() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <>
      <div className="rootAbout">
        <div className="about">
          <div className="left-section">
            <div className="left-section-wrapper">
              <div className="image">
                <img src={me} alt="" />
              </div>
              <div className="features">
                <p>- React</p>
              </div>
              <div className="features">
                <p>- Node</p>
                <div className="features">
                <p>- Express</p>
              </div>
              <div className="features">
                <p>- MongoDB</p>
              </div>
              <div className="features">
                <p>- NextJS</p>
              </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="right-section-wrapper">
              <div className="bio">
                <h3>Arijit Bhattacharya</h3>
                <span>Full Stack Web Developer</span>
              </div>

              <div className="toggle-tabs">
              <div className= {toggleState=== 1 ? "tabs active-tabs" : "tabs"}
          onClick={()=>toggleTab(1)}
          >About</div>
          <div className={toggleState=== 2 ? "tabs active-tabs" : "tabs"}
          onClick={()=>toggleTab(2)}
          >Timeline</div>
          <hr />
          <div className= {toggleState===1 ? "content active-content" : "content"} >
            <div className="content-details">
              <div className="content-details-left-section">
                <div className="detailss">
                  <p>Name :</p>
                  <p>Email :</p>
                  <p>Profession :</p>
                  <p>Phone :</p>
                  <p>Experience :</p>
                  <p>Education :</p>
                </div>
              </div>
              <div className="content-details-right-section">
              <div className="detailss">
                  <p>Arijit Bhattacharya</p>
                  <p>abhattacharya030@gmail.com</p>
                  <p>Undergraduate</p>
                  <p>8420721005</p>
                  <p>experiencing : )</p>
                  <p>B.Tech</p>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState===2 ? "content active-content" : "content"} >
            <div className="timeline">
              <p>
              Welcome to my corner of the web! 👋

I'm [Your Name], a passionate full stack web developer with a love for crafting innovative digital solutions. With expertise in both front-end and back-end technologies, I thrive on turning ideas into reality through clean, efficient, and user-friendly web applications.

My journey in web development has been a fascinating exploration of coding languages, frameworks, and best practices. From creating dynamic user interfaces with React and Vue.js to building robust server-side applications with Node.js and Django, I'm dedicated to delivering high-quality solutions that exceed expectations.

              </p>

            </div>




          </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
