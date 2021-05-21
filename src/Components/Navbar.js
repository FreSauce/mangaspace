import { useDispatch } from "react-redux";
import { getQuery } from "../store/actions";
import {Link} from "react-router-dom";
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
      <Navbar.Brand href="#home" className="font-weight-500">
        Manga.Space
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link><Nav.Link href="#home">Home</Nav.Link></Link>
        <Link><Nav.Link href="#link">About</Nav.Link></Link>
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
