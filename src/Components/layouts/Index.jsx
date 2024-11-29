import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
const Index = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Index