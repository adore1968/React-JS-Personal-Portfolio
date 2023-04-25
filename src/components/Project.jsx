import React from "react";
import "../styles/ProjectStyles.css";

function Project({ item }) {
  return (
    <div className="work__projects-container-project">
      <a href={item.url} target="_blank">
        <div className="work__projects-container-project-top">
          <img src={item.image} alt={item.title} />
          <div className="work__projects-container-project-bottom">
            <h6>{item.title}</h6>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
