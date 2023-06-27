import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../../store/context";
import { motion } from "framer-motion";
const RecordCard = ({ record, index }) => {
  const { title, img, price, artist, year } = record;

  const { cartState, dispatchCart } = useContext(DataContext);

  const addToCartHandler = (selectedRecord) => {
    // find if item is exist
    const existingItem = cartState.items.find(
      (item) => item.record === selectedRecord
    );

    // if the selected record already exists in the cart, update its quantity
    if (existingItem) {
      const updatedItems = cartState.items.map((item) =>
        item.record === selectedRecord
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      dispatchCart({ type: "ADD_CART_ITEM", payload: updatedItems });
    } else {
      dispatchCart({
        type: "ADD_CART_ITEM",
        payload: [...cartState.items, { record: selectedRecord, quantity: 1 }],
      });
    }

    // if the selected record doesn't exists in the cart, add it as a new item
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: index * 0.05 }} className='record'>
      <div>
        <img
          className='record-img'
          src={img}
          alt={`${title} album from ${artist}`}
        />
      </div>

      <div className='record-info'>
        <p>{title}</p>
        <p>
          {artist} - {year}
        </p>
      </div>

      <div className='record-footer'>
        <p className='record-footer-price'>{price} €</p>
        <div className='record-footer-icon'>
          <FaShoppingCart onClick={() => addToCartHandler(record)} />
        </div>
      </div>
    </motion.div>
  );
};

export default RecordCard;
