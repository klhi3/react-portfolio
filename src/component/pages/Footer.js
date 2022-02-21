import React from 'react';
import { AiOutlineGithub  } from "react-icons/ai";
import { GrLinkedin  } from "react-icons/gr";
/* import {  GrTwitter } from "react-icons/gr";   */

export default function Footer() {
  const handleClick = (x) => {
    window.open(x);
  }

  return (
    <div className="container"> 
        <div className="d-flex justify-content-center">
        <p>
            <button type="button" className="btn" onClick={handleClick("https://github.com/klhi3?tab=repositories")}> <AiOutlineGithub /></button> 
            <button type="button" className="btn" onClick={handleClick("https://www.linkedin.com/in/hekwanglhi/")}> <GrLinkedin /></button>
           {/*  <button type="button" className="btn" onClick={handleClick("https://www.linkedin.com/in/hekwanglhi/")}> <GrLinkedin /></button>  */}
           { /* <button type="button" className="btn" onClick={handleClick("https://github.com/klhi3?tab=repositories")}> <GrTwitter /></button> */ }
            
        </p>
        </div>
    </div> 
  );
}
