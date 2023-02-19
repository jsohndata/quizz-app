import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


export default function QuizCard ({quizData, questionId, handleAnswer,quizLength} ) {
    // console.table(quizData)

    return (
        <section aria-label="Quiz">
            <h2>Quiz {questionId+1}/{quizLength}</h2>
            <h3>{quizData[questionId].question}</h3>
            <ul>
                {quizData[questionId].options.map( (element,id) => {
                    return <li 
                        key={"option-"+id}
                        onClick={ () => handleAnswer(element.isCorrect) }>{element.answer}</li>
                })}                
            </ul>
        </section>
    )
}
