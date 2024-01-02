import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor.js';
import OptionSize from '../OptionSize/OptionSize.js';
import Button from '../Button/Button.js';

const ProductForm = ({ 
    currentSize,
    setCurrentSize,
    sizes,
    currentColor,
    setCurrentColor,
    colors,
    price,
    title,
  }) => {

    const addToCart = (e) => {
        e.preventDefault();
        console.log('name', title);
        console.log('price', price);
        console.log('color', currentColor);
        console.log('size', currentSize);
    
      }
    
    return (
        <form onSubmit = {addToCart}>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
            <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
      </form>
    );  
  };

  ProductForm.propTypes = {
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
};

export default ProductForm;