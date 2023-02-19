import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import quizData from "../../data/quiz.json";
import QuizCard from "./QuizCard.js";
import QuizResult from "./QuizResult.js";
import useBgRandom from "../../hooks/useBgRandom.js"
import "./quiz.css"

export default function Quiz () {
    const[showResult, setShowResult] = useState(false);
    const[questionId, setQuestionId] = useState(0);
    const[score, setScore] = useState(0);
    const quizLength = quizData.length;
    const handleBgChange = useBgRandom();

    const handleAnswer = (isCorrect) => {
        if (isCorrect === true) setScore(score + 1);
        console.log({score});

        const newQuestionId = questionId + 1;   
        
        handleBgChange();
                
        if (newQuestionId < quizLength) {
            setQuestionId(newQuestionId);
        } else { 
            setShowResult(true); }
    }

    const handleReset = () => {
        setShowResult(false);
        setQuestionId(0);
        setScore(0);
    }

    return (
        <Container aria-label="Quiz">
            <Row className="justify-content-md-center">
            {(showResult)
                ? ( <QuizResult
                        score={score}
                        quizLength={quizLength}
                        handleReset={handleReset} /> )
                : ( <QuizCard 
                        quizData={quizData}
                        questionId={questionId}
                        quizLength={quizLength}
                        handleAnswer={handleAnswer} /> )}
            </Row>
        </Container>        
    )
}