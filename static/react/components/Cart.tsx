import React, { useContext } from "react";
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  return (
    <div>
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.title} &mdash;
            <button
              className="btn btn-danger"
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
              }
            >
              -
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
              }
            >
              +
            </button>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
