import { Card,Col, Row} from "react-bootstrap";

const Vegcard = ({ data }) => {
  return (
    <Row xs={1} s={1} md={2} lg={3}  className="g-4">
  {Array.from({ length: 6 }).map((_,idx ) => (
    <Col>
      <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Item</Card.Title>
          <Card.Text>
              Tastes soo good
              <br/>
            Date: 
            22/02/22
              <br/>
            Price: 
            £2
            <br/>
            location: Birmingham
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  );
};

export default  Vegcard;

//
