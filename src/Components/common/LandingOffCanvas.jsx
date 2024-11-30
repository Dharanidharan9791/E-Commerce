import React, { useEffect, useState } from 'react'
import { Offcanvas, Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { OffCanvasCards } from './LandingCards';
const LandingOffCanvas = ({ show, onClose, type }) => {
    const orders = useSelector((state) => state.orders)
    const cart = useSelector((state) => state.cart)
    useEffect(() => {
        console.log('orders', orders)
    }, [show])
    return (
        <>
            <Offcanvas size="lg" show={show} placement="end" onHide={() => onClose(true)} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{type}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container className='h-100'>
                        {
                            type === "Orders" ?
                                orders.length > 0 ?
                                    <div className='d-flex flex-column gap-4'>
                                        <h6>Your Previous Orders</h6>
                                        {
                                            orders.map((data, index) => {
                                                return (
                                                    <OffCanvasCards value={data} />
                                                );
                                            })
                                        }
                                    </div>

                                    :
                                    <h5 className='d-flex h-100 justify-content-center align-items-center'>No Orders</h5>
                                :
                                cart.length > 0 ?
                                    <div className='d-flex flex-column gap-4'>
                                        <h6>Your Previous Orders</h6>
                                        {
                                            cart.map((data, index) => {
                                                return (
                                                    <OffCanvasCards value={data} />
                                                );
                                            })
                                        }
                                    </div>
                                    :
                                    <h5 className='d-flex h-100 justify-content-center align-items-center'>Cart is empty</h5>
                        }
                    </Container>
                    {
                         type !== "Orders" &&  cart.length > 0&&
                         <div className='d-flex pb-3 justify-content-center'>
                         <button className='buttonFill'>Checkout</button>
          
                         </div>     
                         }
                 
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default LandingOffCanvas