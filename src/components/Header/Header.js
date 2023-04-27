import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <header className="container fluid" aria-label="Quizz App">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1>Quizz App</h1>
        </Col>
      </Row>
    </header>
  );
}
