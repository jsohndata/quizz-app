import Col from "react-bootstrap/Col";

export default function QuizResult ({quizLength, score, handleReset}) {

    return (
        <Col md={6} className="quiz-card">
            <h2>Quiz Result</h2>
            <p>You scored {score} out of {quizLength}</p>
            <button onClick={handleReset}>Reset</button>
        </Col>
  );    
}