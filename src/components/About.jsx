import React from "react";
import SectionTitle from "./SectionTitle";
import about from "../data/about";
import AboutItem from "./AboutItem";

function About() {
  return (
    <div className="py-12">
      <SectionTitle>About me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
        {about.map((about) => (
          <AboutItem
            title={about.title}
            title2={about.title2}
            description={about.description}
            description2={about.description2}
            description3={about.description3}
          ></AboutItem>
        ))}
      </div>
    </div>
  );
}

export default About;