import React,{useState} from 'react'
import img1 from '../../assets/regAi.jpg'
import './signup.css'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { PiPasswordFill } from "react-icons/pi";
import { TbPasswordUser } from "react-icons/tb";

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
                <h1>SignUp</h1>
              </div>
              <div className="inputField">
                <div className="inputs">
                <MdOutlineDriveFileRenameOutline className='icon'/>
                <input type="text" name="" id="" placeholder='Your Name' 
                />
                </div>
                <div className="inputs">
                <MdAlternateEmail className='icon'/>
                <input type="email" name="" id="" placeholder='Your email'/>
                </div>
                <div className="inputs">
                <FaPhone className='icon'/>
                <input type="tel" name="" id="" placeholder='Your phone number'/>
                </div>
                <div className="inputs">
                <ImProfile className='icon'/>
                <input type="text" name="" id="" placeholder='Your profession'/>
                </div>
                <div className="inputs">
                <TbPasswordUser className='icon'/>
                <input type="password" name="" id="" placeholder='Your Password'/>
                </div>
                <div className="inputs">
                <PiPasswordFill className='icon'/>
                <input type="password" name="" id="" placeholder='Confirm your password'/>
                </div>
              </div>
              <div className="btn">
                <button>SignUp</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightImg">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
