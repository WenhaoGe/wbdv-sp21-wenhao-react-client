import React from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {

    return(
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setWidget({...widget, title: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget
