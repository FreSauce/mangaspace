import {  useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getManga } from "../store/actions";
import { useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import classes from "./mangaTitles.module.css";
import ChapRead from "./ChapRead";

const MangaDetails = () => {
  const { manid: id, chapid } = useParams();
  const mangaDetails = useSelector((state) => state.manga.mangaDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManga(id));
  }, [dispatch, id]);
  console.log()
  console.log(mangaDetails);
  if (!mangaDetails || mangaDetails.id !== id) {
    return null;
  }
  if (chapid) 
  {
    return(
      <ChapRead chapid={chapid} manid={id} pages={mangaDetails.chapList[chapid].pages} hash={mangaDetails.chapList[chapid].hash}/>
    );
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

              {Object.keys(mangaDetails.chapList).map((key, value) => (
                <Row key={key}>
                    <Col xs={12} md={8} lg={8} className="my-1">
                  <Link to={"/manga/"+id+"/"+mangaDetails.chapList[key].id} style={{ textDecoration: 'none', textColor: 'none' }}>
                    <Card className={"shadow border-0 h-100 " + classes.card}>
                        <Card.Body className="bg-transparent border-0">
                        <Card.Text>
                            Chapter {mangaDetails.chapList[key].chapter} {mangaDetails.chapList[key].title}
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </Link>
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
