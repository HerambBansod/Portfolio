import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div className="landing-page">
      {/* <div className="Nav">
        <div className="name">
          <h1>Heramb Bansod</h1>
        </div>
        <div className="Menu-1">
          <ul>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div> */}
      <div className="main">
        <div className="side-1">
          <div className="post">
            <h1>Transforming Ideas into Interactive Realitie</h1>
          </div>
          <div className="contact-me">
            <div className="text">
              <h2>Have some question?</h2>
            </div>
            <button>Contact Me!</button>
          </div>
          <div className="brief">
            <p>Front-end web developer skilled in HTML, CSS, JavaScript, and ReactJS. Experienced in creating responsive, user-friendly interfaces and integrating APIs. Proficient with design tools like Figma and Canva for prototyping. Known for attention to detail, problem-solving, and delivering creative, functional web solutions</p>
          </div>
          <div className="profile ">
            <img src={`${process.env.PUBLIC_URL}/Image_solo.jpg`} alt="Profile_pic" />
          </div>
        </div>
        <div className="side-2">
          <div className="projects">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Project One
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    "Grind Fit" is a fitness app designed to help users stay motivated and achieve their fitness goals. It likely includes features like workout tracking, progress monitoring, personalized workout plans, nutrition advice, and perhaps a social aspect where users can connect with others on their fitness journey.<strong> The app is in the last stage of development, with the initial work already hosted. At this stage, the I am likely fine-tuning user interface designs, enhancing user experience, and adding more integrations to ensure smooth functionality across devices before the final launch.</strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Project Two
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                  "Wealth Wise" is a project focused on helping individuals manage their finances, make informed investment decisions, and work towards achieving their financial goals. It likely offers features such as personalized financial planning, expense tracking, investment advice, portfolio management, and financial goal setting. The app might also provide educational content, helping users understand various financial concepts and strategies.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Project Three
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="skill-head">
              <h1>Front-End Development :</h1>
            </div>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Javascript</h3>
            <h3>ReactJs</h3>
            <h3>Bootstrap</h3>
            <h3>Wordpress</h3>
            <h3>Figma</h3>
            <h3>Canva</h3>
            <h3>Github</h3>
          </div>
          <div className="links">
            <a href="https://github.com/HerambBansod">GitHub</a>
            <a href="https://www.linkedin.com/in/heramb-bansod-a37477319//">LinkedIn</a>
            <a href="https://www.instagram.com/__heramb911?igsh=OTJrczdjeXQyM3l3">Instgram</a>
          </div>
        </div>
      </div>
    </div>
  )
}
