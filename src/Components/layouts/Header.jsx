import React, { useEffect, useState } from 'react'
import "../../styles/Header.css"
import Logo from "../../assets/images/Logo.png"
import Cart from "../../assets/images/add-to-cart.png"
import { Container, Form, OverlayTrigger, Popover, Nav, Navbar,NavbarText } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { authenticateUser } from '../../interface/Login'
import { useGetProducts } from '../../hooks/useGetProducts'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../Redux/features/userSlice'
import { setPurchases } from '../../Redux/features/purchaseSlice'
import { getPurchaseHistory } from '../../interface/PurchaseHistory'
import userLogo from "../../assets/images/user.svg"
import LandingOffCanvas from '../common/LandingOffCanvas'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [canvasType, setCanvasType] = useState("Orders")
  const [showOffCanvas, setOffCanvas] = useState(false)
  const [expanded, setExpanded] = useState(false); // State to control Navbar collapse
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()
  useGetProducts()

  const handleClose = () => setOffCanvas(false);

  const handleShow = (type) => {
    setOffCanvas(true);
    setCanvasType(type)
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div className='cursorPointer logoutButton' onClick={() => window.location.reload()}>Logout</div>
      </Popover.Body>
    </Popover>
  );


  const handleLogin = async () => {
    const response = await authenticateUser(username, password)
    if (response.flag) {
      const purchaseHistory = await getPurchaseHistory(response.userDetails.userID)
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
     
     <Navbar expand="lg"  expanded={expanded} onToggle={setExpanded}>
        <Container className='p-0' fluid>
          <Navbar.Brand className="d-flex gap-3 align-items-center">
            <img src={Logo} height={48} width={48} alt="logo" />
            <span className="logoText">eA-Zy</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-4">
              {user.isLoggedIn ? (
                <div className="d-flex gap-4 align-items-center">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <div className="d-flex align-items-center gap-2">
                      <img src={userLogo} height={32} width={32} alt="user" />
                      <span className="primaryText fw-semibold fs-5 cursorPointer">{user.userName}</span>
                    </div>
                  </OverlayTrigger>
                  <div className="cursorPointer fs-5" onClick={() => handleShow("Orders")}>
                    Orders
                  </div>
                </div>
              ) : (
                <button className="buttonFill" onClick={() => setShowModal(true)}>
                  Login
                </button>
              )}
              <div className="d-flex align-items-center gap-2 ms-3 cursorPointer" onClick={() => handleShow("Cart")}>
                <img src={Cart} height={32} width={32} alt="Cart" />
                <span>Cart</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
      <LandingOffCanvas show={showOffCanvas} onClose={handleClose} type={canvasType} />
    </>

  )
}

export default Header