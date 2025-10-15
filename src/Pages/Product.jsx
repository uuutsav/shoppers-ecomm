import React, { useContext } from 'react'
import './styles/Product.css'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
    const { all_product } = useContext(ShopContext);
    const productId = useParams().productID;
    const product = all_product.filter(e => e.id === Number(productId));
    return (
        <div className='product'>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
        </div>
    )
}

export default Product