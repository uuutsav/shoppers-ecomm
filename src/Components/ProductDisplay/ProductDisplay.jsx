import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import starDull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const rating = Math.floor(Math.random() * 500);

const ProductDisplay = (props) => {

    const product = props.product[0];
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                    <img src={product.image} alt="product" />
                </div>
                <div className="productDisplay-img-main">
                    <img src={product.image} alt="product" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-stars">
                    <img src={star} alt="product" />
                    <img src={star} alt="product" />
                    <img src={star} alt="product" />
                    <img src={star} alt="product" />
                    <img src={starDull} alt="product" />
                    <p>{rating}</p>
                </div>
                <div className="productDisplay-price">
                    <div className='new'>${product.new_price}</div>
                    <div className='old'>${product.old_price}</div>
                </div>
                <div className="productDisplay-desc">
                    <h1>Description:</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae magnam maiores laboriosam est adipisci asperiores exercitationem? Laborum molestiae esse sapiente, aperiam accusantium nam, deserunt saepe ut minima necessitatibus consequuntur sunt.</p>
                </div>
                <div className="productDisplay-size">
                    <h1>Select Size:</h1>
                    <div>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
                <button className='addToCart' onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <div className="productDisplay-category"><span>Category: </span>{product.category.toLowerCase()}, {product.name.split(" ").pop().toLowerCase()}</div>
                <div className="productDisplay-tags"><span>Tags: </span>latest, {product.category.toLowerCase()}, fashion, {product.name.split(" ").pop().toLowerCase()}</div>
            </div>
        </div>
    )
}

export default ProductDisplay