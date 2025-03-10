import { useRef, useContext } from 'react';

import CartModal from './CartModal.jsx';
import { useCart } from 'react-use-cart';

export default function Header() {
  const modal: any = useRef();
  const { items, totalUniqueItems } = useCart();


  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (totalUniqueItems > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <p>
          <button  onClick={handleOpenCartClick} className='btn btn-warning'>Cart ({totalUniqueItems})</button>
        </p>
      </header>
    </>
  );
}
