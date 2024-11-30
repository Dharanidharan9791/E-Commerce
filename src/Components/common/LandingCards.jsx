import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../Redux/features/cartSlice'
export const LandingCards = ({ value }) => {

    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        const existingItem = cartItems.find(item => item.ProductID === value.ProductID);
        if (existingItem) {
            alert(`${existingItem.ProductName} already in the cart!`);
        } else {
            const updatedCart = [...cartItems, value];
            dispatch(setCart(updatedCart));
        }
    };

    return (
        <div className='cardContainer'>
            <div className='productImageConatiner d-flex justify-content-center align-items-center'>
                <img src={value.ImageURL} alt="" />
            </div>
            <div className=' productDescriptionConatiner border-top border-secondary p-3'>
                <div className='descriptionRow-1 fs-5  fw-bold'>
                    {value.ProductName}
                </div>
                <div className='descriptionRow-2 text-secondary'>
                    {value.Category}
                </div>

                <div className='descriptionRow-3 d-flex justify-content-between fw-bold'>
                    <div className='fs-5'>
                        ${value.Price}
                    </div>
                    <button className='outlineBtn px-3 py-1' onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export const OffCanvasCards = ({ value }) => {
    return (
        <div className='offCanvasCardContainer'>
            <div className='productImageConatiner d-flex justify-content-center align-items-center'>
                <img src={value.ImageURL} width={92} height={92} alt="" />
            </div>
            <div className=' productDescriptionConatiner  border-secondary p-3'>
                <div className='descriptionRow-1 fs-5  fw-bold'>
                    {value.ProductName}
                </div>
                <div className='descriptionRow-2 text-secondary'>
                    {value.Category}
                </div>

                <div className='descriptionRow-3 d-flex justify-content-between fw-bold'>
                    <div className='fs-5'>
                        ${value.Price}
                    </div>
                    {/* <button className='buttonFill px-3 py-1'>Add to cart</button> */}
                </div>
            </div>
        </div>
    )
}
