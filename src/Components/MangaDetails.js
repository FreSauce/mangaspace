import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getManga } from "../store/actions";
import { useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import classes from "./mangaTitles.module.css";
import Markdown from "react-markdown";

const MangaDetails = () => {
  const { id } = useParams();
  const mangaDetails = useSelector((state) => state.manga.mangaDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManga(id));
  }, [dispatch, id]);

  console.log(mangaDetails);
  return (
    <Container fluid>
      <Row>
          <Col xs={12} md={12} lg={12} className="my-4">
            <Card className={"shadow border-0 h-100 " + classes.card}>
              <Card.Header className="bg-transparent border-0">
                  <Card.Title>{mangaDetails.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Markdown
                    children={mangaDetails.description}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default MangaDetails;
