import React from "react";
import "../scss/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="data">
        <a href="https://openweathermap.org/" target="_blank">
          Api
        </a>
        <a href="https://openweathermap.org/current" target="_blank">
          Documentacion
        </a>
        <a href="https://github.com/ToledoFernando" target="_blank">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/toledo-fernando-266612245/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ToledoFernando/React-Typescript"
          target="_blank"
        >
          Repo
        </a>
      </div>
    </div>
  );
}

export default Footer;
