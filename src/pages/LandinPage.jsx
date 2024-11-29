import React, { useEffect, useState } from 'react';
import "../styles/LandingPage.css";
import { useSelector } from 'react-redux';
import LandingCards from '../Components/common/LandingCards';

const LandingPage = ({ ...props }) => {
 
  const purchaseList = useSelector((state)=>state.purchase)
  const  productsList =  useSelector((state)=>state.products)
  const user = useSelector((state)=>state.user)
  const [products, setProducts] = useState({ notPurchased: productsList, purchased: [] })
  useEffect(() => {
    if (user.isLoggedIn) {

      const purchasedProductIds = purchaseList.map((purchase) => purchase.ProductID);
      const purchasedProducts = productsList.filter((product) =>
        purchasedProductIds.includes(product.ProductID)
      );
      const notPurchasedProducts = productsList.filter((product) =>
        !purchasedProductIds.includes(product.ProductID)
      )
        .sort((a, b) => a.ProductName.localeCompare(b.ProductName))
        ;

      console.log('products', { purchasedProducts, notPurchasedProducts })
      setProducts({ notPurchased: notPurchasedProducts, purchased: purchasedProducts })
    }
    else {
      setProducts({ notPurchased: productsList, purchased: [] })
    }
  }, [user,productsList])

  return (
    <div className='wrapper mt-3 '>
      <div className='banner mt-2 mb-2'>
        Banner
      </div>
      <main className='landingBody d-flex flex-column justify-content-center'>
        <section className='mt-2 mb-2'>
          <h5>Check it out!</h5>
          <div className='sectionBody flex-wrap d-flex align-items-center justify-content-start gap-4'>
            {
              products.notPurchased.length > 0 &&
              products.notPurchased.map((data, index) => {
                return (
                 <LandingCards value= {data}/>
                );
              })
            }
          </div>

        </section>
        <section className='mt-2 mb-2'>
          {
            products.purchased.length > 0 &&
            <>
              <h5>Buy Again!</h5>
              <div className='sectionBody flex-wrap d-flex align-items-center justify-content-start gap-4'>

                {
                  products.purchased.map((data, index) => {
                    return (
                      <LandingCards value= {data}/>

                    );
                  })
                }
              </div>
            </>
          }
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
