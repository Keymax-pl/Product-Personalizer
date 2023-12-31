import styles from './Product.module.scss';
import clsx from 'clsx';
import ProductImage from '../ProductImage/ProductImage';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({props, title, basePrice, colors, sizes, name}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    return basePrice + sizes.find(s => s.name === currentSize).additionalPrice
  }

  const addToCart = (e) => {
    e.preventDefault();
    console.log('name', name);
    console.log('price', getPrice());
    console.log('color', currentColor);
    console.log('size', currentSize);

  }



  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <article className={styles.product}>
       <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit = {addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key = {size.name}>
                  <button type="button"
                  className={clsx(currentSize === size.name && styles.active)}
                  onClick= {(e) => setCurrentSize(size.name)}
                  >
                  {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {colors.map(color =>
              <li key={color}>
                <button type="button" className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} 
                onClick={(e) => setCurrentColor(color)}/>
              </li>
            )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Product;