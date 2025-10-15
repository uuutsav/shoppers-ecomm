import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <div className='newCollections' id='latest'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections