import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {

    const [answer, setAnswer] = useState(null)

    return (
        <div>
            <h4>
                {question.question}
                {/*{*/}
                {/*    answer === question.correct &&*/}
                {/*    <i className="fas fa-check"></i>*/}
                {/*}*/}
                {/*{*/}
                {/*    answer !== question.correct &&*/}
                {/*    <i className="fas fa-times"></i>*/}
                {/*}*/}
            </h4>

            {
                question.choice.map((each) => {
                    return(
                        <label className="form-control btn-link">
                            <input type="radio"
                            onClick={() => {
                                setAnswer(each)
                                question.answer = each
                            }}
                            name={question._id}/>
                            {each}
                        </label>

                    )
                })
            }

            <div className="form-row">
                <h5>Your answer: </h5>
                {JSON.stringify(answer)}
            </div>
            <br/>

        </div>
    )
}

export default MultipleChoiceQuestion
