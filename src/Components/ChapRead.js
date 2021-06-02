import { Container, Col, Row, Card, Image } from "react-bootstrap";
import classes from "./mangaTitles.module.css";
import { useEffect, useState } from "react";
import axios from 'axios';
const URL =
  process.env.NODE_ENV === "development"
    ? "https://api.mangadex.org"
    : "/cors-proxy/https://api.mangadex.org";



const ChapRead = ({chapid, manid, pages, hash}) => {
    const [base_url, setURL] = useState("");
    const getURL = async() => {
        const res = await axios.get(URL + "/at-home/server/" + chapid);
        console.log(res);
        setURL(res.data.baseUrl);
        
    };
    useEffect(() =>{
        getURL();
    },[chapid]);

    return ( 
        <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={10} className="my-4">
            <Card className={"shadow border-0 h-100 " + classes.card}>
              <Card.Header className="bg-transparent border-0">
                <Card.Title>Chapter id {chapid}</Card.Title>
              </Card.Header>
              <Card.Body>
                {pages.map(page =>(
                    <Image src={base_url + "/data-saver/"+hash+"/"+page} width="100%"  key={page} loading="lazy"/>
                ))}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
     );
}
 
export default ChapRead;