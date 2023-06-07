import { useDispatch, useSelector } from "react-redux"
import { deletCart } from "../store/cartSlice"
import "../cart.css"
import { useState } from "react"
const Cart = () => {
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const cartProduct = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removecart = (id, price) => {
        dispatch(deletCart(id))
        setPrice((prev) => prev - price)
    }
    const handleIncreament = (value) => {
        setPrice((prev) => prev + value)
        setCount((prev) => prev + 1)
    }
    const handledecreament = (value) => {
        if (price > value) {
            setPrice((prev) => prev - value)
            setCount((prev) => prev - 1)
        } else {
            setPrice(0)
            setCount(0)
        }
    }
    const cartItems = cartProduct.map(a => {
        return (
            <>
                {/* <div className='container'>
                    <div className="card" key={a.id} style={{ height: '100' }}>
                        <div className='text-center'>
                            <img style={{ width: '100px', height: '130px' }} src={a.image} className="card-img-top" alt={a.category} />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">{a.title}</h5>

                            <p className="card-text">₹{a.price}</p>
                           
                        </div>
                    </div>
                </div> */}
                <div class="card mb-3 product-card" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={a.image} class="img-fluid rounded-start" alt={a.category} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{a.title}</h5>
                                <p class="card-text">{a.description}</p>
                                <div className="cart-button">
                                    <div onClick={() => handleIncreament(a.price)} className="increament">+</div>
                                    {/* <input className="input-field" type="text" value={count}></input> */}
                                    <div onClick={() => handledecreament(a.price)} className="decreament">-</div>
                                </div>

                                <br></br>
                                <p class="card-text">₹{a.price}</p>
                                {/* <button className="btn btn-primary" onClick={()=>addPrice(a.price)}>Add</button> */}
                                <br></br>
                                <button className="btn btn-danger" onClick={() => removecart(a.id, a.price)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <h1>Cart</h1>
            <div className="cart-body">
                {cartItems.length === 0 ?
                    (<img className="empty-cart" src="./Assets/empty-cart.png" alt="emptycart"></img>) : 
                    (<div className="product-main">
                        {cartItems}
                    </div>)}
                <div className="checkout card">
                    <h1 className="checkout-top">Total</h1>
                    <hr></hr>
                    {/* <div className="count">
                    <p className="count-text">Quantity </p>
                    <p>{count.toFixed(2)}</p>
                    </div> */}
                    <div className="total">
                        <p className="total-text">SubTotal </p>
                        <p className="total-price">{price.toFixed(2)}</p>
                    </div>
                    <hr></hr>
                    <div className="final">
                        <p className="final-text">Grand Total:</p>
                        <p className="final-price">{price.toFixed(2)}</p>
                    </div>
                    <button className="btn btn-success m-3" >Place Order</button>
                </div>
            </div>

        </>
    )
}
export default Cart