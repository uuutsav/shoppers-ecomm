import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import crossIcon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext);

    return (
        <div className='cartItems'>
            <div className="cartItems-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className='cartItems-main cartItems-format'>
                                <img src={e.image} alt="" className='cartItems-product-image' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={crossIcon} alt="" onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartItems-total-items">
                            <p>Subtotal</p>
                            <p className='cartItems-totalAmount'>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <p>Shipping Fee</p>
                            <p className='cartItems-totalAmount'>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <p>Total</p>
                            <p className='cartItems-totalAmount'>${getTotalAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promo">
                    <p>Enter a promo code here, if you have</p>
                    <div className="cartItems-promobox">
                        <input type="text" name="promo" id="promo" placeholder='Promo Code' />
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems