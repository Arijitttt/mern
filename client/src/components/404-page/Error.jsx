import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <>
     <div className="error">
        errror page
        <button><Link to="/">Back to Home</Link></button>

        </div> 
    </>
  )
}
