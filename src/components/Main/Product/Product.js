import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
                {console.log(product)}
                <img />
            </section>
            <section className='product_information'>
                <section className='product_information_top'></section>
                <section className='product_inforation_bottom'></section>
            </section>
        </section>
    );
};

export default Product;