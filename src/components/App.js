import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Details from "../containers/Details";
import Watched from "./Watched";
import ToWatch from "../containers/ToWatch";
import Search from "../containers/Search";
import Wrapper from "./Wrapper";
import "../sass/main.scss";

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Wrapper>
          <Route exact path='/' component={LandingPage} />
          <Route path='/search/:query?' component={Search} />
          <Route path='/details/:id' component={Details} />
          <Route path='/watched' component={Watched} />
          <Route path='/to-watch' component={ToWatch} />
        </Wrapper>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
