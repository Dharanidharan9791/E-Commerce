import React, { useState } from 'react'
import "../styles/Header.css"
import Logo from "../assets/images/Logo.png"
import Cart from "../assets/images/add-to-cart.png"
import { Container, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
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
          <button className='buttonFill' onClick={() => setShowModal(true)}>Login</button>
          <div className='d-flex align-items-center gap-2'>
            <img src={Cart} height={32} width={32} alt="" />
            <div>Cart</div>
          </div>
        </div>
      </header>
      <Modal show={showModal} size='lg' onHide={() => setShowModal(false)} backdrop="static" centered>
        <Modal.Header closeButton>
          <div className='welcomeText'>Welcome Back!</div>
        </Modal.Header>
        <Modal.Body className='d-flex'>
          <Container className='w-75 py-4 d-flex flex-column gap-3'>
            <Form.Group >
              <Form.Label className='fw-semibold'>Username</Form.Label>
              <Form.Control  placeholder='Enter Username'></Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label className='fw-semibold'>Password</Form.Label>
              <Form.Control type="password"  placeholder='Enter Password'></Form.Control>
            </Form.Group>
          </Container>

        </Modal.Body>
        <Modal.Footer className='d-flex flex-column'>
        
          <button className='buttonFill w-25' >Login</button>
          <div className='mt-3 mb-3'>
            Don't have an account?<span className='primaryText cursorPointer'> Sign In</span> 
          </div>

        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Header