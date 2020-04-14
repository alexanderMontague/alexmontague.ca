import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";

import TaplyticsLogo from "../../assets/icons/taplytics-icon.jpg";

import TaplyticsPic from "../../assets/Terms/Taplytics/tl_me.png";
import TaplyticsCoffee from "../../assets/Terms/Taplytics/tl_coffee.png";
import TaplyticsDesk from "../../assets/Terms/Taplytics/tl_desk.png";
import TaplyticsJourney from "../../assets/Terms/Taplytics/tl_journey.png";
import TaplyticsHome from "../../assets/Terms/Taplytics/tl_home_meeting.png";
import TaplyticsE2E from "../../assets/Terms/Taplytics/tl_e2e_cypress.mp4";

import LeagueCoops from "../../assets/Terms/League/co-ops.png";
import LeagueTimeline from "../../assets/Terms/League/league_timeline.png";
import WorkatoTool from "../../assets/Terms/League/league_workato_tool.png";

let isDirectLink;

if (isDirectLink !== true) {
  isDirectLink = false;
}

window.onscroll = () => {
  const currPosition = window.pageYOffset;
  if (window.location.pathname.includes("co-op/taplytics")) {
    const introHeight = document.getElementById("Intro").offsetTop;
    const infoHeight = document.getElementById("Info").offsetTop;
    const goalsHeight = document.getElementById("Goals").offsetTop;
    const descriptionHeight = document.getElementById("Description").offsetTop;
    const relationHeight = document.getElementById("Relation").offsetTop;
    const featuredHeight = document.getElementById("Featured").offsetTop;
    const conclusionHeight = document.getElementById("Conclusion").offsetTop;
    const extrasHeight = document.getElementById("Extras").offsetTop;

    if (!isDirectLink) {
      if (currPosition >= introHeight && currPosition < infoHeight) {
        window.location.hash = "#Intro";
      } else if (currPosition >= infoHeight && currPosition < goalsHeight) {
        window.location.hash = "#Info";
      } else if (
        currPosition >= goalsHeight &&
        currPosition < descriptionHeight
      ) {
        window.location.hash = "#Goals";
      } else if (
        currPosition >= descriptionHeight &&
        currPosition < relationHeight
      ) {
        window.location.hash = "#Description";
      } else if (
        currPosition >= relationHeight &&
        currPosition < featuredHeight
      ) {
        window.location.hash = "#Relation";
      } else if (
        currPosition >= featuredHeight &&
        currPosition < conclusionHeight
      ) {
        window.location.hash = "#Featured";
      } else if (
        currPosition >= conclusionHeight &&
        currPosition < extrasHeight
      ) {
        window.location.hash = "#Conclusion";
      } else if (currPosition >= extrasHeight) {
        window.location.hash = "#Extras";
      }
    }
  }
};

const StyledWrapper = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  @media (max-width: 761px) {
    flex-direction: ${(props) => props.mobileFlexDirection || "column"};
  }
`;

const StyledTableOfContents = styled.div`
  width: 20%;
  min-height: 40%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 10px 20px 20px;
  padding: 38px 25px 25px 25px;
  z-index: 1;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  position: fixed;

  @media (max-width: 861px) {
    font-size: 15px;
  }

  @media (max-width: 761px) {
    position: relative;
    width: auto;
    margin: 20px;
  }
`;

const StyledArticleWrapper = styled.div`
  width: 70%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 20px 20px 10px;
  margin-left: 28%;
  padding: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 761px) {
    width: auto;
    margin: 20px;
    margin-left: none;
  }
`;

const StyledList = styled.ul`
  margin: 20px 5px;
  padding-left: 15px;
  list-style: circle outside;
  word-wrap: break-word;
`;

const StyledLink = styled.a`
  color: ${(props) => props.color || "#b7b7b7"} !important;
  font-size: ${(props) => props.fontSize || "1em"} !important;
  font-family: ${(props) => props.fontFamily || "opensans-bold"} !important;
  line-height: 25px;

  &:hover {
    color: ${(props) => props.hoverColor || "#00a5ff"} !important;
  }

  &:target {
    /* This is not working. TODO */
    color: "#00a5ff" !important;
  }
