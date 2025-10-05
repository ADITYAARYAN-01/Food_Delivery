import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import OrderSummaryChart from '../../components/OrderSummaryChart/OrderSummaryChart'; // Import the chart

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    // Calculate totals once to use in the chart and text
    const subtotal = getTotalCartAmount();
    const deliveryFee = subtotal === 0 ? 0 : 20;

    return (
        <div className='cart'>
            <div className="cart-item">
                <div className="cart-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br /><hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <React.Fragment key={item._id}>
                                <div className="cart-item-title cart-items-item" >
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>₹{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </React.Fragment>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>

                    {/* The Chart is Added Here */}
                    { subtotal > 0 && 
                        <div className="cart-chart-container">
                           <OrderSummaryChart subtotal={subtotal} deliveryFee={deliveryFee} />
                        </div>
                    }
                    
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{subtotal}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{deliveryFee}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{subtotal + deliveryFee}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="card-promocode">
                    <div>
                        <p>If you Have Promocode Enter Here</p>
                        <div className="card-promocode-input">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;