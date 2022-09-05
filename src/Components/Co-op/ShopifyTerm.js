import React, { useEffect } from "react";
import * as Prism from "prismjs";
import styled from "styled-components";

import ShopifyLogo from "../../assets/icons/shopify-icon.png";
import ShopifySelfie from "../../assets/Terms/Shopify/shopify_selfie.png";
import ShopifyMVC from "../../assets/Terms/Shopify/shopify_mvc.jpg";
import ShopifyWorkStation from "../../assets/Terms/Shopify/shopify_workstation.png";
import ShopifyBillNye from "../../assets/Terms/Shopify/shopify_bill_nye.png";
import ShopifyTeam from "../../assets/Terms/Shopify/shopify_team.jpg";
import ShopifyContext from "../../assets/Terms/Shopify/shopify_context.png";
import ShopifyGraphql from "../../assets/Terms/Shopify/shopify_graphql.jpg";
import ShopifyPR from "../../assets/Terms/Shopify/shopify_PR.png";

import "prismjs/components/prism-json";
import "prismjs/components/prism-graphql";

const renderJavascriptBuyButton = () => {
  /*<![CDATA[*/
  (function () {
    var scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: "software-swag.myshopify.com",
        storefrontAccessToken: "c26c9faf2adecb2c15af384cd02ad8a0",
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("collection", {
          id: "157550313494",
          node: document.getElementById("collection-component-1597761206575"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    width: "calc(25% - 20px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    "padding-top": "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                button: {
                  ":hover": {
                    "background-color": "#4ca43b",
                  },
                  "background-color": "#54b641",
                  ":focus": {
                    "background-color": "#4ca43b",
                  },
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  ":hover": {
                    "background-color": "#4ca43b",
                  },
                  "background-color": "#54b641",
                  ":focus": {
                    "background-color": "#4ca43b",
                  },
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            cart: {
              styles: {
                button: {
                  ":hover": {
                    "background-color": "#4ca43b",
                  },
                  "background-color": "#54b641",
                  ":focus": {
                    "background-color": "#4ca43b",
                  },
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#54b641",
                  ":hover": {
                    "background-color": "#4ca43b",
                  },
                  ":focus": {
                    "background-color": "#4ca43b",
                  },
                },
              },
            },
          },
        });
      });
    }
  })();
  /*]]>*/
};

let isDirectLink;

if (isDirectLink !== true) {
  isDirectLink = false;
}

