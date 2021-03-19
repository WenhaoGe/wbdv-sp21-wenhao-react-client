import React, {useState} from 'react'

const ParagraphWidget = ({widget}) => {

    const [editing, setEditing] = useState(false)

    return(
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setEditing({...widget, title: e.target.value})}
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
