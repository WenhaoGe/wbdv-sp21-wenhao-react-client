import React, {useState} from 'react'

const ParagraphWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(widget)

    return(

        <div>
            <h4>Widget Paragraph</h4>

            { widget.size === 1 && <h1>{widget.title}</h1>}
            { widget.size === 2 && <h2>{widget.title}</h2>}
            { widget.size === 3 && <h3>{widget.title}</h3>}
            { widget.size === 4 && <h4>{widget.title}</h4>}
            { widget.size === 5 && <h5>{widget.title}</h5>}
            { widget.size === 6 && <h6>{widget.title}</h6>}

            {
                editing &&
                <div>
                    <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateWidget(itemCache)
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>
                    <textarea
                        onChange={(e) => setItemCache(itemCache => ({...itemCache, title: e.target.value}))}
                        value={itemCache.title}
                        className="form-control"></textarea>
                    <select onChange={(e) => setItemCache(
                        widget => ({...widget, size: parseInt(e.target.value)}))}
                            value={widget.type} className="form-control">
                        <option value="PARAGRAPH">PARAGRAPH</option>
                        <option value="HEADING">HEADING</option>

                    </select>
                </div>
            }
            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
            }
        </div>
    )
}

export default ParagraphWidget
