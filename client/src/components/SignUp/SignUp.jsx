import React, { useState } from "react";
import img1 from "../../assets/regAi.jpg";
import "./signup.css";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { PiPasswordFill } from "react-icons/pi";
import { TbPasswordUser } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';

export default function SignUp() {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <div className="signUp">
        <div className="mainBox">
          <div className="left">
            <div className="formWrapper">
              <div className="heading">
                <h2>SignUp</h2>
              </div>
              <form action="">
                <div className="inputField">
                  <div className="inputs">
                    <MdOutlineDriveFileRenameOutline className="icon" />
                    <input type="text" name="name" id="name" autoComplete="on" placeholder="Your Name" />
                  </div>
                  <div className="inputs">
                    <MdAlternateEmail className="icon" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      autoComplete="on"
                    />
                  </div>
                  <div className="inputs">
                    <FaPhone className="icon" />
                    <input
                      type="number"
                      name="number"
                      id="number"
                      autoComplete="off"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="inputs">
                    <ImProfile className="icon" />
                    <input
                      type="text"
                      name="profession"
                      id="profession"
                      autoComplete="off"
                      placeholder="Your profession"
                    />
                  </div>
                  <div className="inputs">
                    <TbPasswordUser className="icon" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="on"
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="inputs">
                    <PiPasswordFill className="icon" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
                <div className="btn">
                  <input type="submit" name="submit" id="submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="rightImg">
              <img src={img1} alt="" />
              <Link to="/login">
              Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
