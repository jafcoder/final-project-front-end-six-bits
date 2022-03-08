import { Card, Col, Row } from "react-bootstrap";
import cucumber from "../../public/images/cucumber.jpg";
import Image from "next/image";
import css from "../../styles/userpost.module.css";
import {FaTrashAlt} from "react-icons/fa";

function UserPost({ data, action }) {
  
  console.log(data);
  return (
    <div className={css.container}>
      <div className={css.postDisplay}>
        <Row xs={1} s={1} md={2} lg={3} className="g-4">
          {Array.from({ length: data.length }).map((_, idx) => (
            <Col key={idx}>
              <Card
                style={{
                  boxShadow: "1px 1px grey",
                }}
              >
               <button className={css.deleteBtn} onClick={()=>action(data[idx].post_id)}><FaTrashAlt/></button>
                <Image
                  variant="top"
                  alt={data[idx]?.title}
                  src={cucumber}
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
                  <Card.Title>{data[idx]?.title}</Card.Title>
                  <Card.Text>{data[idx]?.description}</Card.Text>
                  <Card.Text>{data[idx]?.date}</Card.Text>
                  <Card.Text>£{data[idx]?.price}</Card.Text>
                  <Card.Text>{data[idx]?.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    </div>
  );
}

export default UserPost;
