import React from "react";
//{createContext} 할 필요없이 저 상태에서 해줘도 됨.
//context랑 provider랑 같이 써줘도 되는데. 양이 많아서 별도로 만들어줬음

//컨텍스트 생성, 컨텍스트 안에 데이터가 있음
const CartContext = React.createContext({
  items:[],
  //아이템이 보이는 배열
  totalAmount:0,
  //총 금액
  addItem:(item)=>{},//해당 아이템을 만들어줌
  removeItem:(id)=>{}//해당아이템 가져와서 지워줌
});

export default CartContext;
/*
장바구니 항목 초기값
export const CartContext = React.createContext({
  items:[],
  //아이템이 보이는 배열
  totalAmount:0,
  //총 금액
  addItem:(item)=>{},//해당 아이템을 만들어줌
  removeItem:(id)=>{}//해당아이템 가져와서 지워줌
});
*/

//해당 폴더 이름이 store인 이유는 공식에서도 그래서.
//context 폴더 만들 때에는 store 이름으로 만들 것.