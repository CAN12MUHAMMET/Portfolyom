import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title text-center">Hakkımda</h2>
                <div className="text-center mb-3">
                  <img
                    className="custom-dark-effect img-fluid"
                    src="img.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <h3>
                    Muhammetcan <br />
                    <hr />{" "}
                  </h3>
                </div>
                <div className="text-center">
                  <p>
                    Etiketsiz, iddiasız, yargısız <br />
                    Kısık ve buğulu bir sesle; merhaba! :) <br /> <br />
                  </p>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title text-center">Eğitim</h2>
                <div className="text-center mb-3">
                  <img
                    className="custom-dark-effect img-fluid"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <h3 className="text-center">
                    İstanbul Gelişim Üniversitesi <br />
                    <hr />{" "}
                  </h3>
                </div>
                <div className="text-center">
                  <h4>Bölüm</h4>
                  <hr />
                  <h5>Bilgisayar Programcılığı</h5>
                  <hr />
                  <h4>Öğrenci</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title text-center">Alan</h2>
                <div className="text-center mb-3">
                  <img
                    className="custom-dark-effect img-fluid"
                    src="image.png"
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <h3 className="text-center">
                    Frontend Developer <br />
                    <hr />{" "}
                  </h3>
                </div>
                <div className="text-center">
                 
                  <ul className="no-dot ">
                    <li>
                      <FaHtml5/>
                      Html</li>
                    <li>
                      <FaCss3/>
                      Css</li>
                    <li>
                      <FaBootstrap/>
                      Bootstrap</li>
                    <li>
                      <FaJs/>
                      Javascript</li>
                    <li>
                      <FaReact/>
                       React</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
