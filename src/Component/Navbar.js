import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "../App.css"
const Navbar = () => {
    const cartItems = useSelector(state => state.cart)
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link to="/" as={Link}  className="logo" >MyShop</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            </div>
                        </div>
                    </div>
                    <Link to='/cart' as={Link} className='btn btn-primary mx-5'>cart {cartItems.length} </Link>
                </nav> */}
            <nav className="navbar container-fluid">
                <Link to="/" as={Link} className="logo" >
                    <p className="logo-left-part">My</p>
                    <p className="logo-right-part">Shop</p>
                </Link>
                <Link to="/cart" as={Link} className="navbar-right">
                    <img src="./Assets/cart.svg" alt="cart" className="cart"></img>
                    <div className="badge">{cartItems.length}</div>
                </Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Navbar