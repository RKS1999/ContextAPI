import React, { useContext } from 'react'
import { Context } from '../Context/ContextCreate'
import { MdDelete } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';




const Cart = () => {
  const {cartData,deleteProduct,increment,decrement}=useContext(Context);
  // console.log(cartData);
  const limitTitle = (title, limit = 15) => {
    if (title.length > limit) {
      return title.substring(0, limit) + '...';
    }
    return title;
  };

  const removeItem=(id) =>{
    deleteProduct(id)
  }
  
/* const totalQty=cartData.map((items) =>items.qty).reduce((a,c) =>a+c,0)
console.log(totalQty); */
const totalPrice=cartData.map((items) =>items.price*items.qty).reduce((a,c) =>a+c,0)

// console.log(totalPrice);

  return (
    <section className="container h-100 h-custom" style={{backgroundColor: "#eee", marginTop:'2px'}}>
      <div className="container-fluid py-5 h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">

               <div className="row">

                 <div className="col-lg-7">
                   <h5 className="mb-3"><Link to="/products" className="text-body"><i
                         className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link></h5>
                   <hr/>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        {/* <p className="mb-0">You have 4 items in your cart</p> */}
                      </div>
                      <div>
                        <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                            className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                     </div>
                   </div>

                  {
                    cartData.map((items,index) =>{
                      return (
                        <div className="card mb-3" key={index}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={items.image}
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                              </div>
                              <div className="ms-3">
                                <h5>{limitTitle(items.title)}</h5>
                                <p className="small mb-0">Rating: {items.rating.rate}*</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: "100px"}}>
                                <h5 className="fw-normal mb-0">Qty.</h5>
                                <div className='d-flex' style={{justifyContent:'center', alignItems:'center'}} >
                                <button style={{background:'transparent', border:'transparent', fontSize:'25px'}} onClick={() =>increment(items.id)}><CiCirclePlus /></button>
                                <h6 style={{justifyContent:'center',alignItems:'center', paddingTop:'12px'}}>{items.qty}</h6>
                                <button style={{background:'transparent', border:'transparent', fontSize:'25px'}} onClick={() =>decrement(items.id)}><CiCircleMinus /></button>
                                </div>
                              </div>
                              <div style={{width: "100px"}}>
                                <h5 className="mb-0">${items.price *items.qty}</h5>
                              </div>
                              <div>
                                <button style={{background:'transparent', border:'transparent', fontSize:'25px'}}  onClick={() =>removeItem(items.id)} ><MdDelete /></button>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })
                  }

                  </div>
                  <div className="col-lg-5">
                
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Price details</h5>
                          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"/> */}
                        </div>
                          
                          
                          
                        <hr className="my-4"/>
                          
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${totalPrice}</p>
                        </div>
                          
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
                          
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">${totalPrice+20}</p>
                        </div>
                          
                        <button type="button" className="btn btn-success btn-block btn-lg" style={{margin:'2px'}}>
                          <div className="d-flex justify-content-between">
                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>
                          
                      </div>
                    </div>
                          
                  </div>
                          
                </div>
                          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart