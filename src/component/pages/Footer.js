import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedin, GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="container"> 
        <div className="d-flex justify-content-center">
        <p>
            <button type="button" className="btn"> <AiOutlineGithub /></button> <button type="button" className="btn"> <GrLinkedin /></button><button type="button" className="btn"> <GrTwitter /></button>
            
        </p>
        </div>
    </div> 
  );
}