`;

const StyledText = styled.span`
  color: ${(props) => props.color || "#b7b7b7"};
  font-size: ${(props) => props.fontSize || "1em"};
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight || "25px"};
  z-index: 100;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin || "0 0 20px 0"};
  font-weight: ${(props) => props.fontWeight || "normal"};

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  background: #ffffff;
  max-width: 80;
`;

const StyledVideo = styled.video`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  max-width: 80;
`;

const StyledLine = styled.hr`
  margin: ${(props) => props.margin || "10px 0px"};
  border: solid #e3e3e3;
  border-width: 1px 0 0;
  clear: both;
  height: 0;
`;

const TaplyticsTerm = () => {
  useEffect(() => {
    Prism.highlightAll();
    return () => {};
  }, []);

  const windowFragment = window.location.hash;
  let linkMap = {
    intro: windowFragment === "#Intro" ? "#00a5ff" : "#b7b7b7",
    info: windowFragment === "#Info" ? "#00a5ff" : "#b7b7b7",
    goals: windowFragment === "#Goals" ? "#00a5ff" : "#b7b7b7",
    description: windowFragment === "#Description" ? "#00a5ff" : "#b7b7b7",
    relation: windowFragment === "#Relation" ? "#00a5ff" : "#b7b7b7",
    featured: windowFragment === "#Featured" ? "#00a5ff" : "#b7b7b7",
    conclusion: windowFragment === "#Conclusion" ? "#00a5ff" : "#b7b7b7",
    extras: windowFragment === "#Extras" ? "#00a5ff" : "#b7b7b7",
  };

  const TableOfContentsHashHandler = (hash) => {
    isDirectLink = true;
    window.location.hash = hash;
    setTimeout(() => {
      isDirectLink = false;
    }, 2000);
  };

  return (
    <StyledWrapper>
      <StyledTableOfContents>
        <StyledText
          color="#00a5ff"
          fontSize="20px"
          fontFamily={"opensans-bold"}
          margin="16px 0 20px 0"
        >
          Table of Contents
        </StyledText>
        <StyledLine margin="17px 0px" />
        <StyledList>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Intro")}
              color={linkMap.intro}
            >
              Intro
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Info")}
              color={linkMap.info}
            >
              Employer Info
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Goals")}
              color={linkMap.goals}
            >
              Goals
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Description")}
              color={linkMap.description}
            >
              Job Description
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Relation")}
              color={linkMap.relation}
            >
              Academic Relation
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Featured")}
              color={linkMap.featured}
            >
              Featured Aspect
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Conclusion")}
              color={linkMap.conclusion}
            >
              Conclusion
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => TableOfContentsHashHandler("#Extras")}
              color={linkMap.extras}
            >
              Extras
            </StyledLink>
          </li>
        </StyledList>
      </StyledTableOfContents>
      <StyledArticleWrapper>
        <StyledWrapper mobileFlexDirection="row">
          <StyledText
            color="#00a5ff"
            fontSize="20px"
            fontFamily="opensans-bold"
            margin="auto 0"
          >
            Taplytics - Unify the customer experience
          </StyledText>
          <StyledImage
            src={TaplyticsLogo}
            height="50px"
            width="50px"
            borderRadius="30px"
            margin="0 0 0 15px"
          />
        </StyledWrapper>
        <StyledLine margin="10px 0px" />
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          Fullstack Developer
          <br />
        </StyledText>
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          Toronto, Ontario, Canada
          <br />
        </StyledText>
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          January 2020 - April 2020
          <br />
        </StyledText>

        <StyledImage src={TaplyticsPic} />
        <div style={{ fontSize: 15 }}>
          <i>Gotta rep the Taplytics Swag</i>
        </div>

        <hr />
        <StyledText>
          <span id="Intro">
            <span style={{ fontFamily: "opensans-bold" }}>Introduction: </span>
            Welcome to my third work term report! This placement has been a lot
            of fun and I have had an unreal experience. I have also got to meet
            and interact with some really great people, some of which I have
            worked with before! Throughout this report I will talk about the
            company I had my placement with, some goals I set for myself, and
            what the overall experience was like. I will also talk a little bit
            about how working from home and going completely remote due to
            COVID-19 has impacted this co-op experience. I hope you enjoy, and
            for any other information feel free to contact me!
            <br />
            <br />
          </span>
          <span id="Info">
            <span style={{ fontFamily: "opensans-bold" }}>
              Employer Information:{" "}
            </span>
            For this placement I was located in downtown Toronto, an area I have
            become very famililar with these past co-op placements! I joined
            Taplytics as a Full Stack Intern Developer, for a short but
            absolutely rewarding 4 month term. In my previous experiences I
            generally had a pretty good idea of what the company did and how
            they did it, but this was different. The information I uncovered
            when applying to Taplytics was just scratching the surface. They are
            actively doing so much more than I initially thought, and it was
            really cool getting to experience it all. Taplytics transforms data
            into universally actionable campaigns and experiments where you can
            create unique personalized digital experiences across apps and the
            web. Simplifying that a bit, Taplytics offers a bunch of different
            services (A/B testing, Launch Control, Email Marketing, Push
            notifications) and lets clients wrap all of these features into a
            single campaign, or journey. This lets clients make data driven
            decisions and also provides unique online experiences that are
            custom tailored and the best possible fit for each user! This
            business concept was tough to wrap my head around, much less develop
            for it! Taplytics gives clients the ability to know what’s going on
            in the state of their website or app, and how users are behaving,
            reacting and making decisions under certain conditions. This is done
            all through an easy to configure "Journey Builder" that requires no
            development work, and allows clients to do everything themselves!
            Taplytics was a part of Y Combinator and founded by Cobi Druxerman,
            Aaron Glazer, and brothers Andrew Norris and Jonathan Norris. This
            has been one of the most interesting and exciting placements so far,
            and I hope to be back one day! If you want to see what Taplytics is
            all about, check them out!{" "}
            <StyledLink
              href="https://www.taplytics.com"
              color="#00a5ff"
              target="_blank"
            >
              Taplytics' Website
            </StyledLink>
            <br />
            <br />
          </span>
          <StyledImage src={TaplyticsCoffee} />
          <div style={{ fontSize: 15 }}>
            <i>I unfortunately started after the office already had a sink</i>
          </div>
          <br />
          <span id="Goals">
            <span style={{ fontFamily: "opensans-bold" }}>Goals: </span>
            For this placement I created 3 goals for myself to achieve by the
            end of this placement. This term was interesting as I had my own
            goals regulated by the co-op program and Experience Guelph, while I
            also had goals and feedback setup through Canada's Information and
            Communication Technology Council (ICTC). It was good to see that
            there are other programs out there furthering Canada's digital
            advantage in a global economy. My first goal surrounded a decently
            complex technical implementation, my second related to UI/UX
            personal design improvements, and my third was a testing piece. I
            was uncertain of how exactly these goals would play out (especially
            the second one!), but I was motivated and committed to learn, grow
            and work my hardest to achieve them.
            <ol>
              <li>Write or implement a substantial Backend Service</li>
              <li>Improve my design skills (UI & UX)</li>
              <li>Get better at Testing Things</li>
            </ol>
            I'm happy to report that at the end of the term I believe I
            sufficiently achieved all of my set goals. The first goal came with
            the eventual familiarity of the code base, the second was due to
            some much needed sitdown sessions with our product designer, and the
            last was through almost every piece of code I wrote during this
            placement.
            <br />
            Starting with the first goal, I was pretty well versed with
            Javascript and full stack web development through past experiences
            and my own experimentation, but I really wanted to get more
            experience with backend code. At Taplytics we were using the
            familiar NodeJS and Express for most of our APIs, but we also had a
            bunch of other techologies that I have never worked with, so this
            was a great learning experience. Some of these included Redis for
            deduping/caching, Kafka for data interconnectivity, and MongoDB,
            Postgres, Cassandra and Vertica for data storage. I was lucky enough
            to interact and touch almost all of these technologies, during which
            I was able to learn how they worked and also achieve my goal. One
            task that stood out was being able to implement and test a new Redis
            library that gave us the ability to connect to multiple different
            Redis clusters, and also provided us a clean and concise interface
            to interact through. Although I did not write the library, I still
            learned the ins and outs of how it worked and how we utilized Redis
            in our codebase. This was a neat challenge as it was something I
            have never done before and was not directly writing code to solve a
            problem. I was adapting legacy solutions to work with our new
            system, and also learned about how we can adapt code for future
            maintainability. I also wanted to mention how cool Kafka is and that
            this is something I am definitely going to be working with in the
            future. Through these experiences I feel that goal one was most
            definitely accomplished.
            <br />
            The second goal was something I probably could have worked on
            anywhere, but after seeing how our product designer pumped content
            out left and right, I really wanted to pick his brain and learn
            more. Being a web developer I have lots of experience on the
            frontend, but I still don't have very strong design skills. Most of
            the time you get a design handed to you to implement, so I do not
            recognize what makes something a good UX vs a bad UX. The first
            session was basically a design review, in which he reviewed a
            feature I was implementing. This was much like a code review, but we
            focused on the user and how they interact with the feature. This is
            something that I would not have usually done, and incorporating
            design review into development is incredibly useful. When asking how
            I can come up with creative and elegant designs, he recommended the
            use of a component library (which we use at Taplytics!) and also
            sketching designs out first. Much like planning code, you need to
            plan your design. Component libraries let you be consistent and
            build on top of other component, while sketching things on paper and
            actually interacting with them gives you a sense of how it "feels"
            to use the design, and any obvious pain points. I have actually
            learned about paper-prototyping in school, so this was a great
            reminder to actually practice it. Most of my (personal) designs are
            shoddily cobbled together, and I forgo actually thinking about how
            the user will feel using these, so his advice was very welcomed.
            Throughout these sessions I feel like my design capabilities have
            definitely improved, and I am actively adhering to the advice I was
            given when developing UI's. Goal #2 check!
            <br />
            My last goal relates to something that most developers agree is
            absolutely necessary, but sometimes forgotten. I personally have
            never been as involved in testing as I have been at Taplytics, so
            this was a great experience. I have written tests for my code
            before, but have never been absolutely comfortable with being able
            to consistently test the functionality I was implementing. This
            changed when I was able to gain experience with Jest, Enzyme, K6 and
            Cypress. I have used Jest to write simple unit tests, but nothing
            like the integration and end to end tests using Enzyme and Cypress I
            was able to create here. I gained a lot of experience with Jest's
            more advanced features including function and module mocking,
            timers, asynchronous testing and utilizing the test output! I had
            never worked with Enzyme or Cypress before this placement, so
            gaining this experience was great. Enzyme allows you to render your
            component(s) that will be used in your test, and lets you actually
            interact with the DOM to simulate a real user. This was way more
            involved than Jest's unit tests, and was really useful to be able to
            write mini DOM integration tests. Lastly, learning about Cypress and
            how this framework works really topped this testing goal off.
            Cypress lets you write real end to end tests, that let you
            programmatically interact with whatever you are testing, and
            automatically assert conditions on the subject. Think of it as a
            better and less flaky selenium. This was so cool to learn about, as
            we setup helpers that would mimic functionality in our web app, and
            we could lay out these Cypress "chainables" that would string
            together actions in our test that would act as a real person
            interacting with the app. I will talk more about Cypress + K6
            testing in my featured aspect, but overall I'm really happy with the
            amount of testing experience I was able to gain. 3 for 3!
            <br />
            <br />
          </span>
          <StyledImage src={TaplyticsDesk} />
          <div style={{ fontSize: 15 }}>
            <i>My workstation</i>
          </div>
          <br />
          <span id="Description">
            <span style={{ fontFamily: "opensans-bold" }}>
              Job Description:{" "}
            </span>
            I joined Taplytics as a "Full Stack" developer, and that was pretty
            true to what I was doing! I was touching all parts of the product
            (frontent, backend, infra) and from what I have experienced so far,
            I really enjoy being more of a fullstack developer that has
            knowledge of how everything works together. I believe having a broad
            understanding of the codebase really helps when developing features,
            and gives you lots of valuable context. I was placed on team
            Delissio (because we were the <i>delivery </i> team 🍕) where we
            worked to deliver features to one of our main clients. This was
            pretty cool as I got to work directly with the people utilizing our
            software, and was able to see how we moved from product requests -->
            development --> delivery on a regular cadence. My day to day
            consisted of a daily standup where the team coordinated on what we
            were doing for the day and if there were any blockers, meetings if
            there were any, and development! We had a pretty solid agile process
            in which we conducted 1 week sprints, with a grooming, planning and
            retro per sprint. I have done the usual agile plan + retro but this
            was nice to have a grooming considering our close involvement with
            clients. The grooming would set us up for development right away and
            we could discuss any unknowns or blockers that came up with our
            definition of Ready.
            <br />
            One thing that was interesting/unique about my job was probably the
            whole product, and the sheer scale at which we were working with.
            This has been one of the most interesting products I have been able
            to help build, and the scale at which we operate was insane to see.
            Some journeys that clients would run could have millions of users
            passing through them, and everything needed to work exactly as
            specified down to the minute. For a little more context on what
            these "Journeys" are, a Journey is basically simulating some sort of
            campaign or user journey through a website/app. You start by
            selecting an audience (based on any user attribute that is available
            in your data source), and then add other nodes for each user to pass
            down. Check the Journey example below for how this might work, and
            the power you can unlock by crafting Journeys based on any use case.
            <StyledImage src={TaplyticsJourney} />
            <div style={{ fontSize: 15 }}>
              <i>
                A simple journey that filters users based on state, adds a
                delay, then sends an email OR A/B tests the other filtered
                users, sends stream A an email, sends stream B a push and exits.
                This is just an example of how you have complete control over
                what your users see and recieve based on attributes clients can
                configure themselves.
              </i>
            </div>
            <br />
            Some of the skills that I needed to succeed at this job were
            obviously some prior web dev/Javascript knowledge, but also a
            passion to learn. I had already had practice with React/Redux and
            Node/Express + Mongo/Postgres which was definitely a plus, but the
            rest of our Backend stack was completely new to me. I really love to
            learn new things and want to do the very best I can at any job I’m
            placed in, so in my opinion a motivation to learn is one of the best
            skills you can have for any job. Software design classes had also
            prepared me for agile and scrum team environments, so I understood
            our practices and methodologies almost right off the bat!
            <br />
            Some skills that I gained during this placement happened to align
            pretty well with the goals that I set for myself. I learned about
            more backend infrastructure and how to work at such big scale, I
            improved on my design skills and I got way better at testing! I
            contribute most of my success to the great resources I had available
            at my disposal, and the tight-knitness of the team/company. I was
            able to go and talk to any other developer when I had questions or
            concerns, and I was really able to influence what I wanted to work
            on. If I was interested in learning or getting more experience with
            something, I could usually get to work on it!
            <br />
            <br />
          </span>
          <StyledImage src={TaplyticsHome} />
          <div style={{ fontSize: 15 }}>
            <i>
              My
              <b>
                <i> home </i>
              </b>
              workstation!
            </i>
          </div>
          <br />
          <span id="Relation">
            <span style={{ fontFamily: "opensans-bold" }}>
              Academic Relation:{" "}
            </span>
            Relating this job back to my degree and studies, I feel both
            positively impact each other and enhance my learning greatly. There
            were some experiences and concepts I had learned before this
            placement that positively affected my work experience, and what I
            have learned from this placement will also allow me to further
            succeed in my next co-op and school terms. Taplytics was a fantastic
            co-op placement and I have learned a lot that I will take with me
            throughout my career. I would also like to highlight the importance
            of relationships, and how that is one thing that sometimes gets
            missed in the academic portion. I was lucky enough to know a few
            people here at Taplytics that I had worked with before, and that was
            how I eventually got put in contact with recruiting, and eventually
            landed the job. Without making (and keeping!) these connections, I
            probably would not have been working here today. I think its
            valuable to not only be a great developer as a co-op, but also be a
            social and good person to stay connected with. You never know when
            the connections you have made might help you out later!
            <br />
            <br />
          </span>
          <span id="Featured">
            <span style={{ fontFamily: "opensans-bold" }}>
              Featured Aspect:{" "}
            </span>
            One aspect of this work term that I would like to focus on and talk
            a little bit more about is the Javascript end to end testing
            framework, Cypress. This was the first time I have ever used this
            framework, but it will not be the last as I think this is an
            immensely useful tool. Cypress is an open source, front-end testing
            tool, built for the modern web that allows interaction with the DOM
            in order to test certain functionality with your web application.
            <StyledVideo src={TaplyticsE2E} autoPlay controls />
            <div style={{ fontSize: 15 }}>
              <i>An example end to end journey simulation running in Cypress</i>
            </div>
            <br />
            As you can see, this test actually interacts with the application,
            and is a simulated user. It actually visits pages, clicks, interacts
            with inputs and can send and wait for requests. It really is a cool
            framework that allows some super in depth testing to be done. A lot
            of the tests you would do with Cypress are smaller integration tests
            that depend solely on the frontend. In the test above, we have this
            set up so it creates and runs a journey on our frontend web app and
            also polls our event database to check that the journey actually
            runs and succeeds! This is something I was working on near the tail
            end of my placement, and our goal is to have this run nightly and or
            on every PR just so we have that extra level of confidence. This is
            just one usecase that we have for Cypress, but we use it in a
            multitude of other ways as well. In the following code snippets,
            I'll show you how to setup a super simple Cypress automated test!
            <pre>
              <code className="language-html">
                {`
                  <!DOCTYPE html>
                    <html>
                      <body>
                        <h1 data-test-id="title">Cypress Test!</h1>

                        <button
                          type="button"
                          onclick="document.getElementById('demo').innerHTML = 'This is a test!'"
                        >
                          Click me
                        </button>

                        <p id="demo"></p>
                      </body>
                    </html>
                `}
              </code>
            </pre>
            <div style={{ fontSize: 15 }}>
              <i>
                Say we have this super simple web page. This is what we will be
                testing! As you can see we have a few different elements and
                some attributes (like data-test-id) that will come in handy
                later!
              </i>
            </div>
            <br />
            Our Cypress Test:
            <pre>
              <code className="language-javascript">
                {`
                  describe("Test Cypress Test", function () {
                    it("should visit the test page and interact with it", function () {
                      // visit the web page
                      cy.visit("./cypress/pages/test.html");

                      // check the title for the correct title
                      cy.get("[data-test-id='title']").contains("Cypress Test!");

                      // check our button and click it!
                      cy.get(".main-button").then(($btn) => {
                        cy.wrap($btn).should("not.be.disabled");
                        cy.wrap($btn).click();
                      });

                      // check that our button did what it should have
                      cy.get("#demo").contains("This is a test!");
                    });
                  });
                `}
              </code>
            </pre>
            We do a few things in this test, but it is all super simple. This is
            just showcasing some of the features available to use within the
            Cypress framework. Right off the bat we can notice that it is setup
            very much like every other JS assertion library, and this was done
            on purpose. They made it very understandable and use the familiar
            testing language like "describes" and "it", as well as using some
            own human readable methods that we will get into. The next thing
            that is nice is that the test(s) will be layed out in a top to
            bottom readable fashion, and this is largely because of Cypress'
            chainables. They act very much like Javascript's native promises,
            and will allow you to do asynchronous actions either by yourself, or
            abstracted away through the framework with ease. The main basis of
            these tests are grabbing DOM elements, and interacting with them.
            Cypress lets you get elements in a multitude of ways, and we do so
            here with the <code>cy.get()</code> command, that lets us use any
            selector we choose (id, class, custom attribute), as demonstrated in
            this test. Cypress asserts on all checks we have in the test, and
            will fail if any one of these are not met. On a failure you can also
            set retry intervals to try the test again, but that is usually not
            needed if you write the tests to not be flakey.
            <br />
            Adding custom Cypress chainables:
            <pre>
              <code className="language-javascript">
                {`
                  export const addDelayToJourney = (delay: number) => {
                    // Create email
                    cy.get(getDataTestIdSelector('delayJourneyNodeInList')).click()
                    cy.wait(2000)
                    cy.get(getDataTestIdSelector('delayJourneyNode'))
                      .last()
                      .trigger('mousedown', { force: true })
                      .trigger('mouseup', { force: true })
                    cy.get('.editButton').trigger('mousedown', { force: true })
                    cy.get(getDataTestIdSelector('delayInput'))
                      .clear()
                      .type(\`\${delay}\`)
                    cy.get(getDataTestIdSelector('delayDropdown'))
                      .first()
                      .click()
                    cy.get(getDataTestIdSelector('dropdownOption'))
                      .last()
                      .click()
                    cy.get(getDataTestIdSelector('modalFooterConfirmBtn'))
                      .first()
                      .click()
                    return cy
                  }

                  Cypress.Commands.add('tlAddDelayToJourney', addDelayToJourney)


                  it('should create a journey with a delay and start the journey', function() {
                    cy.tlCreateJourneyWithUi(journey)
                      .tlAddDelayToJourney(1)
                      .tlStartJourney()
                  });
                `}
              </code>
            </pre>
            <br />
            You really have no idea what your response is going to look like in
            JS but Go code self-documents. I really enjoyed that aspect and very
            rarely did I have to print something to stdout to see what the
            structure is going to look like, whereas debugging my JS usually
            involves a lot of console.log’s. Because of working with Golang this
            term, I have decided to switch to Typescript for all of my future
            web projects, as I cannot live without typing anymore!
            <br />
            <br />
          </span>
          <span id="Conclusion">
            <span style={{ fontFamily: "opensans-bold" }}>Conclusion: </span>
            League has been an unreal experience and I could not have asked for
            a better placement. The work I was able to achieve over these 4
            months was exciting, challenging and rewarding. I have learned so
            much as both a person, and developer, I will take what I have
            experienced this term throughout my career! Not to mention the work
            I was doing, but the people I was able to interact with were
            awesome. Not one person I asked for help would turn me away, and
            everyone always wanted to see me succeed, no matter what. The
            mentorship provided to me throughout this placement was remarkable.
            Now I would just like to thank some people who have made this
            placement unforgettable. Daniel for being my league mate and a great
            knowledge base, Damien for being an amazing manager and leader, Anne
            for running a fantastic student program and Connor for ultimately
            giving me this opportunity! Thanks to everyone at League who made
            this term really great. I hope to be back one day!
            <br />
            <br />
          </span>
          <span id="Extras">
            <span style={{ fontFamily: "opensans-bold" }}>Extras: </span>
            As mentioned, I have a few extra things to share here regarding my
            term at League. I would like to talk a little bit more about my
            custom League Integration Tool, as well as share a blog post written
            about League’s engineering co-ops!
            <br />
            <br />
            <StyledText fontWeight="bold">League Integration Tool</StyledText>
            <br />
            <StyledImage src={WorkatoTool} />
            This tool was created as an attempt to improve our current
            integration recipe creation and update process. As a quick recap, we
            at League used an integration service that required integration
            recipes to be written containing logic regarding how the integration
            flow would go. We would write these recipes, save them and let the
            integrations run continuously. We tested them the best we could
            within the framework’s capabilities, but there was still room for
            error. I wanted all of our recipe creation and updates to go through
            a formal review process that would at least add one more step
            between the development and deploy state. Above all else we would
            also be able to capture everything in Git to use as a
            backup/rollback, or to see exactly who made changes when. My
            proposed solution to this would be to use a custom tool that wrapped
            all of the backup and review process in an easy to use and intuitive
            platform. Here is what the tool looked like: … The tool was built
            using electron and react/redux, as well as utilizing isomorphic git
            and Github’s + Integration platform’s APIs under the hood. As a
            recipe developer, you have two flows to go down. The edit recipe
            will allow you to edit a current recipe running in production. Once
            the ID of the recipe you wish to edit is entered, the tool will
            clone the current running recipe and switch all connectors over to
            our test environment. The recipe will be developed and tested, and
            then once the developer is confident in the recipe, they will ask
            for a review from the tool. The tool creates a PR to our repository
            and awaits a review. Once the recipe has been approved, you can go
            ahead and merge the recipe from the tool. After requesting the merge
            from the tool, the PR gets merged into the repo, and the dev recipe
            with all of the new changes will seamlessly get merged back into the
            currently running parent recipe. The same goes for the new recipe
            flow, except the recipe is created and tested, but then once the
            review passes the recipe is only added to git, as the recipe was
            already created on our integration platform. There was still lots of
            work to do when I left, but hopefully it was a step in the right
            direction!
            <br />
            <StyledText fontWeight="bold">League Engineering Co-ops</StyledText>
            <br />
            One other amazing thing that I got to participate in while at League
            was the League Student Program. This program set us up to meet some
            amazing people in League, learn how to grow our careers, make some
            awesome connections and ultimately get more out of our placement.
            You can learn some more about the student program and the other
            engineering co-ops by checking out{" "}
            <StyledLink
              href="https://medium.com/inside-league/the-student-series-meet-leagues-legendary-engineering-co-ops-9d2039c5b394"
              color="#00a5ff"
              target="_blank"
            >
              THIS
            </StyledLink>{" "}
            article!
            <StyledLink
              href="https://medium.com/inside-league/the-student-series-meet-leagues-legendary-engineering-co-ops-9d2039c5b394"
              target="_blank>"
            >
              <StyledImage src={LeagueCoops} />
            </StyledLink>
            <br />
            <br />
          </span>
        </StyledText>
      </StyledArticleWrapper>
    </StyledWrapper>
  );
};

export default TaplyticsTerm;
