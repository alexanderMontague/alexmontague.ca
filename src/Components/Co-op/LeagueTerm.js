import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";

import LeagueLogo from "../../assets/icons/league-icon.png";
import LeaguePic from "../../assets/Terms/League/alex_league.png";

import LeagueLobby from "../../assets/Terms/League/league_lobby.png";
import LeagueCoops from "../../assets/Terms/League/co-ops.png";
import LeagueTimeline from "../../assets/Terms/League/league_timeline.png";
import WorkatoTool from "../../assets/Terms/League/league_workato_tool.png";

let isDirectLink;

if (isDirectLink !== true) {
  isDirectLink = false;
}

window.onscroll = () => {
  const currPosition = window.pageYOffset;
  if (window.location.pathname.includes("co-op/league")) {
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
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  margin: ${props => props.margin};

  @media (max-width: 761px) {
    flex-direction: ${props => props.mobileFlexDirection || "column"};
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
  color: ${props => props.color || "#b7b7b7"} !important;
  font-size: ${props => props.fontSize || "1em"} !important;
  font-family: ${props => props.fontFamily || "opensans-bold"} !important;
  line-height: 25px;

  &:hover {
    color: ${props => props.hoverColor || "#00a5ff"} !important;
  }

  &:target {
    /* This is not working. TODO */
    color: "#00a5ff" !important;
  }
`;

const StyledText = styled.span`
  color: ${props => props.color || "#b7b7b7"};
  font-size: ${props => props.fontSize || "1em"};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.lineHeight || "25px"};
  z-index: 100;
  padding: ${props => props.padding};
  margin: ${props => props.margin || "0 0 20px 0"};
  font-weight: ${props => props.fontWeight || "normal"};

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  background: #ffffff;
`;

const StyledLine = styled.hr`
  margin: ${props => props.margin || "10px 0px"};
  border: solid #e3e3e3;
  border-width: 1px 0 0;
  clear: both;
  height: 0;
`;

const CoinsquareTerm = () => {
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
    extras: windowFragment === "#Extras" ? "#00a5ff" : "#b7b7b7"
  };

  const TableOfContentsHashHandler = hash => {
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
            League Inc - Transforming Employee Health Benefits
          </StyledText>
          <StyledImage
            src={LeagueLogo}
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
          May 2019 - August 2019
          <br />
        </StyledText>
        <StyledImage src={LeaguePic} />
        <hr />
        <StyledText>
          <span id="Intro">
            <span style={{ fontFamily: "opensans-bold" }}>Introduction: </span>
            Welcome to my second work term report! This placement has been an
            unreal experience and I have had a lot of fun, while meeting and
            working with a lot of great people. Throughout this report I will
            talk about the company I had my placement with, some goals I set for
            myself, and what the overall experience was like. I hope you enjoy,
            and for any other information feel free to contact me!
            <br />
            <br />
          </span>

          <span id="Info">
            <span style={{ fontFamily: "opensans-bold" }}>
              Employer Information:{" "}
            </span>
            For my second placement I was able to work at another Toronto based
            start-up called League Inc for a wonderful 4-month term. League is
            transforming the way people use and interact with their benefits
            through League’s intuitive platform. League is aiming to create the
            best and healthiest platform to select, manage and interact with
            your employer provided benefits. This was a super cool experience as
            I never had previous exposure to benefits or any health-related
            sectors, so this was a great opportunity. League was founded in 2014
            by serial entrepreneur Mike Serbinis along with COO Dan Leibu and
            CTO Dan Galperin. The trio previously worked together on Serbinis’
            other venture Kobo, where they later left to start League. League
            truly is all about creating a healthier future, and that is really
            reflected in their values and culture. Whether it is League’s
            in-house yoga to healthy snacks in the kitchen, I really enjoyed
            learning and working inside such a positive company. I was located
            in the Toronto office as a Full Stack Developer on the Integrations
            Team, but League also has offices in Chicago, and the Philippines!
            <br />
            <br />
          </span>

          <span id="Goals">
            <span style={{ fontFamily: "opensans-bold" }}>Goals: </span>
            For this placement I created 3 goals for myself to hopefully achieve
            by the end of this placement. Two goals revolved around our tech
            stack as that was what I was really interested in learning, but I
            also left an open-ended goal pertaining to improving a current
            process at League. I was uncertain of how exactly these goals would
            play out, but I was motivated and committed to learn, grow and work
            my hardest to achieve them!
            <ol>
              <li>
                Create, PR, and Deploy my first “real” frontend ticket into the
                League frontend repository
              </li>
              <li>
                Write, Test, and Merge first Golang feature into the League
                services repository
              </li>
              <li>
                Identify some current process at League that could be made
                better, and ultimately execute a plan to make that process
                better than it was before
              </li>
            </ol>
            I was happy to report that at the end of the term I successfully
            accomplished all of my set goals. The first two goals eventually
            came with time and more exposure to the codebase, where the third
            goal was definitely the most difficult to fulfil. For the first goal
            I was able to develop and ship my first “real” frontend feature
            within the first two weeks. My definition of “real” was not just
            copy pasting existing code, but actually coming up with a solution
            and implementation from scratch. I was lucky enough to have prior
            knowledge and experience with production level React/Redux, so this
            was not too difficult to implement. It was interesting to see how
            League’s React conventions differed from my last company, and that
            took some time to get used to but was also welcomed. For my second
            goal, this was something I was very eager to achieve. I have never
            written a single line of Go before my time at League, and honestly
            did not even know what type of language it was, or how it worked.
            The first few weeks were just spent learning the language and its
            quirks, but within the first month I was able to ship my first piece
            of Golang code. It was by no means anything special, but it was a
            fantastic learning experience and great introduction to the
            language. My last goal was difficult to implement as I had no idea
            what process I would be improving on. As my time at League
            progressed I recognized a possible pain point and eventually settled
            on an improvement I felt was not only important, but also relevant
            to the team I was on. The process I saw was in the way we integrated
            employers onto our platform through an integration framework. We did
            this by basically writing recipes that contained logic to onboard,
            update and modify employees, but these recipes could get pretty long
            and intricate. I found a way to run the process of creating and
            updating these recipes through our Github repository, so we had a
            formalized review process set in place and a way to keep track of
            all of our changes through Git! I will talk about this a little bit
            more in the Extras section if you are interested in learning more.
            <br />
            <br />
          </span>

          <StyledImage src={LeagueLobby} />

          <span id="Description">
            <span style={{ fontFamily: "opensans-bold" }}>
              Job Description:{" "}
            </span>
            For this placement at League I joined the team as a Fullstack
            Developer on the Integrations team. I was excited to have the
            “Fullstack” responsibility as I was able to get Frontend experience
            at my last co-op, but only backend experience through my side
            projects. I was looking forward to working with some production
            level backend code, especially with a language I was unfamiliar
            with! On the integrations team we were tasked with integrating into
            employers’ Human Resources Integration Systems (like BambooHR or
            ADP) and using that data to onboard employees onto our platform.
            This works for us as it requires minimal effort on the employers’
            side and provides us with up to date and valid information. Our day
            to day duties consist of implementing features directly relating to
            the integration of employees, and includes crafting integration
            recipes, invoicing, reporting, and extending API capabilities. I
            personally got to work on some awesome features like E2E integration
            recipes, invoice redesigns, new admin tool functionality and some HR
            API updates along with a bunch of bug fixes! Overall the range of
            available tasks grew with my time and exposure to League’s product,
            and I was happy to learn and work on everything I touched!
            <br />
            One thing that was interesting/unique about my job was that I was
            directly involved with the integration process, and how it was such
            an important portion of our business. I was responsible for a lot of
            key components and it was an awesome experience to learn from. Being
            around the benefits space and learning more about how benefits
            actually worked was super cool as well. I can take that real-life
            knowledge with me throughout my career!
            <br />
            Some of the skills that I needed for this job were definitely some
            computer science basics, but also a passion to learn. I came in with
            some prior knowledge of our Frontend stack and MongoDB which was
            definitely a plus, but as for the rest of our Backend stack this was
            completely new to me. I really love to learn new things and want to
            do the very best I can at any job I’m placed in, so a motivation to
            learn is the best skill you can have for any job, including this
            one. Software design classes had also prepared me for agile and
            scrum team environments, so I understood our practices and
            methodologies almost right off the bat! Some skills that I learned
            while on the job were developing clean and concise Go code, as well
            as some higher-level platform and architecture things. When you are
            involved heavily in the backend, you also start to learn why and how
            we set our architecture up in the way we did.
            <br />
            <br />
          </span>

          <StyledImage src={LeagueTimeline} />

          <span id="Relation">
            <span style={{ fontFamily: "opensans-bold" }}>
              Academic Relation:{" "}
            </span>
            Relating this job back to my degree and studies, I feel both
            positively impact each other and enhance my learning greatly. There
            were some experiences and concepts I had learned before this
            placement that positively affected my work experience, and what I
            have learned from this placement will also allow me to further
            succeed in my next school term. League was a fantastic co-op
            placement and League’s established student program was also so
            useful to go through. Getting to meet other current co-ops and
            engineers that were previously co-ops was super neat as I got to see
            how they progressed through their careers. This insight alone was
            invaluable, and I met some amazing people that gave me some amazing
            advice. I think the degree in itself is definitely important, but
            the experience is really what shapes and grows the student. After
            only 2 placements I can say the real-world knowledge I have gained
            throughout them has been exponentially more relevant than what we
            learn in school. School teaches you “how to learn” and work lets you
            put those learning skills to use.
            <br />
            <br />
          </span>

          <span id="Featured">
            <span style={{ fontFamily: "opensans-bold" }}>
              Featured Aspect:{" "}
            </span>
            One aspect of this work term that I would like to focus on and talk
            a little bit more about is how Golang works and what it looks like!
            Go was super new to me and coming from an “anything goes” language
            like Javascript, this was quite the change. But a good change it
            was! I fell in love with the strict + static typing and how definite
            things were. The Syntax was pretty similar to C which I am also
            pretty familiar with, so it was not too bad to pick up at all. Go is
            like a nicer, dynamic, garbage collected and concurrent C! Let’s see
            what a function that would add two numbers together and return the
            sum looks like in Javascript, and then in Go.
            <pre>
              <code className="language-javascript">
                {`
                  // JS
                  function addNums(x, y) {
                    return x + y;
                  }
                `}
              </code>
            </pre>
            <pre>
              <code className="language-go">
                {`
                  // Go
                  func addNums(x, y int) int {
                    return x + y
                  }
                `}
              </code>
            </pre>
            As you can see, Go defines the type of its arguments, and its return
            type. This does not just apply to functions and methods though,
            everything is statically typed when you define it! This was
            frustrating at first, but super helpful when using a smart IDE like
            Goland. It will show type errors before you even compile and lets
            you click through to type definitions, which was immensely helpful.
            Lets go back to our code example and see why I love strong types:
            <pre>
              <code className="language-javascript">
                {`
                  // JS
                  function addNums(x, y) {
                    return x + y;
                  }

                  let returnNum = addNums("uh oh!", 5);
                  console.log(returnNum);  // uh oh!5
                  typeof returnNum;        // string

                `}
              </code>
            </pre>
            <pre>
              <code className="language-go">
                {`
                  // Go
                  func addNums(x, y int) int {
                    return x + y
                  }

                  var returnNum = addNums("uh oh!", 5)
                  // cannot use "uh oh" (type string) as type int in argument to addNums
                `}
              </code>
            </pre>
            As we can see, Go shuts this down pretty quick, whereas this is
            perfectly legal in Javascript. Obviously there are some checks we
            can do in JS to prevent things like this from happening, but a type
            system prevents all this!
            <br />
            One thing that I also really liked was that Go has built in
            functionality and tooling. Go has a standard code format that
            everyone must abide by (called Gofmt), which makes PR notes about
            code styling irrelevant. Most people now use a JS library like
            prettier to format their code for the same reason, but it was cool
            to see that Go’s was internal and out of the box. One thing I also
            liked was that Go has an internal testing framework for unit tests.
            This also eliminates the need to search for multiple testing
            frameworks as this is a standard. There is also just something
            satisfying about creating components you know will never change, and
            if they do, you catch the problem right away! I can’t tell how many
            problems and bugs I have had due to weak and dynamic typing causing
            unexpected behaviour. Take a look at this example of ingesting JSON.
            <pre>
              <code className="language-javascript">
                {`
                  // JS
                  const response = \`  // mock JSON
                    {
                      "sex": "male",
                      "eyeColour": "blue",
                      "age": 21,
                      "location": {
                        "province": "Canada",
                        "city": "Toronto",
                        "address": "123 Street W."
                      }
                    }
                  \`

                  const newPerson = JSON.parse(response);  // parse/fetch data
                  // What is the newPerson structure without knowing?
                  // Extra data included in request would be passed along

                  // If address was not present, this would error out
                  console.log(newPerson.location.address)

                  // We should always explicitly state when we want to deal with numbers in JS
                  console.log(Number(newPerson.age))
                `}
              </code>
            </pre>
            <pre>
              <code className="language-go">
                {`
                  // Go
                  response := \`  // typing can be inferred!
                    {
                      "sex": "male",
                      "eyeColour": "blue",
                      "age": 21,
                      "location": {
                        "province": "Canada",
                        "city": "Toronto",
                        "address": "123 Street W."
                      }
                    }\`

                  // use JSON tags to specify field names!
                  type Person struct {
                    Sex       string            \`json:"sex"\`
                    EyeColour string            \`json:"eyeColour"\`
                    Age       int               \`json:"age"\`
                    Location  map[string]string \`json:"location"\`
                  }

                  var newPerson Person
                  json.Unmarshal([]byte(response), &newPerson) // parse data
                  // We know exactly what is going to be in newPerson

                  // We have confidence this is present and will not error unexpectedly
                  fmt.Println(newPerson.Location["address"])

                  // We know this is an integer!
                  fmt.Println(newPerson.Age)
                `}
              </code>
            </pre>
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

export default CoinsquareTerm;
