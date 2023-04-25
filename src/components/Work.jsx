import React from "react";
import "../styles/WorkStyles.css";
import projectsData from "../data/projectsData";
import Project from "./Project";

function Work() {
  return (
    <section id="work">
      <h2>These are some of my projects</h2>
      <span className="underline"></span>
      <div className="work__projects-container">
        {projectsData.map((item, index) => {
          return <Project key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Work;
