import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x
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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