window.onscroll = () => {
  const currPosition = window.pageYOffset;
  if (window.location.pathname.includes("co-op/shopify")) {
    const introHeight = document.getElementById("Intro")?.offsetTop;
    const infoHeight = document.getElementById("Info")?.offsetTop;
    const goalsHeight = document.getElementById("Goals")?.offsetTop;
    const descriptionHeight = document.getElementById("Description")?.offsetTop;
    const relationHeight = document.getElementById("Relation")?.offsetTop;
    const featuredHeight = document.getElementById("Featured")?.offsetTop;
    const conclusionHeight = document.getElementById("Conclusion")?.offsetTop;
    const extrasHeight = document.getElementById("Extras")?.offsetTop;

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
  max-width: 80;
`;

const StyledVideo = styled.video`
  width: ${props => props.width || "100%"};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  max-width: 80;
`;

const StyledLine = styled.hr`
  margin: ${props => props.margin || "10px 0px"};
  border: solid #e3e3e3;
  border-width: 1px 0 0;
  clear: both;
  height: 0;
`;

const ShopifyTerm = () => {
  useEffect(() => {
    Prism.highlightAll();
    // renderJavascriptBuyButton();
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
            Shopify - Make Commerce Better for Everyone
          </StyledText>
          <StyledImage
            src={ShopifyLogo}
            height="50px"
            width="50px"
            borderRadius="30px"
            margin="0 0 0 15px"
          />
        </StyledWrapper>
        <StyledLine margin="10px 0px" />
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          Web Developer
          <br />
        </StyledText>
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          Toronto, Ontario, Canada
          <br />
        </StyledText>
        <StyledText lineHeight="50px" fontFamily="opensans-bold">
          May 2020 - August 2020
          <br />
        </StyledText>

        <StyledImage src={ShopifySelfie} />
        <div style={{ fontSize: 15 }}>
          <i>Shopify: Work from Home Edition</i>
        </div>

        <hr />
        <StyledText>
          <span id="Intro">
            <span style={{ fontFamily: "opensans-bold" }}>Introduction: </span>
            Welcome to my fourth and final work term report! This placement has
            been truly unique, but I have had such a great time and learned a
            bunch. I also got to meet and interact (virtually 😄) with some
            really great people. Throughout this report I will talk about the
            company I had my placement with, some goals I set for myself, and
            what the overall experience was like. I hope you enjoy, and for any
            other information feel free to contact me!
            <br />
            <br />
          </span>
          <span id="Info">
            <span style={{ fontFamily: "opensans-bold" }}>
              Employer Information:{" "}
            </span>
            For this placement I was <i>going</i> to be located in the Shopify
            Toronto office, an area I have become very familiar with these past
            co-op placements, but ended up working entirely remote from my home
            in Oakville. I joined Shopify as a Web Developer, for a short but
            absolutely rewarding 4 month term. This was my first time working at
            a company that people have actually heard the name of before (even
            if it was confused with Spotify lol), and the sheer scale at which
            we operated at really surprised me. Shopify is a commerce platform
            that allows anyone to set up an online store and sell their
            products. Merchants (the people who sell things and own the stores)
            can also sell their products in person with Shopify Point of Sale.
            Basically, Shopify enables anyone and everyone to create an
            ecommerce business, and start selling things they are passionate
            about. Shopify lets you setup your store, inventory, website and
            marketing all through an easy to use platform. Shopify also has a
            rich ecosystem of applications and add-ons that Merchants can use to
            level up their stores, and this was also the area my team operated
            in. Shopify was founded in 2004 by Tobias Lütke when he wanted to
            sell snowboards with his company at that time called Snowdevil. He
            quickly realized it was incredibly challenging to sell snowboards
            online without an easy to use ecommerce platform, so he decided to
            create one himself and Shopify was born. This has really been one of
            the most exciting placements so far, and I cannot believe the amount
            of growth we have gone through just from when I started! If you want
            to see what Shopify is all about, check them out!{" "}
            <StyledLink
              href="https://www.shopify.com"
              color="#00a5ff"
              target="_blank"
            >
              Shopify's Website
            </StyledLink>
            <br />
            <br />
          </span>
          <StyledImage src={ShopifyTeam} />
          <div style={{ fontSize: 15 }}>
            <i>My socially distanced team!</i>
          </div>
          <br />
          <span id="Goals">
            <span style={{ fontFamily: "opensans-bold" }}>Goals: </span>
            For this placement I created 3 goals for myself to achieve by the
            end of my co-op. My first goal surrounded learning a new data
            transfer technique that I have never even really heard of before, my
            second related to learning a new programming language + framework,
            and my third was learning more about ecommerce and the work behind
            creating a business. I was uncertain of how exactly these goals
            would play out (especially the third one!), but I was motivated and
            committed to learn, grow and work my hardest to achieve them.
            <ol>
              <li>Become proficient with using GraphQL at scale</li>
              <li>Learn about Ruby and how we use Ruby on Rails at Shopify</li>
              <li>
                Learn more about e-commerce and creating an online business.
              </li>
            </ol>
            I'm happy to report that at the end of the term I believe I
            sufficiently achieved all of my set goals. The first goal came with
            some learning on my own about how GraphQL is architected, the second
            was due to my eventual familiarity with the codebase, and the last
            was through opening up a business on Shopify, filling inventory,
            buying ads and selling stuff!
            <br />
            Starting with the first goal, I chose to learn about graphQL because
            it is pretty important in our development at Shopify, and I had also
            never used it in my previous work or side projects. The usual data
            transfer technique I would use when we want our front-end to
            communicate with our back-end is to use a RESTful API of some sort.
            As I learned, this is usually pretty good, but sometimes not good
            enough! The main difference between REST and GQL is that REST is an
            architectural concept for network-based software, where GraphQL is a
            query language, a specification, and a set of tools that operates
            over a single endpoint using HTTP. What usually ends up happening is
            you make one REST request, that corresponds with one "type" of
            resource. So if we wanted to get books, we could query{" "}
            <code>api.com/books?title=best%20book</code>. But what if we also
            wanted to get some info on the author of this book? Lets assume our
            book resource doesn't store the author, so we would get some info
            back that maybe looks like this:
            <pre>
              <code className="language-json">
                {`
    {
      "id": 10,
      "title": "best book",
      "ISBN": "978-3-16-148410-0"
      "authorID": 123
    }
                `}
              </code>
            </pre>
            We would then have to query our author endpoint with something like{" "}
            <code>api.com/authors?id=123</code>. This might not seem like that
            big of a deal, but the major problem is we're making multiple
            requests for multiple resources, and we're always going to get the
            maximum data back, even if we don't need it. Couple that with the
            scale Shopify operates at, and you could be making some seriously
            unefficient requests. The exact same information <i>could</i> be
            retrieved with a GraphQL query that looks like this:
            <pre>
              <code className="language-graphql">
                {`
    query GetBooksAndAuthors(title: "best book") {
      book {
        title
        ISBN
      }
      author {
        name
        dateOfBirth
      }
    }
                `}
              </code>
            </pre>
            In this query, we specify just the title of the book, and get ONLY
            the information we want back. Much nicer! It should be noted that
            this is just the specification, you will still be creating the
            resolvers and doing the data fetching on the back-end however you
            see fit.
            <br />
            <br />
            My second goal was about learning the programming language Ruby, and
            the web framework Ruby on Rails. I'm gonna be honest and say when
            learning Rails I thought it was a bunch of 🎩🔮✨magic. There were a
            bunch of built in helpers and hidden functionality that in the long
            run is super helpful and cuts down on boilerplate, but when learning
            can make things super confusing! Ruby on the other hand I enjoy a
            lot and in my mind is a more rigid Javascript. I like my scripty
            languages. Minus the magic, Rails also introduced the Model, View,
            Controller (MVC) pattern to me. I have never used anything that
            followed this model that strictly, but it is pretty cool. First you
            have your Model which is the Data Model in your Database. This
            determines what Objects or Data Structures are and what they look
            like. Next you have your controllers that house all of your routes
            and business logic. Lastly is the view which allows you to render
            your data and pages to the user! At Shopify we are mostly building
            our new pages in React/Typescript, but I still had to do a decent
            amount of work on our rails pages. I also needed to build out some
            back-end logic like our GraphQL resolvers, so it was well worth
            learning Ruby. I have been exposed to enough different languages and
            frameworks over the course of my co-ops that I think I can pick
            things up fairly quickly and know enough to make an impact, but I
            definitely want more time to master the language/framework. Overall
            I would call Goal #2 a success!
            <StyledImage src={ShopifyMVC} />
            <div style={{ fontSize: 15 }}>
              <i>The MVC Design Pattern</i>
            </div>
            <br />
            My last goal relates to learning more about ecommerce and what it
            takes to create a business. I usually have very specific technical
            or technically oriented goals for my self on co-ops, but I am
            getting more interested in the business side of things, and thought
            this would be the perfect placement to learn more. I initially
            thought it might just include creating a Shopify store and going
            from there, but little did I know how much work and planning
            actually went behind creating a business. I first had to come up
            with an idea (which I think is actually one of the hardest parts!)
            and then decide on how my business was going to operate. I actually
            decided to move forward with the initial shop idea I had when
            creating my onboarding Shopify store, because I thought it was neat
            🤷‍♂️. The product I came up with was selling different programming
            language logos and frameworks on different types of clothing, and
            ideally appealing to developers, product people, and passionate
            techies who want to rep their favourite swag. As a part of this
            venture, I had to create the initial products by using a third party
            to create the designs, purchase some base inventory, design and add
            the products to my Shopify store, and finally market and get the
            word out. Some interesting things I had to look into was that I had
            to first make sure I could actually use and sell these logos. From
            my research it was fine as most of the logos are under a free to use
            or creative commons license. I then had to figure out the best way
            to market my shop through facebook/instagram ads and select my
            target demographic, as I want to eventually make this profitable.
            Shopify graciously covered my base inventory of a few sweatshirts
            and the first week of advertising was enough to get the ball
            rolling. I hope to make this even better and more successful soon
            enough! I not only got to learn more about the inner workings of a
            business, but I was also able to empathize with our Merchants and
            experience what they go through each and every day. As easy and
            seamless as our platform is, you still need to put the work in! My
            store is{" "}
            <StyledLink
              href="https://software-swag.myshopify.com/"
              color="#00a5ff"
              target="_blank"
            >
              Software Swag
            </StyledLink>
            <br />
            <br />
            {/* <div style={{ fontSize: 15 }}>
              <i>A snippet of the Javascript Collection!</i>
            </div>
            <br />
            <div id="collection-component-1597761206575" /> */}
          </span>
          <br />
          <span id="Description">
            <span style={{ fontFamily: "opensans-bold" }}>
              Job Description:{" "}
            </span>
            I joined Shopify as an Intern Web Developer and that was pretty true
            to what I was doing! Lots of code, lots of web development. My team
            is usually working in the Partners repository where we maintain the
            Partners dashboard which is where (you guessed it) all of our
            Partners check in on their Stores, Apps, Themes and other
            Statistics. This is the heart of the Shopify Ecosystem, and where we
            allow lots of other developers to collaborate and hopefully have
            success in creating things for other Merchants to use. I really
            enjoy being a fullstack developer, as I believe this gives you a
            broad understanding of the codebase and really helps when developing
            features. I find this gives you the most context and easily allows
            you to understand how most things work, and this was very much what
            I was doing, as I was touching all sides of our codebase! My day to
            day usually consisted of a standup where the team coordinated on
            what we were doing for the day and if there were any blockers,
            meetings if there were any, and development! Our team was
            responsible for 2 main areas of work over the course of my
            placement, which were App Management and API Versioning. The App
            Management side dealt with our App portion of the dashboard, which
            is where partners would see the status of their developed apps and
            allow them to easily configure them. The Versioning side dealt with
            all the implications of deprecating and making sure Partners
            transitioned from old API versions, to new ones. I would do most of
            my work on the App Management side of things, but it was cool to
            learn about API Versioning as I never really thought about the
            implications of millions of consumers hitting the same API, and how
            you coordinate updates/changes to that API.
            <br />
            One thing that was interesting/unique about my job was probably
            learning about the Shopify Ecosystem and how that fit into our
            business model. I always knew Shopify as ecommerce and shops, but I
            didn't know anything about the Shopify App Store, Theme building or
            experts and their services. Regarding the apps side of things, it is
            super important as we develop the core Shopify functionality, but we
            also enable developers to create custom apps that interact with our
            service that ultimately makes our product better for Merchants,
            while also letting them generate revenue. It's a win-win!
            <StyledImage src={ShopifyWorkStation} />
            <div style={{ fontSize: 15 }}>
              <i>My at home workstation!</i>
            </div>
            <br />
            Some of the skills that I needed to succeed at this job were
            obviously some prior web dev/Javascript knowledge, but also a
            passion to learn. I already had practice with React which was
            definitely a plus, but using a strongly typed language like
            Typescript was totally new, as well as learning some new
            technologies like Ruby/Rails and GraphQL. I really love to learn new
            things and want to do the very best I can at any job I’m placed in,
            so in my opinion a motivation to learn is one of the best skills you
            can have for any job. Software design classes had also prepared me
            for agile and scrum team environments, so I understood our practices
            and methodologies right off the bat!
            <br />
            Some skills that I gained during this placement were definitely in
            line with the goals I set for myself. I was able to get some
            experience around new tech that I wanted to learn more about, and
            even gain some valuable business knowledge. I find learning about
            new tech and being able to understand something fairly quickly is
            invaluable in this field, especially in web development. I
            appreciate all of the experience I have gotten over the years to aid
            in my learning. I contribute most of my success to the great
            resources I had available at my disposal, and the helpful nature of
            the team/company. I was able to go and ping pretty much any other
            developer when I had questions or concerns, and I was really able to
            influence what I wanted to work on. If I was interested in learning
            or getting more experience with something, I would usually get the
            opportunity to work on it!
            <br />
            <br />
          </span>
          <StyledImage src={ShopifyContext} />
          <div style={{ fontSize: 15 }}>
            <i>
              Our internal portal that contained everything I needed to get
              going remotely and hit the ground running from the very start.
              This paired with our extensive developer documentation meant that
              most of my self learning could be done here, and any questions I
              had were usually answered already!
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
            succeed in my last school terms + working Full Time. Shopify was a
            fantastic co-op placement and I have learned a lot that I will take
            with me throughout my career. I would also like to highlight the
            importance of relationships, and how that may be one thing that gets
            missed when talking about the academic portion. I had always heard
            about Shopify and the great things coming from them, but without
            talking to a few other students that had done internships here, I
            would not have known how awesome of an experience it really was.
            Through my past co-op placements I was put in contact with some
            students I met at League (The company Shopify uses for benefits -{" "}
            <StyledLink
              href="https://www.alexmontague.ca/co-op/league"
              color="#00a5ff"
              target="_blank"
            >
              check it out
            </StyledLink>
            !), and they told me some really great things about Shopify. I think
            its valuable to not only be a great developer as a co-op, but also
            be a social and good person to stay connected with. You never know
            when the connections you have made might help you out later!
            <StyledImage src={ShopifyBillNye} />
            <div style={{ fontSize: 15 }}>
              <i>
                Not really that related to my academic relevancy, but Shopify
                actually setup a livestream with Bill Nye (The real Bill
                Nye!!!!) where he answered our submitted questions. It was super
                cool and brought me back to when I used to watch his show :).
              </i>
            </div>
            <br />
          </span>
          <span id="Featured">
            <span style={{ fontFamily: "opensans-bold" }}>
              Featured Aspect:{" "}
            </span>
            One aspect of this work term that I would like to focus on and talk
            a little bit more about is GraphQL. Even though I already touched on
            it a bit in the goals section, I thought this was hella cool and I
            will be considering using this over REST for the forseeable future.
            This was the first time I have ever used this technology, but it
            will not be the last as I think this is an immensely useful tool.
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. GraphQL provides a complete
            and understandable description of the data in your API, gives
            clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful
            developer tools
            <StyledImage src={ShopifyGraphql} />
            <div style={{ fontSize: 15 }}>
              <i>
                Why is it called <b>Graph</b>QL? Because the fields in our GQL
                query specify which edges should be followed in the application
                data graph to get our desired result. GraphQL is a query
                language that traverses your data graph to produce a query
                result tree. This is a visualization of a GraphQL schema and
                everything it might contain.
              </i>
            </div>
            To give the quick overview before you play around with GraphQL, GQL
            is not some magical data fetcher. There are two main parts to every
            GQL server that determine how it works. The GQL schema, and the
            resolvers. Your schema will basically determine the shape of the
            data. It defines what queries clients are allowed to make, what
            types of data can be fetched from the server, and what the
            relationships between these types are. A GQL schema could look like
            this:
            <pre>
              <code className="language-graphql">
                {`
    type Author {
      id: Int
      name: String
      dateOfBirth: String
      books: [Books]
    }

    type Book {
      id: Int
      title: String
      ISBN: String
      author: Author
    }

    type Query {
      getAuthor(id: Int): Author
      getBooks(titleContains: String): [Book]
    }

    schema {
      query: Query
    }
                `}
              </code>
            </pre>
            The schema is super simple, and consists of 3 types. The last type,{" "}
            <code>Query</code>, is just to mark the entry point into the schema.
            This schema also aligns with our example from earlier, so you can
            use this as a good reference. As you can also tell, these types
            reference each other. This schema just defines what shape the data
            is, and what relationships (in our 'graph') are allowed to be
            defined.
            <br />
            So this is great, but how do we actually get the data now? This is
            where resolvers come in. Resolver functions are like little routers.
            They specify how the types and fields in the schema are connected to
            various backends, answering the questions “How do I get the data for
            Authors?” and “Which backend do I need to call with what arguments
            to get the data for Books?”.
            <br />
            GraphQL resolve functions can contain arbitrary code, which means a
            GraphQL server can to talk to any kind of backend. For example, the
            Author type could be stored in a SQL database, while Books are
            stored in MongoDB, or even handled by a microservice. Perhaps the
            greatest feature of GraphQL is that it hides all of the backend
            complexity from clients. No matter how many backends your app uses,
            all the client will see is a single GraphQL endpoint with a simple,
            self-documenting API for your application.
            <br />
            This could be an example of our 2 resolver functions:
            <pre>
              <code className="language-javascript">
                {`
    getAuthor(_, args){
      return sql.raw('SELECT * FROM authors WHERE id = %s', args.id);
    }

    getBooks(author){
      return request(\`https://api.book.io/by_author/\${author.id}\`);
    }
                `}
              </code>
            </pre>
            As you can see, we get our data from 2 very different sources, but
            the end user won't know that. You also usually won't be writing raw
            SQL in the resolver function and will keep that in a separate
            module, but you get the point. From my experience, writing your
            resolver functions is definitely the most challenging part, but it
            gets easier with practice!
            <br />
            <br />
            <iframe
              style={{
                width: "100%",
                height: 600,
              }}
              src={"https://api.alexmontague.ca/graphiql"}
            />
            <div style={{ fontSize: 15 }}>
              <i>
                Play around with this example GraphiQL interface! It uses the
                same schemas defined in the examples. Try copy, pasting and
                running the below query!
              </i>
            </div>
            <pre>
              <code className="language-graphql">
                {`
    query getBooks{
      getBooks {
        id
        title
        isbn
        authorID
      }
    }
                `}
              </code>
            </pre>
            Hopefully you get the feel of GQL, and can see how powerful this
            framework really is!
          </span>
          <br />
          <br />
          <span id="Conclusion">
            <span style={{ fontFamily: "opensans-bold" }}>Conclusion: </span>
            Shopify has been an absolutely amazing placement and I could not
            have asked for more. I will take the experiences and skills I have
            gained here throughout my career. The work I was able to achieve
            over these 4 months was exciting, challenging and rewarding, not to
            mention the people I was able to interact with were also awesome.
            Not one person I asked for help would turn me away, and everyone
            always wanted to see me succeed. I was genuinely surprised to see
            the part of Shopify I would be working on when I joined, as I
            literally didn't even know we had an entire ecosystem that has such
            a big impact on our company and partners. It was super cool, and I
            learned so much. Some companies that use our product everyday are
            huge, so I really enjoyed building a service that some seriously
            influential companies utilize every day. Not just the giants though,
            seeing how we can help smaller partners be successful is just as, if
            not more rewarding. A big thank you goes out to some special people
            who made this Term fantastic. Mike for being a great manager and for
            taking me on the team, Theo + Thomas for being some super cool
            mentors and teaching me some kick-ass stuff, and the entire
            app-management team for being so welcoming, appreciating me, and
            just being awesome. Thanks again to everyone at Shopify, it has been
            really fun. I'll see everyone again in 2021! :)
            <br />
            <br />
          </span>
          <span id="Extras">
            <span style={{ fontFamily: "opensans-bold" }}>Extras: </span>
            As mentioned, I have a few extra things to share including one of
            the features I worked on and how the global pandemic affected this
            co-op term.
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <StyledImage src={ShopifyPR} />
            </div>
            <div style={{ fontSize: 15, textAlign: "center" }}>
              <i>
                I took on a ticket that eliminated the use of "whitelist" and
                "blacklist" in our Partners codebase.
              </i>
            </div>
            <br />
            This task came up after our initiative to make Shopify a more
            welcoming and diverse company. I'm all for that, and what better way
            to start by not only removing some dated language from our UI, but
            also our code. When I first saw this ticket on our board, I thought
            it wouldn't be too hard at all. A quick find + replace, rename some
            files, maybe fix a test or two and we're good! Boy was I wrong. What
            I failed to realize was that we had some DB columns containing this
            language, so after renaming everything, things broke 🛑. My first
            fix was to try and rename everything but the underlying connecting
            code that ultimately referenced the columns. This led to a very
            confusing debugging process where some values were getting passed,
            but I missed a few others because of the massive amount of
            occurrences. I ended up with removing about 95% of the references,
            but still have the DB connecting code to fix, as that requires
            migrations and a lot more work. Overall, it was a good challenge
            that let me explore our ruby code more, I removed this language from
            our UI and most of our code, and I contributed to making Shopify a
            better and more welcoming place for our Partners, and our
            Developers!
            <br />
            <br />
            <StyledText fontWeight="bold">
              Working At Home - COVID-19
            </StyledText>
            <br />
            If you want to read about my experiences working at a Digital by
            Default company and fully remote, check out{" "}
            <StyledLink
              href="https://medium.com/@xturnermonty/shopify-internship-work-from-home-edition-a53db44d5db0"
              color="#00a5ff"
              target="_blank"
            >
              this blog
            </StyledLink>{" "}
            I wrote!
          </span>
        </StyledText>
      </StyledArticleWrapper>
    </StyledWrapper>
  );
};

export default ShopifyTerm;
