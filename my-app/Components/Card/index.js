import { Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import css from "../../styles/card.module.css";
import Accordion from "react-bootstrap/Accordion";

const Vegcard = ({ data, area }) => {
  const found = data.filter((v) => v.location === area);
  let length = found.length;

  if (length === 0 && area === "") {
    return (
      <div className={css.container}>
        <Row xs={2} s={2} md={2} lg={5} className="g-4">
          {Array.from({ length: data.length }).map((_, idx) => (
            <Col key={idx}>
              <Card
                style={{
                  boxShadow: "1px 1px grey",
                }}
              >
                <Image
                  variant="top"
                  alt={data[idx]?.title}
                  src={`/${data[idx]?.title}.png`}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  <Card.Title>
                    {data[idx]?.quantity} {data[idx]?.title}
                  </Card.Title>
                  <Card.Text>{data[idx]?.description}</Card.Text>
                  <Card.Text>{data[idx]?.date}</Card.Text>
                  <Card.Text>£{data[idx]?.price}</Card.Text>
                  <Card.Text>{data[idx]?.location}</Card.Text>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Contact the poster</Accordion.Header>
                      <Accordion.Body>
                        <div className={css.contactDetails}>
                          <p>Name: {data[idx]?.first_name}</p>
                          <p>Email: {data[idx]?.email}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  if (length === 0 && area !== "") {
    return (
      <div className={css.container}>
        <h2 className={css.missingText}>
          We couldn&apos;t find any posts for that location<br></br> so here are
          all the posts instead
        </h2>
        <Row id="cardContainer" xs={2} s={2} md={2} lg={5} className="g-4">
          {Array.from({ length: data.length }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Image
                  variant="top"
                  alt={data[idx]?.title}
                  src={`/${data[idx]?.title}.png`}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  <Card.Title>
                    {data[idx]?.quantity} {data[idx]?.title}
                  </Card.Title>
                  <Card.Text>{data[idx]?.description}</Card.Text>
                  <Card.Text>{data[idx]?.date}</Card.Text>
                  <Card.Text>£{data[idx]?.price}</Card.Text>
                  <Card.Text>{data[idx]?.location}</Card.Text>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Contact the poster</Accordion.Header>
                      <Accordion.Body>
                        <div className={css.contactDetails}>
                          <p>Name: {data[idx]?.first_name}</p>
                          <p>Email: {data[idx]?.email}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  if (length > 0) {
    return (
      <div className={css.container}>
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          id="cardContainer"
          xs={2}
          s={2}
          md={2}
          lg={5}
          className="g-4"
        >
          {Array.from({ length: length }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Image
                  variant="top"
                  alt={found[idx]?.title}
                  src={`/${data[idx]?.title}.png`}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  <Card.Title>
                    {found[idx]?.quantity} {found[idx]?.title}
                  </Card.Title>
                  <Card.Text>{found[idx]?.description}</Card.Text>
                  <Card.Text>{found[idx]?.date}</Card.Text>
                  <Card.Text>£{found[idx]?.price}</Card.Text>
                  <Card.Text>{found[idx]?.location}</Card.Text>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Contact the poster</Accordion.Header>
                      <Accordion.Body>
                        <div className={css.contactDetails}>
                          <p>Name: {found[idx]?.first_name}</p>
                          <p>Email: {found[idx]?.email}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};

export default Vegcard;

//
// {location === "-" ? (
//   <Vegcard data={data} />
// ) : (
//   <Vegcard  data={data} location={location} />
// )}
