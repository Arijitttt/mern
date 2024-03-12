import React from 'react'
import './login.css'
import img1 from "../../assets/logAi.jpg";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google login response here
  };
  const onFailure = (error) => {
    console.log(error);
    // Handle login failure here
  };
  return (
    <>
    <div className="login">
        <div className="mainBox">
          <div className="left">
            <div className="formWrapper">
              <div className="heading">
                <h2>SignUp</h2>
              </div>
              <form action="">
                <div className="inputField">
                  
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
                    <TbPasswordUser className="icon" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="on"
                      placeholder="Your Password"
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
              <div className="registrationWrapper">


              <Link to="/signup">
              Don't have an account? 
              </Link>

              <GoogleLogin
              className='googleBtn'
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
