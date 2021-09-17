import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 12;

  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;
  const [mode, setmode] = useState("light")
  const [darkmodeStyle, setDarkmodeStyle] = useState({
    backgroundColor:"white",
    color:"black",
  });
  
  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor="#0d1117";
      setDarkmodeStyle({
        backgroundColor:"#0d1117",
        color:"#c9d1d9",
      });
    }
    else {
      setmode('light');
      document.body.style.backgroundColor="white";
      setDarkmodeStyle({
        backgroundColor:"white",
        color:"black",
      });
    }
  }

  return (
    <div>
      <Router>
        <NavBar mode={mode} togglemode={togglemode} />
        <LoadingBar
          height={3}
          shadow="true"
          color="#f11946"
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              darkmodeStyle={darkmodeStyle}
              mode={mode}

            />{" "}
          </Route>
          <Route exact path="/business">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
          <Route exact path="/entertainment">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
          <Route exact path="/health">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
          <Route exact path="/general">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
          <Route exact path="/science">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
          <Route exact path="/sports">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
          <Route exact path="/technology">
            {" "}
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              darkmodeStyle={darkmodeStyle}
              mode={mode}
            />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
