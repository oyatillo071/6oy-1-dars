import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./images/myteam.svg";
import experience from "./images/experience_icon.svg";
import implement from "./images/implement_icon.svg";
import productivity from "./images/productivity_icon.svg";
import backgroundTitleImage from "./images/title-bg.png";
import backgroundDiscImage from "./images/disc_bg.png";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundTitleImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  return (
    <>
      <div>
        <div className="container">
          <section>
            <header className="header">
              <img src={logo} width={159} height={40} alt="logo" />
              <div className="nav_bar">
                <ul className="nav_list">
                  <li className="nav_list-item">
                    <a href="#">home</a>
                  </li>
                  <li className="nav_list-item">
                    <a href="#">about</a>
                  </li>
                </ul>
              </div>
              <button type="button" className="contact_btn">
                contact us
              </button>
            </header>
          </section>

          {/* <main> */}
          <section className="main-hero">
            <div className="title_bg" style={backgroundStyle}></div>

            <div className="main_title">
              <h1>
                Find the best <span>talent</span>
              </h1>
            </div>
            <div className="main_info">
              <div className="main_info-rectangle"> </div>
              <p className="main_info-disc">
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* 
          
          
          
          
          
          
          
          */}
      <section className="distribute">
        <div className="container">
          <div className="distribute_wrapper">
            <div className="dist_title-wrapper">
              <div className="main_info-rectangle main_info-rectangle-color">
                {" "}
              </div>

              <h2 className="dist_title">
                Build & manage distributed teams like no one else.
              </h2>
            </div>
            <div className="dist_info">
              <div className="dist_card">
                <img className="dist_card-img" src={experience} alt="icon" />
                <div className="dist_card-info">
                  <h4 className="dist_card-info-title">
                    Experienced Individuals
                  </h4>
                  <p className="dist_card-info-disc">
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
              <div className="dist_card">
                <img className="dist_card-img" src={implement} alt="icon" />
                <div className="dist_card-info">
                  <h4 className="dist_card-info-title">
                    Experienced Individuals
                  </h4>
                  <p className="dist_card-info-disc">
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
              <div className="dist_card">
                <img className="dist_card-img" src={productivity} alt="icon" />
                <div className="dist_card-info">
                  <h4 className="dist_card-info-title">
                    Experienced Individuals
                  </h4>
                  <p className="dist_card-info-disc">
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </main> */}
    </>
  );
}

export default App;
