import Col from "react-bootstrap/Col";

export default function QuizResult ({quizLength, score, handleReset}) {

    return (
        <Col md={6} className="quiz-card text-center">
            <h2>Your Result</h2>
            <p>Thank you for taking the quiz! All quiz materials are from <a href="https://www.javatpoint.com/reactjs-mcq" target="_blank" rel="noreferrer">javatpoint.com/reactjs-mcq</a>.</p>
            <p>You scored <span className="score">{score}</span> out of {quizLength}.</p>
            <button onClick={handleReset}>Reset</button>
        </Col>
  );    
}