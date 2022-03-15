import React from "react";
import "./style/Footer.css";
import github from "./assets/images/githubicon.jpg";
import linkedin from "./assets/images/linkedinicon.jpg";

function Footer() {
  return (
    <footer>
      <div>
        <p> You can find me on social medias </p>
      </div>
      <div id="icons">
        <a href="https://github.com/HadisParsa"
          target="_blank"
          rel="noopener noreferrer">
          <img src={github} alt="place-holder" class="img" />
        </a>

        <a href="https://www.linkedin.com/in/hadis-parsa-a5b947179/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin} alt="place-holder" class="img" />
        </a>
      </div>
      <p>
        <h4 className='text-link'>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Hadis.
        </h4>
      </p>
    </footer>
  );
}


export default Footer;