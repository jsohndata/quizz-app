export default function QuizCard (props) {
    const quizData = props.quizData
    const questionId = props.questionId
    const handleAnswer = props.handleAnswer
    const quizLength = props.quizLength
    // console.table(quizData)

    return (
        <>
            <h2>Quiz {questionId+1}/{quizLength}</h2>
            <p>{quizData[questionId].question}</p>
            <ul>
                {quizData[questionId].options.map( (element,id) => {
                    return <li 
                        key={"option-"+id}
                        onClick={ () => handleAnswer(element.isCorrect) }>{element.answer}</li>
                })}                
            </ul>
        </>
    )
}
