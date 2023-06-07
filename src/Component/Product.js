import { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

function Product() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [categories, setCatagories] = useState([])
  const Navigate = useNavigate()
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
  }, [])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => setCatagories(res.data))
  }, [])
  const addtocart = (product) => {
    dispatch(addCart(product))
  }
  const handlecheckbox = (value) => {
    axios.get(`https://fakestoreapi.com/products/category/${value}`)
      .then(result => setProducts(result.data));
  }
  const detailspage=(value)=>{
    Navigate(`/details?id=${value}`)
  }
  const cards = products.map(a => {
    return (
      <>
        {/* <div className='col-md-6'>
          <div className="card container" key={a.id} style={{ height: '100' }}>
            <div className='text-center'>
              <img style={{ width: '100px', height: '130px', marginTop: '10px' }} src={a.image} className="card-img-top" alt={a.category} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">{a.title}</h5>
              <p className="card-text text-center">INR {a.price}</p>
              <button className="btn btn-primary" onClick={() => addtocart(a)} >Add Cart</button>
            </div>
          </div>
        </div> */}
        <div className='card-box'>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img onClick={()=>detailspage(a.id)} src={a.image} className="img-fluid rounded-start" alt={a.catagory} />
              </div>
              <div className="col-md-8 sub-heading">
                <div className="card-body">
                  <h5 className="card-title">{a.title}</h5>
                </div>
                <div className='card-price'>
                  <p className='price'>₹{a.price}</p>
                </div>
                <button className="btn btn-primary" onClick={() => addtocart(a)} >Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      <section className='container-fluid products-box'>
        <div className='filter-part'>
          <h1>Filters</h1>
          {categories.map(a => {
            return (
              <>
                <div className="form-check" key={1} onChange={() => handlecheckbox(a)}>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexRadioDefault">{a}</label>
                </div>
              </>
            )
          })}
        </div>
        <div className='products-list'>
          {cards}
        </div>
      </section>
    </>
  );
}

export default Product;
