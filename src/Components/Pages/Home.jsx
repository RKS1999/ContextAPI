import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [item, setItem] = useState([]);
  const baseURL = "https://fakestoreapi.com/products";
  const fetchData = async () => {
  const { data } = await axios.get(baseURL);
    // console.log(data);
    setItem(data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const limitTitle = (title, limit = 10) => {
    if (title.length > limit) {
      return title.substring(0, limit) + '...';
    }
    return title;
  };

  return (
      <div className="container h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
            <div style={{paddingTop:'5px'}}>
               <div className="row">
                {/* Accordion Start */}
                 <div className="col-2" style={{border:'1px solid', borderRadius:'10px', height:'600px'}}>
                    <div className="mb-3">
                      <div style={{margin:'10px', display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                        <Link  to="products" style={{paddingTop:'10px',color:'blue', textDecoration:'none'}}>All Product</Link>
                        {/* Add Accordian list here */}
                      </div>
                    </div>
                  </div>
                {/* Accordion End */}
                  <div className="col-10">
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
                      <Link  to="products" style={{paddingTop:'10px',color:'blue', textDecoration:'none'}}>Know More</Link>
                      
                    </div>
                  </div>
                </div>
                ))}
                </div>   
                </div>         
            </div>  
          </div>
        </div>
      </div>
  )
}

export default Home;