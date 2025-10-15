import React from 'react'
import './Breadcrums.css'

const Breadcrums = (props) => {
    const product = props.product[0];
    return (
        <div className='breadcrums'>
            <p>shop &gt; {product.category.toLowerCase()} &gt; {product.name.split(" ").pop().toLowerCase()}</p>
        </div>
    )
}

export default Breadcrums