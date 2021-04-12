import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {

    const [answer, setAnswer] = useState(null)
    return(
        <div>
            <h4>
                {question.question}

                {
                    answer && question.correct === "true" &&
                    <i className="fas fa-check"></i>
                }
                {
                    !answer && question.correct === "false" &&
                    <i className="fas fa-check"></i>
                }
                {
                    !answer && question.correct === "true" &&
                    <i className="fas fa-times"></i>
                }
                {
                    answer && question.correct === "false" &&
                    <i className="fas fa-times"></i>
                }

            </h4>
            <br/>
            <label className="btn btn-primary">
                <input type="radio"
                onClick={() => setAnswer(true)}
                name={question._id}/>
                True
            </label>
            <br/>
            <label className="btn btn-secondary">
                <input type="radio" onClick={() => setAnswer(false)}
                name={question._id}/>
                False
            </label>
            <div class="form-row">

                <h5>Your answer:  </h5>
                {JSON.stringify(answer)}
            </div>


        </div>
    )
}

export default TrueFalseQuestion
