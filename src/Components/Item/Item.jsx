import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="product" />
                <p>{props.name}</p>
                <div className="price">
                    <div className='new'>${props.newPrice}</div>
                    <div className='old'>${props.oldPrice}</div>
                </div>
            </Link>
        </div>
    )
}

export default Item