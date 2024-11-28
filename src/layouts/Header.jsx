import React from 'react'
import "../styles/Header.css"
import Logo from "../assets/images/Logo.png"
import Cart from "../assets/images/add-to-cart.png"
import { Form } from 'react-bootstrap'
const Header = () => {
  return (
    <header className='d-flex align-items-center justify-content-between '>
      <div className='d-flex  gap-3'>
        <img src={Logo} height={48} width={48} alt='logo' />
        <div className='d-flex align-items-center logoText pe-5'>eA-Zy</div>
      </div>
      <div className='d-flex align-items-center ps-5 categoriesBtn'>Categories</div>

      <div className='d-flex align-items-center'>
        <Form.Control className='searchInput'></Form.Control>
      </div>
      <div className='d-flex  gap-4 d-flex align-items-center'>
        <button className='buttonFill'>Login</button>
        <div className='d-flex align-items-center gap-2'>
          <img src={Cart} height={32} width={32} alt="" />
          <div>Cart</div>
        </div>
      </div>
    </header>
  )
}

export default Header