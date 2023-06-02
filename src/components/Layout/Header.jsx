import React from 'react';
import classes from './Header.module.css';
import mealsImg from "../../assert/meals.jpeg"
import HeaderCartButton from './HeaderCartButton';
/* public에 놓고 일반 웹페이지 내에서 이미지 가져오듯이 사용할 수도 있음 */

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onclick = {props.onShowCart} />
        {/* onClick 이벤트 아닌, 함수명 임시지정한 것 */}
      </header>
      <div className={classes["main-image"]}>
      {/* main-image 클래스는 안에 -가 있어서(-를 텍스트로 인식함) 클래스로 못 씀.
      그래서 배열처리[] 해 줌 */}
        <img src={mealsImg} alt="meals" />
      </div>
    </>
  )
}

export default Header;