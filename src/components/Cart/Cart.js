import { useContext, useState } from 'react';
import Checkout from './Checkout';
import Modal from '../Model';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-Context';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    console.log("Worked")
    const orderData = {
      user: userData,
      orderedItems: cartCtx.items,
      totalAmount: totalAmount
    };
    // const{user, orderedItems, total} = orderData;

    const res = await fetch('https://college-project-e6256-default-rtdb.firebaseio.com/userDataRecords.json',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      }
      
    );
    if (res.ok){
      alert("Ordered successfully If you have any feedback/Suggestion/remarks please gives as user views on our user testimonials section")
      cartCtx.clearCart();
      props.onClose();
    }
    else{
      alert("Something went wrong! please try again later")
    }
    // try {
    //   console.log("entered try")
    //   const docRef = await addDoc(collection(db, "orders"), orderData);
    //   console.log("Order ID: ", docRef.id);
    //   console.log(orderData)
    //   console.log("Order successful")
    //   alert("Order Successfull")
    //   // Optionally, you can reset the cart here
    //   cartCtx.clearCart();
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    //   console.log("not done")
    //   alert("not")
    // }
   };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
