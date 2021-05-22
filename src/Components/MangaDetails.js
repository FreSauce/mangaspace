import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getManga } from "../store/actions";
import { useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import classes from "./mangaTitles.module.css";

const MangaDetails = () => {
  const { id } = useParams();
  const mangaDetails = useSelector((state) => state.manga.mangaDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManga(id));
  }, [dispatch, id]);

  console.log(mangaDetails);
  if (!mangaDetails || mangaDetails.id !== id) {
    return null;
  }
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8} lg={8} className="my-4">
          <Card className={"shadow border-0 h-100 " + classes.card}>
            <Card.Header className="bg-transparent border-0">
              <Card.Title>{mangaDetails.title}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {mangaDetails.description.substring(
                  0,
                  mangaDetails.description.indexOf("[")
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} lg={8} className="my-4">
          <Card className={"shadow border-0 h-100 " + classes.card}>
            <Card.Header className="bg-transparent border-0">
              <Card.Title>Chapters</Card.Title>
            </Card.Header>
            <Card.Body>
              {mangaDetails.chapList.map((chap) => (
                <Row>
                    <Col xs={12} md={8} lg={8} className="my-1">
                  <Card className={"shadow border-0 h-100 " + classes.card}>
                      <Card.Body className="bg-transparent border-0">

                      <Card.Text>
                          Chapter {chap.chapter} {chap.title}
                        </Card.Text>
                      </Card.Body>
                  </Card>
                    </Col>
                </Row>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MangaDetails;
