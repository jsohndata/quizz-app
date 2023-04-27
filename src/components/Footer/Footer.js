import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    const github = "https://github.com/jsohndata/quizz-app";

    return (
        <footer className="container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <a href={github} target="_blank" rel="noreferrer" >
                        <img src="https://jsohndata.github.io/quizz-app/images/logo-github.svg" alt="Github" />
                        <p><small>Code in Github</small></p>
                    </a>
                </Col>
            </Row>
        </footer>
    )
}