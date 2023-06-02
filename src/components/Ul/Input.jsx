import React, { forwardRef } from 'react'
import classes from './Input.module.css'

/* forwardRef
전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달할때 함수부분을 감싸서 사용
https://react.dev/reference/react/forwardRef

*/

const Input = forwardRef((props,ref) => {
  //🍋 forwardRef, ref 부분 추가. props에 괄호쳐줌
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} >{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
})
/*
//규약에 상관없이 한다면 이렇게.
//단, MealItemForm.jsx에서 가져올때, ref={amountInputRef} 대신에 ref=aa로 해줘야 함.
const Input = props => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} >{props.label}</label>
      <input ref={props.aa} {...props.input} />
    </div>
  )
}
*/

export default Input