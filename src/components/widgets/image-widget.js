import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        deleteWidget,
        updateWidget
    }) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(widget)

    return (
        <div>
            <h2>Image Widget</h2>
            {
                editing &&
                <div>
                    <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateWidget(itemCache)
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>

                    URL
                    <input
                        onChange={(e) => setItemCache(itemCache => ({...itemCache, src: e.target.value}))}
                        value={itemCache.src} className="form-control"/>
                    width
                    <input
                        onChange={(e) => setItemCache(itemCache => ({...itemCache, width: e.target.value}))}
                        value={itemCache.width} className="form-control"/>
                    height
                    <input
                        onChange={(e) => setItemCache(itemCache => ({...itemCache, height: e.target.value}))}
                        value={itemCache.height} className="form-control"/>
                </div>
            }

            {
                !editing &&
                <div>
                    <img width={itemCache.width} height={itemCache.height} src={itemCache.src}
                          alt={itemCache.name}/>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </div>

            }
        </div>
    )
}

export default ImageWidget
