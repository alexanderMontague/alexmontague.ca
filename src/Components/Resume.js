import React, { Component } from "react";
import TechItem from "./TechItem";

class Resume extends Component {
  render() {
    const {
      skillmessage,
      education,
      work,
      barSkills,
      techSkills
    } = this.props.data;

    const educationCollection = education.map(education => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    const workCollection = work.map(work => {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>
            {work.description}{" "}
            {work.company === "Coinsquare" ? (
              <a
                href="https://www.linkedin.com/pulse/my-time-coinsquare-alex-montague/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE!
              </a>
            ) : null}
          </p>
        </div>
      );
    });
    const skillsCollection = barSkills.map(skills => {
      const className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className} />
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{educationCollection}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{workCollection}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>My Tech Stack</span>
            </h1>
            <p>{skillmessage}</p>
          </div>

          <div className="nine columns main-col">
            <div className="techStackContainer">
              <div className="techStack">
                {techSkills.row1.map(skill => {
                  return (
                    <TechItem
                      imageSrc={skill.imageSrc}
                      header={skill.header}
                      text={skill.text}
                      key={skill.header}
                    />
                  );
                })}
              </div>
              <div className="techStack">
                {techSkills.row2.map(skill => {
                  return (
                    <TechItem
                      imageSrc={skill.imageSrc}
                      header={skill.header}
                      text={skill.text}
                      key={skill.header}
                    />
                  );
                })}
              </div>
              <div className="techStack">
                {techSkills.row3.map(skill => {
                  return (
                    <TechItem
                      imageSrc={skill.imageSrc}
                      header={skill.header}
                      text={skill.text}
                      key={skill.header}
                    />
                  );
                })}
              </div>
              <div className="bars">
                <ul className="skills">{skillsCollection}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
