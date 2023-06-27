import React, { useContext } from "react";
import { DataContext } from "../../store/context";
import CartItemsList from "./CartItemsList";

function CartContainer({ handleToggleCart }) {
  const { cartState } = useContext(DataContext);
  // console.log(cartState);
  const getTotalPrice = () =>
    cartState.items.reduce(
      (total, item) => total + item.record.price * item.quantity,
      0
    );

  return (
    cartState.isOpen && (
      <div className='cart-sidebar'>
        <button
          type='button'
          className='close-button'
          onClick={handleToggleCart}
        >
          &times;
        </button>
        <p className='cart-price'>Total:€{getTotalPrice()} </p>
        <div className='cart-body'>
          <CartItemsList />
        </div>
      </div>
    )
  );
}

export default CartContainer;
