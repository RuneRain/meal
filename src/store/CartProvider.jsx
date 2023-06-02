import React, { useReducer } from "react";
import CartContext from "./Cart-context";


const cartReducer = (state, action) => {

  if(action.type=== "ADD"){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartitemIndex = state.items.findIndex((item)=>item.id === action.item.id)
    const existingCartitem = state.items[existingCartitemIndex];

    let updatedItems;
    if(existingCartitem){
      const updatedItem = {
        ...existingCartitem,
        amount:existingCartitem.amount + action.item.amount}
        updatedItems = [state.items]
        updatedItems[existingCartitemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  if(action.type=== "REMOVE"){
    return {
      
    }
  }
  return defaultCartState
}

const defaultCartState = {
  items:[],
  totalAmount:0
}
const CartProvider = (props) => {
  const [CartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items:CartState.items,
    totalAmount:CartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
