import React, { useEffect, useState } from 'react'
import "../styles/Header.css"
import Logo from "../assets/images/Logo.png"
import Cart from "../assets/images/add-to-cart.png"
import { Container, Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { authenticateUser } from '../interface/Login'
import { useGetProducts } from '../hooks/useGetProducts'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../Redux/features/userSlice'
import { setPurchases } from '../Redux/features/purchaseSlice'
import { getPurchaseHistory } from '../interface/PurchaseHistory'
import userLogo from "../assets/images/user.svg"
const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  useEffect(() => {
  }, [])
  useGetProducts()

  const handleLogin = async () => {
    const response = await authenticateUser(username, password)
    if (response.flag) {
      const purchaseHistory =  await getPurchaseHistory(response.userDetails.userID)
      dispatch(setUsers(response.userDetails))
      dispatch(setPurchases(purchaseHistory))
      setErrorMessage("Successfully Loggedin")
      setTimeout(
        () => {
          setShowModal(false)
          setErrorMessage("")
          setUserName("")
          setPassword("")
        }, 500)
        
    }
    setErrorMessage(response.message)
    console.log("response", response)
  }

  return (
    <>
      <header className='d-flex align-items-center justify-content-between '>
        <div className='d-flex  gap-3'>
          <img src={Logo} height={48} width={48} alt='logo' />
          <div className='d-flex align-items-center logoText pe-5'>eA-Zy</div>
        </div>
        {/* <div className='d-flex align-items-center ps-5 categoriesBtn'>Categories</div>

        <div className='d-flex align-items-center'>
          <Form.Control className='searchInput'></Form.Control>
        </div> */}
        <div className='d-flex  gap-4 d-flex align-items-center'>
          {
            user.isLoggedIn ?
              <div className='d-flex gap-5 pe-5'>
                <div className='d-flex align-items-center gap-2'>
                  <img src={userLogo} height={32} width={32} alt="user" />
                  <span className='primaryText fw-semibold fs-5 cursorPointer'>Account</span>
                </div>
                <div className='cursorPointer fs-5'>
                  Orders
                </div>
              </div>
              :
              <button className='buttonFill' onClick={() => setShowModal(true)}>Login</button>

          }
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
              <Form.Control placeholder='Enter Username' value={username} onChange={(e) => setUserName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label className='fw-semibold'>Password</Form.Label>
              <Form.Control type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <p className='text-center text-danger'>{errorMessage}</p>
          </Container>

        </Modal.Body>
        <Modal.Footer className='d-flex flex-column'>

          <button className='buttonFill w-25' onClick={handleLogin} >Login</button>
          <div className='mt-3 mb-3'>
            Don't have an account?<span className='primaryText cursorPointer'> Sign In</span>
          </div>

        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Header