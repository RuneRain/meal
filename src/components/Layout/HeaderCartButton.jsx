import React, {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/Cart-context'

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const {items} = cartCtx;
  
  useEffect(()=>{
    if(items.length===0){return}
    setBtnIsHigh(true);
    const timer = setTimeout(()=>{
      setBtnIsHigh(false)
    },300)

    return () => {
      clearTimeout(timer);
    }
  },[items])

  const btnClass = `${classes.button} ? ${btnIsHigh ? classes.bump: ''}`
  const numberOfCartIntems = items.reduce((sum,item)=>{
    return sum += item.amount;
  },0)

  return (
    <button className={btnClass} onClick={props.onclick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartIntems}</span>
    </button>
  )
}

export default HeaderCartButton