import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./mangaTitles.module.css";
import Markdown from "react-markdown";
import { getQuery } from "../store/actions";
export default function MangaTitles() {
  const mangaList = useSelector((state) => state.manga.mangaList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuery());
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        {mangaList?.map((manga) => (
          <Col xs={12} md={6} lg={3} className="my-4" key={manga.id}>
            <Card className={"shadow border-0 h-100 " + classes.card}>
              <Card.Header className="bg-transparent border-0">
                {manga.title.length <= 27 && (
                  <Card.Title>{manga.title}</Card.Title>
                )}
                {manga.title.length > 27 && (
                  <Card.Title>
                    {manga.title.substring(0, 27) + "..."}
                  </Card.Title>
                )}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Markdown
                    children={manga.description.substring(0, 150) + "..."}
                  />
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 px-0 pb-0">
                <Button as={Link} to={"/manga/"+manga.id} variant="primary" className={classes.detailsBtn}>
                  Show Details
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
