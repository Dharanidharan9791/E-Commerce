import React, { useEffect } from 'react'

const LandingCards = (value) => {
    useEffect(() => {
        console.log('value', value)
    }, [value])
    return (
        <div className='landingItem'>
            <div className='productImageConatiner'>
                productImageConatiner
            </div>
            <div className='productDescriptionConatiner'>
                productDescriptionConatiner
            </div>
        </div>
    )
}

export default LandingCards