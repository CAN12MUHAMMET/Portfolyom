import React from "react";
import "./Footers.css";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footers = () => {
  return (
    <div className="d-flex justify-content-center align-items-center body mx-3">
      <div className="col-sm-3 d-flex justify-content-center align-items-center">
        <a href="https://www.instagram.com/muhammeetakcr/" target="blanked">
          <div title="İnstagram" className="icon-itemx insta">
            <FaInstagram className="text-white" />
          </div>
        </a>
        <div className="text-white px-2">
            İnstagram
          </div>
      </div>
      <div className="col-sm-3 d-flex justify-content-center align-items-center ">
        <a href="https://www.facebook.com/Muhammetakcr.12" target="blanked">
          <div title="Facebook" className="icon-itemx face">
            <FaFacebook className="text-white" />
          </div>
          
        </a>
        <div className="text-white px-2">
            Facebook
          </div>
      </div>
      <div className="col-sm-3 d-flex justify-content-center align-items-center">
        <a href="https://github.com/CAN12MUHAMMET" target="blanked">
          <div title="Github" className="icon-itemx git">
            <FaGithub className="text-white" />
          </div>
        </a>
        <div className="text-white px-2">
            Github
          </div>
      </div>
      <div className="col-sm-3 d-flex justify-content-center align-items-center">
        <a
          href="https://www.linkedin.com/in/muhammetcan-akcura-331289270/"
          target="blanked">
          <div title="Linkedin" className="icon-itemx link">
            <FaLinkedin className="text-white" />
          </div>
        </a>
        <div className="text-white px-2">
            Linkedin
          </div>
      </div>
    
    </div>
  );
};

export default Footers;
