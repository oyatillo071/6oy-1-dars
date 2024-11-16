import "./App.css";
import logo from "./images/myteam.svg";
import experience from "./images/experience_icon.svg";
import implement from "./images/implement_icon.svg";
import productivity from "./images/productivity_icon.svg";
import backgroundTitleImage from "./images/title-bg.png";
import backgroundDiscImage from "./images/disc_bg.png";
import secondBg from "./images/second-page-bg.png";
import bakerImage from "./images/baker-img.svg";
import readyBg from "./images/ready-bg.svg";
// import Button from "./componets/Button";
// import Card from "./componets/Card";

function App() {
  // const backgroundStyle = {
  //   backgroundImage: `url(${backgroundTitleImage})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   color: "white",
  // };

  return (
    <>
      <div>
        <div className="container">
          {/* <Button></Button>
          <Card
            image="https://picsum.photos/200/300"
            title="Bu Title"
            disc="Bu izoh"
          /> */}
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
          <img
            src={backgroundTitleImage}
            className="bg_title-img"
            alt="image"
          />
          <img src={backgroundDiscImage} alt="img" className="bg_disc-img" />

          <section className="main-hero">
            <div className="title_bg"></div>

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
          <img className="second-bg" src={secondBg} alt="image" />
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
        {/* 
    
    
    
        */}

        <div className="stories">
          <div className="container stories_container">
            <h2 className="stories_title">
              Delivering real results for top companies. Some of our{" "}
              <span>success stories.</span>
            </h2>
            {/* 
            
            
            */}
            <div className="stories_card-wrapper">
              <div className="stories_card">
                <p className="stories_card-disc">
                  {" "}
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <h4 className="stories_card-name">Kady Baker</h4>
                <p className="stories_card-position">
                  Product Manager at Bookmark
                </p>
                <img
                  src={bakerImage}
                  alt="Kaby Baker"
                  className="stories_card-img"
                />
              </div>
              <div className="stories_card">
                <p className="stories_card-disc" style={{ zIndex: 10 }}>
                  {" "}
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <h4 className="stories_card-name">Kady Baker</h4>
                <p className="stories_card-position">
                  Product Manager at Bookmark
                </p>
                <img
                  src={bakerImage}
                  alt="Kaby Baker"
                  className="stories_card-img"
                />
              </div>
              <div className="stories_card">
                <p className="stories_card-disc">
                  {" "}
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <h4 className="stories_card-name">Kady Baker</h4>
                <p className="stories_card-position">
                  Product Manager at Bookmark
                </p>
                <img
                  src={bakerImage}
                  alt="Kaby Baker"
                  className="stories_card-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 
        
        
        
        */}

        <div className="ready">
          <div className="container ready_container">
          <img src={readyBg} alt="bg Fimage" className="ready_bg" />
            <h3 className="ready_title">Ready to get started?</h3>
            <button type="button" className="contact_btn ready_btn">
              contact us
            </button>
          </div>
        </div>
      </section>
      {/* </main> */}
    </>
  );
}

export default App;
