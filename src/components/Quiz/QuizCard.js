import Col from "react-bootstrap/Col";

export default function QuizCard({ quizData, questionId, handleAnswer, quizLength, }) {
  // console.table(quizData)
  return (
        <Col md={6} className="quiz-card">
          <h2><span>({questionId + 1}/{quizLength})</span> {quizData[questionId].question}</h2>
          <ul>
            {quizData[questionId].options.map((element, id) => {
              return (
                <li
                  key={"option-" + id}
                  onClick={() => handleAnswer(element.isCorrect)}
                >
                  {element.answer}
                </li>
              );
            })}
          </ul>
        </Col>
  );
}
