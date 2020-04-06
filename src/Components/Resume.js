import React, { Component } from "react";
import TechItem from "./TechItem";
import coinsquareIcon from "../assets/icons/coinsquare-icon.jpg";
import leagueIcon from "../assets/icons/league-icon.png";
import taplyticsIcon from "../assets/icons/taplytics-icon.jpg";
import htIcon from "../assets/icons/ht-icon.jpg";
import guelphIcon from "../assets/icons/guelph-icon.png";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const iconMap = {
  coinsquare: coinsquareIcon,
  league: leagueIcon,
  taplytics: taplyticsIcon,
  ht: htIcon,
  guelph: guelphIcon,
};

const ContribuitionContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

class Resume extends Component {
  state = {
    githubContributionsData: null,
    totalContributions: "offline",
    weeklyContributions: "offline",
    dailyContributions: "offline",
    dateToday: moment().format("YYYY-MM-DD"),
    dateOneWeekAgo: moment().subtract(7, "d").format("YYYY-MM-DD"),
  };

  componentDidMount() {
    axios("https://github-contributions-api.now.sh/v1/alexandermontague").then(
      (res) => {
        this.parseCommitData(res.data);
      }
    );
  }

  parseCommitData = (data) => {
    const { dateOneWeekAgo, dateToday } = this.state;

    // total commits
    const totalContributions = data.years.reduce((accumulator, year) => {
      return accumulator + year.total;
    }, 0);

    // weekly commits
    const weeklyContributions = data.contributions.reduce(
      (accumulator, day) => {
        if (
          moment(dateOneWeekAgo).unix() <= moment(day.date).unix() &&
          moment(day.date).unix() <= moment(dateToday).unix()
        ) {
          return accumulator + day.count;
        }

        return accumulator;
      },
      0
    );

    // daily commits
    const dailyContributions = data.contributions.reduce((accumulator, day) => {
      return day.date === dateToday ? accumulator + day.count : accumulator;
    }, 0);

    this.setState({
      totalContributions,
      weeklyContributions,
      dailyContributions,
    });
  };

  render() {
    const {
      skillmessage,
      education,
      work,
      barSkills,
      techSkills,
    } = this.props.data;

    const {
      totalContributions,
      weeklyContributions,
      dailyContributions,
    } = this.state;

    const educationCollection = education.map((education) => {
      return (
        <div key={education.school}>
          <h3 style={{ display: "flex", alignItems: "center" }}>
            {education.school}
            <img
              style={{
                height: 50,
                width: 50,
                borderRadius: "50%",
                marginLeft: "10px",
              }}
              alt="school icon"
              src={iconMap[education.icon]}
            />
          </h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const workCollection = work.map((work) => {
      return (
        <div key={work.company}>
          <h3 style={{ display: "flex", alignItems: "center" }}>
            {work.company}
            <img
              style={{
                height: 50,
                width: 50,
                borderRadius: "50%",
                marginLeft: "10px",
              }}
              alt="workplace icon"
              src={iconMap[work.icon]}
            />
          </h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>
            {work.description}{" "}
            {work.company === "Coinsquare" && (
              <a
                href="https://www.linkedin.com/pulse/my-time-coinsquare-alex-montague/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE!
              </a>
            )}
            {work.company === "League Inc" && (
              <a
                href="https://medium.com/inside-league/the-student-series-meet-leagues-legendary-engineering-co-ops-9d2039c5b394"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE!
              </a>
            )}
          </p>
        </div>
      );
    });

    const skillsCollection = barSkills.map((skills) => {
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
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
            >
              {techSkills.map((skill) => (
                <TechItem
                  imageSrc={skill.imageSrc}
                  header={skill.header}
                  text={skill.text}
                  key={skill.header}
                  swipeable={true}
                />
              ))}
            </Carousel>

            <div className="techStackContainer" style={{ paddingTop: 50 }}>
              <div className="bars">
                <ul className="skills">{skillsCollection}</ul>
              </div>
            </div>
          </div>

          <div className="nine columns main-col">
            <div
              style={{
                textAlign: "center",
                fontSize: 15,
                paddingLeft: "6%",
                paddingBottom: "5%",
              }}
            >
              Git Activity &nbsp;
              <div className={"fab fa-github"} />
            </div>
            <ContribuitionContainer>
              <div>
                <div style={{ fontSize: 30, textAlign: "center" }}>
                  Total Contributions
                </div>
                <div style={{ textAlign: "center", color: "#00a5ff" }}>
                  {totalContributions}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 30, textAlign: "center" }}>
                  Commits this Week
                </div>
                <div style={{ textAlign: "center", color: "#00a5ff" }}>
                  {weeklyContributions}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 30, textAlign: "center" }}>
                  Commits Today
                </div>
                <div style={{ textAlign: "center", color: "#00a5ff" }}>
                  {dailyContributions}
                </div>
              </div>
            </ContribuitionContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
