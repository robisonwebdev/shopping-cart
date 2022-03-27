import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../../styles/Main/Product/Product.css';

const Product = () => {
    return (
        <section className='product'>
            <section className='product_image'></section>
            <section className='product_information'></section>
        </section>
    );
};

export default Product;