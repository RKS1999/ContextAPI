import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";



const Header = () => {
  return (
        <div className='container-fluid' style={{borderRadius:'20px'}}>
          <Navbar className="navbar" style={{backgroundColor: '#e3f2fd'}} data-bs-theme="light">
              <Container>
                <NavLink to="" style={{color:'darkGreen', textDecoration:'none'}}><h2 >E-Cart</h2></NavLink>
                <Nav style={{display:'flex',justifyContent:'space-between'}}>
                  <div style={{margin:'10px'}}>
                    <Link  to="" style={{margin:'10px',color:'blue', textDecoration:'none'}}>Home</Link>
                    <Link  to="products" style={{margin:'10px',paddingTop:'10px',color:'blue', textDecoration:'none'}}>All Product</Link>
                  </div>
                  {/* <div style={{margin:'10px'}}>
                    <Link  to="products" style={{color:'blue', textDecoration:'none'}}>All Product</Link>
                  </div> */}
                </Nav>
                  <input type="text" placeholder="  🔎  Search Your Products" style={{backgroundColor:'white', border:'transparent', borderRadius:'20px', width:'250px', margin:'5px', padding:'5px'}} />
                <div>
                  <Link to="cart" style={{fontSize:'25px', margin:'5px'}}><FaCartPlus /></Link>
                </div>
              </Container>
            </Navbar>
          </div>
  )
}

export default Header