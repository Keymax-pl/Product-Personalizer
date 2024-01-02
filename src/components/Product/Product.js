import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = ({title, basePrice, colors, sizes, name}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => {
    return basePrice + sizes.find(s => s.name === currentSize).additionalPrice;
  }, [basePrice, sizes, currentSize]);


  return (
    <article className={styles.product}>
       <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm 
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        price={price}
        sizes={sizes}
        colors={colors}
        title={title}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Product;