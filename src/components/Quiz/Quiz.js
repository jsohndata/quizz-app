import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import quizData from "../../data/quiz.json";
import QuizCard from "./QuizCard.js";
import QuizResult from "./QuizResult.js";
import useBgRandom from "../../hooks/useBgRandom.js";
import "./quiz.css";

export default function Quiz() {
  const [showResult, setShowResult] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const handleBgChange = useBgRandom();

  const quizLength = quizData.length;

  const handleAnswer = isCorrect => {
    if (isCorrect) setScore(score + 1);

    const newQuestionId = questionId + 1;
    (newQuestionId < quizLength) 
      ? setQuestionId(newQuestionId)
      : setShowResult(true);

      handleBgChange();
  }

  const handleReset = () => {
    setShowResult(false);
    setQuestionId(0);
    setScore(0);
  };

  return (
    <Container aria-label="Quiz">
      <Row className="justify-content-md-center">
        {showResult 
          ? (<QuizResult
              score={score}
              quizLength={quizLength}
              handleReset={handleReset} />) 
          : (<QuizCard
              quizData={quizData}
              questionId={questionId}
              quizLength={quizLength}
              handleAnswer={handleAnswer} />)
        }
      </Row>
    </Container>
  );
}
