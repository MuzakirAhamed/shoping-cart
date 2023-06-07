import Navbar from "./Navbar";
import Product from "./Product";
import Cart from "./Cart"
import Details from "./Details";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Navbar />}>
            <Route index element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<Details />} />
        </Route>
    )
);
function Routing() {
    return (
        <RouterProvider router={router} />
    )
}
export default Routing;
