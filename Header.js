import React ,{Fragment}from 'react' ;
import HeaderCartButton from './HeaderCartButton';
import Mealspic from '../../Assets/meals.jpg';
import classes from './Header.module.css';
const Header=(props)=>{
return(<Fragment>
    <header className={classes.header}>
<h1>desi Chuhan</h1>
<HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
<img  src={Mealspic}  alt="table full of dishesh"  />

    </div>
</Fragment>)
}
export default Header;