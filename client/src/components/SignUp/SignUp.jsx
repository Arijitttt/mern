import React, { useState } from "react";
import img1 from "../../assets/regAi.jpg";
import "./signup.css";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { PiPasswordFill } from "react-icons/pi";
import { TbPasswordUser } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {

  const navigate = useNavigate();
  // const fetchUsers = () => {
  //   axios.get("http://localhost:5000/register").then((res) => {
  //     console.log(res.data);
  //   });
  // };
  //const history =unstable_HistoryRouter();

  //states for input fields and error messages
  const [user, setUSer] = useState({
    name: "",
    email: "",
    phone: "",
    work:"",
    password: "",
    cpassword:""
  });

  let name,value;
  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value= e.target.value;

    setUSer({...user, [name]:value})
  }

  const postData =async (e)=>{
    e.preventDefault()
    const { name,email,phone,work,password,cpassword}=user;
    const resp=await fetch("http://localhost:5000/register",{
      method : "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })

    const data = await resp.json();
    if(data.status === 422 || !resp){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }else{
      window.alert("Registration Successful")
      console.log("Registration Successful")

      //history.push("/login")
    }
  }
  return (
    <>
      <div className="signUp">
        <div className="mainBox">
          <div className="left">
            <div className="formWrapper">
              <div className="heading">
                <h2>SignUp</h2>
              </div>
              <form method="post" action="POST">
                <div className="inputField">
                  <div className="inputs">
                    <MdOutlineDriveFileRenameOutline className="icon" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="on"
                      placeholder="Your Name"

                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="inputs">
                    <MdAlternateEmail className="icon" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      autoComplete="on"

                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="inputs">
                    <FaPhone className="icon" />
                    <input
                      type="number"
                      name="phone"
                      id="number"
                      autoComplete="on"
                      placeholder="Your phone number"

                      value={user.phone}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="inputs">
                    <ImProfile className="icon" />
                    <input
                      type="text"
                      name="work"
                      id="profession"
                      autoComplete="off"
                      placeholder="Your profession"

                      value={user.work}
                      onChange={handleInputs}
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

                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="inputs">
                    <PiPasswordFill className="icon" />
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="on"
                      placeholder="Confirm your password"


                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="btn">
                  <input type="submit" name="submit" id="submit"

                  onClick={postData}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="rightImg">
              <img src={img1} alt="" />
              <Link to="/login">Already have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
