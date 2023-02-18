export default function QuizResult ({quizLength, score, handleReset}) {

    return(
        <>
            <h2>Quiz Result</h2>
            <p>You scored {score} out of {quizLength}</p>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}