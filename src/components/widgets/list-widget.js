import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(widget)

    return (
        <div>
            <h2>List Widget</h2>

            {
                !editing &&
                    <>
                        <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map(item => {
                                        return (<li>{item}</li>)
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map(item => {
                                        return(<li>{item}</li>)
                                    })
                                }
                            </ul>
                        }
                    </>
            }
            {
                editing &&
                <div>
                    <i onClick={() => setEditing(false)} className="fas fa-edit float-right"></i>
                    <input type="checkbox"/>
                    Ordered
                    <br/>
                    List Items

                    <textarea rows={10}
                        onChange={(e) => setItemCache(itemCache => ({...itemCache, text: e.target.value}))}
                        value={itemCache.text}
                        className="form-control">

                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget
