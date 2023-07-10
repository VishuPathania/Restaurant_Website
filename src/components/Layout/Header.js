import {Fragment} from "react";
import mealsImage from '../../assets/meals.webp';
import classes from './Header.module.css' ;

const Header = props => {
    return <Fragment> 
        <header className={classes.header}>
            <h1>ReactVishuMeals</h1>
            <button>Cart</button>
        </header>
        <div className= {classes['main-image']}>
            <img src={mealsImage} alt='A table full of food as img not loaded'/>
        </div>
    </Fragment>
};

export default Header;