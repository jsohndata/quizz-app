export default function QuizCard ({quizData, questionId, handleAnswer,quizLength} ) {

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
