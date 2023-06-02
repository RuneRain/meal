import React, { useRef } from 'react'
import Input from '../../Ul/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {

  //🍋 3.ref를 통해서 입력된 값을 받아옴(특정 DOM을 선택시 사용)
  const amountInputRef = useRef();
  
  //🍋 1.
  const submitHandler = (e) => {
    e.preventDefault();
    //add버튼 눌렀을 때 새로고침 효과(화면 재로딩)나는 것을 방지.
    const enterdAmount = amountInputRef.current.value;
    console.log(enterdAmount)
    //console.log(typeof enterdAmount); //문자열인지
    //console.log(typeof enterdAmountNumber); 숫자열인지

    /* 최신 버전. 숫자열로 바꿔줌 */
    const enterdAmountNumber = +enterdAmount
    console.log(typeof enterdAmountNumber);

    //🍋 4. 유효성 검사
    if(enterdAmount.trim().length===0 || enterdAmount<1 || enterdAmount>5){
      return;
    }
     props.onAddToCart(enterdAmountNumber);
     //수량을 onAddToCart의 인자값으로 넘김.
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/*
      onSubmit 클릭하면 발생하는 이벤트
      <input type="number" min="1" max="5" defaultValue="1" step="1" id={props.id}
      Input으로 따로 만들지 않았을 때. />

      🍋 2.하단의 input이 html 아니라서 props로 보내는 부분 추가.
      ref={amountInputRef}
      */}
      <Input label="Amount" ref={amountInputRef}
        input={{
          id:"amount_"+props.id,
          type:"number",
          min:"1",
          max:"5",
          defaultValue:"1",
          step:"1"
      }} />      
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm