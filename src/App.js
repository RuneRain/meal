import { useState } from 'react';
import Cart from './components/Cart/Cart'
//cart 추가. Modal에 감싸인 cart
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'
//import Modal from './components/Ul/Modal';
//단순하게 보이려고 해준거라 주석처리함.
import CartProvider from './store/CartProvider'

import './App.css';
/* css내에 있는 함수들(색상관련) 이곳저곳에서 쓸 때,
맨 하단에 해주는 것이 옳은 표기 */


function App() {
  const [cartInShow,setCartInShow] = useState(false);
  //cart modal 창의 상태관리(여닫음)
  //false 일단 안 보이는 상태로 만들어줌.

  //cart modal을 👉보이게👈 하는 함수
  const showCartHandler=()=>{
    setCartInShow(true)
  };

  //cart modal을 👉안 보이게👈 하는 함수
  const hideCartHandler = () => {
    setCartInShow(false)
  };

  return (
    <CartProvider>
      
      {cartInShow && <Cart onClose = {hideCartHandler} />}
      {/* cartInShow가 true일 때만 모달이 보임
      쓰면 편한데, 안 쓰는 사람이 더 많음.ㅠㅠ */}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
//Handler 마우스 이벤트 있는 곳에 많이 붙여씀
