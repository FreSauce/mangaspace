import { useDispatch } from "react-redux";
import { getQuery } from "../store/actions";
import {NavLink} from "react-router-dom";
import {
  Navbar,
  Nav,
  // NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

export default function Navigation() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getQuery(e.target[0].value));
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={NavLink} to="/" className="font-weight-500">
        Manga.Space
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        {/* <Nav.Link as={NavLink} to="/">About</Nav.Link> */}
        </Nav>
        <Form inline onSubmit={submitHandler}>
          <FormControl
            name="results"
            type="text"
            size="sm"
            placeholder="Search"
            className="mr-3 rounded-pill"
          />
          <Button
            type="submit"
            variant="success"
            size="sm"
            className="rounded-pill"
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
