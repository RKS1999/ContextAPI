import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../Context/ContextCreate";
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {
  const [item, setItem] = useState([]);
  const {addProduct}=useContext(Context);
  const navigate=useNavigate();
  const baseURL = "https://fakestoreapi.com/products";
  const fetchData = async () => {
  const { data } = await axios.get(baseURL);
    // console.log(data);
    setItem(data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const limitTitle = (title, limit = 15) => {
    if (title.length > limit) {
      return title.substring(0, limit) + '...';
    }
    return title;
  };



  return (
    <div className="row" style={{margin:'10px'}}>
      {item.map((data, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div className="card">
            <img
              src={data.image}
              className="card-img-top"
              style={{ height: "250px", width: "auto" }}
              alt={data.title}
            />
            <div className="card-body" style={{borderRadius:'50px'}}>
              <h5 className="card-title">{limitTitle(data.title)}</h5>
              <p className="card-text">Price: ${data.price}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Rating: {data.rating.rate}*
                </small>
              </p>
              <div>
                  <button className="btn btn-primary mr-2" style={{margin:'2px'}}>Buy Now</button>
                  <button
                    className="btn btn-success"
                    style={{margin:'2px'}}
                    onClick={() => {addProduct(data),navigate("/cart")}}
                  >
                    Add To Cart
                  </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;