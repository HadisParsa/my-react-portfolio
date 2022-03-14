///
import React from 'react';
import "./style/Main.css";
import Img0 from "./assets/images/portfolioimg.jpg";
import Img1 from "./assets/images/portfolio0.jpg";
import Img2 from "./assets/images/portfolio01.jpg";
import Img3 from "./assets/images/portfolio02.jpg";
import Img4 from "./assets/images/portfolio03.jpg";
import Img5 from "./assets/images/portfolio04.jpg";
import Img6 from "./assets/images/portfolio05.jpg";

function main() {
  return (
    <section>
      <div className="quote">
        <h1>The digital revolution has transformed virtually every part of human existence, and I am proud to be a part of it as a web developer. welcome to my page.</h1>
        <p>MAKING IT HAPPEN!</p>
      </div>

      <div id="about-me">
        <h2>About Me</h2>
        <p>
          Self-motivated individual with a strong work ethic and effective time management skills.  Furthermore, with the ability to communicate effectively and high attention to detail. Also, strong analytical skills and a proactive attitude to problem solving.And last, but not least, not only a graphic/web designer with the ability to work independently and meet deadlines, but also, a team player who believes that anything is possible.
        </p>

        <div id="resume">
          <h2>View My Resume</h2>
          <p>
            <a href=" "> {" "}
              <button>Resume</button> {" "}
            </a>
          </p>
        </div>

        <p>
          <img src={Img0} alt="profile" />
        </p>
      </div>

      <div id="my-work">
        <h2>Some of my works</h2>
      </div>

      <section className="my-work">
        <div className="my-work-card">
          <h3>RECIPES WITH LITTLE TASTE OF MUSIC</h3>
          <p>
            User can choose the ingredient and cuisine. Meanwhile, they can enjoy a relevant music from youtube.<br></br>
            Click{" "}
            <a
              href="https://github.com/marcmalliate/Collaborative-Project"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a href="https://github.com/HadisParsa/Recipes-with-little-taste-of-music"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Img1} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>GOOGLEBOOK SEARCH ENGINE</h3>
          <p>
            Book lovers can search for new books to read and they can keep a list of books to purchase.
            <br></br>
            Click{" "}
            <a href="https://github.com/HadisParsa/googlebook-search-engin"
              target="_blank" >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://hp-googlebook-search-book.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">

            <img src={Img2} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>TEXT EDITOR</h3>
          <p>
            User can create notes or code snippets with or without an internet connection so they can reliably retrieve them for later use.
            <br></br>
            Click{" "}
            <a href="https://github.com/HadisParsa/text-editor"
              target="_blank" >

              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://hp-text-editor.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Img3} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>WEATHER DASHBORD</h3>
          <p>
            User can search for a city current conditions and also five days future weather outlook for multiple cities.
            <br></br>
            Click{" "}
            <a
              href="https://github.com/HadisParsa/weather-dashboard"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a href="https://hadisparsa.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Img4} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>CSS CHEATSHEET</h3>
          <p>
            A simple web-page that will hold a collection of CSS snippets.
            <br></br>
            Click{" "}
            <a href="https://github.com/HadisParsa/CSS-Snippet-Cheatsheet" target="_blank">
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href=" https://hadisparsa.github.io/CSS-Snippet-Cheatsheet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Img5} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>PASSWORD GENERATOR</h3>
          <p>
            Single page app that meets PWA criteria and uses a service worker.
            <br></br>
            Click{" "}
            <a href="https://github.com/HadisParsa/generate-a-password" target="_blank">
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://hadisparsa.github.io/generate-a-password/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Img6} alt="place-holder" />
          </a>
        </div>
      </section>

      <div id="contact-me">
        <h2>Contact Me</h2>
        <p></p>
        <form className="contact-form">
          <p>
            <label for="username">Name:</label>
            <input
              className="text-input"
              id="username"
              type="text"
              placeholder="Contact name"
            />
          </p>
          <p>
            <label for="email">E-mail:</label>
            <input
              className="text-input"
              id="email"
              type="text"
              placeholder="me@example.com"
            />
          </p>
          <p>
            <label for="query">Message:</label>
            <textarea
              className="text-input"
              id="query"
              placeholder="What would you like to say?"
            ></textarea>
          </p>
          <p>
            <button>Send</button>
          </p>
        </form>
      </div>
    </section>
  );
}



export default main;