import QuizResult from "./QuizResult.js"
import QuizCard from "./QuizCard.js"
import { useState } from "react"

import quizData from "../../data/quiz.json"

export default function Quiz () {
    const[showResult, setShowResult] = useState(false);
    const[questionId, setQuestionId] = useState(0);
    const[score, setScore] = useState(0);
    const quizLength = quizData.length;

    const handleAnswer = (isCorrect) => {
        if (isCorrect === true) setScore(score + 1);
        console.log({score});

        const newQuestionId = questionId + 1 
        
        if (newQuestionId < quizLength) {
            setQuestionId(newQuestionId) 
        } else { 
            setShowResult(true) }
    }

    const handleReset = () => {
        setShowResult(false);
        setQuestionId(0);
        setScore(0);
    }

    return (
        <>
        <h1>Header</h1>
        {
            (showResult)
                ? ( <QuizResult
                        score={score}
                        quizLength={quizLength}
                        handleReset={handleReset} /> )
                : ( <QuizCard 
                        quizData={quizData}
                        questionId={questionId}
                        quizLength={quizLength}
                        handleAnswer={handleAnswer} /> )
            }
        </>
    )
}