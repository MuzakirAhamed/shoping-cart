import axios from "axios"
import queryString from "query-string"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import '../details.css'
const Details = () => {
    const location = useLocation()
    const [details, setDetails] = useState([])
    useEffect(() => {
        const qs = queryString.parse(location.search)
        const { id } = qs
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setDetails(res.data))
    })
    return (
        <>

            <div className="card container details-page">
                <img src={details.image} className="card-img-top" alt={details.category} />
                <div className="card-body">
                    <h5 className="card-title text-center">{details.title}</h5>
                    <p className="card-text text-center">Description: {details.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Catagory:{details.category}</li>
                    <li className="list-group-item">Price: ₹{details.price}</li>
                    <div className="footer">
                        <button className="btn button-style">
                            <p className="rating-text">{details.rating?.rate}
                                <img src="./Assets/star.svg" alt="star" className="star-style"></img>
                            </p>
                        </button>
                        <li className="list-group-item">{details.rating?.count} Ratings </li>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Details