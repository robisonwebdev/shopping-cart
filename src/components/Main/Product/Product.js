import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddToCartButton from './AddToCartButton';
import Button from '../Button';
import products from '../../../products/productsInformation';
import '../../../styles/Main/Product/Product.css';

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProduct = useCallback(() => {
        const findProduct = products.find(value => value.id === id);

        setProduct(findProduct);
    }, [id]);

    useEffect(() => {
        getProduct();
    }, [getProduct]);

    return (
        <section className='product'>
            <section className='product_image'>
                <img src={product.image} alt={product.title} />
            </section>
            <section className='product_information'>
                <section className='product_information_top'>
                    <div className='product_details'>
                        <h2>{product.title}</h2>
                        <p>
                            <strong>About the house: </strong>
                            {product.description}
                        </p>
                    </div>
                    <AddToCartButton />
                </section>
                <section className='product_information_bottom'>
                    <Button className='proceed_to_cart_button' linkTo='/cart' text='Proceed To Cart' />
                    <Button className='go_back_button' linkTo='/shop' text='Go Back' />
                </section>
            </section>
        </section>
    );
};

export default Product;