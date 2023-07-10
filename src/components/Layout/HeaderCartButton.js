import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css' ;

const HeaderCartButton = props => {
    return <button className= {classes.button}>
        {/* 1st span wrap ICON , 2nd-Text ,3rd- total no of items */}
        <span className= {classes.icon}> <CartIcon /></span> 
        <span>Your Cart</span>
        <span className={classes.badge}>2</span>
    </button>
};

export default HeaderCartButton;