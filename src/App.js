import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import Navigation from "./Components/Navbar";
import MangaTitles from "./Components/MangaTitles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./store";
import MangaDetails from "./Components/MangaDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Container fluid>
            <Row>
              <Switch>
                <Route exact path="/">
                  <Col lg={12} className="my-2">
                    <h3 className="margin">Featured Manga</h3>
                    <MangaTitles />
                  </Col>
                </Route>
                <Route path="/manga/:manid/:chapid?">
                  <Col lg={12} className="my-2">
                    <h1>Hello</h1>
                    <MangaDetails />
                  </Col>
                </Route>
              </Switch>
            </Row>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
