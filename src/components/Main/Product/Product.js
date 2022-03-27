import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../../styles/Main/Product/Product.css';

const Product = () => {
    return (
        <section className='product'>
            <section className='product_image'>
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