import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import Routes from "./routes";

import "prismjs";
import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-go.js";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const firebaseConfig = {
  apiKey: "AIzaSyAB1eI1Oi4TTxvBKu0xiTQFYflwusxXMl4",
  authDomain: "alexmontague-ca.firebaseapp.com",
  databaseURL: "https://alexmontague-ca.firebaseio.com",
  projectId: "alexmontague-ca",
  storageBucket: "alexmontague-ca.appspot.com",
  messagingSenderId: "210831672685",
  appId: "1:210831672685:web:d0a405a05067031d9e0664",
  measurementId: "G-3TGBMS5PXY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "page_view", {
  window: window.location.pathname + window.location.search,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>{Routes}</BrowserRouter>
      </div>
    );
  }
}

export default App;
