import React, {useState} from 'react'

const HeadingWidget = (
    {
        widget,
        deleteWidget,
        updateWidget
    }) => {

    const [itemCache, setItemCache] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (

        <div>

            <h4>Heading Widget</h4>

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
                    <input
                        onChange={(e) => setItemCache(itemCache => ({...itemCache, title: e.target.value}))}
                        value={itemCache.title} className="form-control"/>
                    <select onChange={(e) => setItemCache(
                        itemCache => ({...itemCache, type: e.target.value}))}
                            value={itemCache.type} className="form-control">
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        <option value={"HEADING"}>HEADING</option>
                    </select>
                    <select onChange={(e) => setItemCache(
                        itemCache => ({...itemCache, size: parseInt(e.target.value)}))}
                            value={itemCache.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
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

export default HeadingWidget
