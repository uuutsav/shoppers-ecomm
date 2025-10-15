import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './styles/Category.css'
import Item from '../Components/Item/Item'

const Category = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className='category'>
            <img src={props.banner} alt="banner" />
            <div className="indexSort">
                <p><span>Showing 1-12</span> of {all_product.length} products</p>
            </div>
            <div className="products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    }
                    else {
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default Category