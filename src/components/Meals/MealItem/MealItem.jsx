import React, { useContext } from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/Cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$ ${props.price.toFixed(2)}`;
  //앞의 $는 문자열. ${props.price} 외부에서 가져온 props
  //.toFixed(n) 소수점 n번째 자리까지만 출력

  //context에 전달하는 함수(인자값은 MealItemForm에서 value를 받아옴)
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      amount:amount,
      name:props.name,
      price:props.price, //원화 제외한 원본 상태(가격만)
      id:props.id
    })
  }


  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        {/*
        <div className={classes.price}>{props.price}</div>
        그냥 가져올 때는 {props.price}인데, 앞에 $붙여서 price로 지정.
        */}
      </div>
      <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /></div>
    </li>
  )
}

export default MealItem

