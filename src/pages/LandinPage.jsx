import React, { useEffect, useState } from 'react';
import "../styles/LandingPage.css";
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setOrders } from '../Redux/features/ordersSlice';
import { LandingCards } from '../Components/common/LandingCards';

const LandingPage = () => {

  const purchaseList = useSelector((state) => state.purchase)
  const productsList = useSelector((state) => state.products)
  const user = useSelector((state) => state.user)
  const [products, setProducts] = useState({ notPurchased: productsList, purchased: [] })
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.isLoggedIn) {
      const purchasedProductIds = purchaseList.map((purchase) => purchase.ProductID);

      const purchased = productsList.filter((product) => purchasedProductIds.includes(product.ProductID))
      console.log("purchaseList", purchaseList, purchased)

      const purchasedCategories = new Set(purchased.map((item) => item.Category));
      console.log('purchasedCategories', purchasedCategories)
      const purchasedProducts = productsList
        .filter((product) => purchasedCategories.has(product.Category))
        .sort((a, b) => a.ProductName.localeCompare(b.ProductName));

      const notPurchasedProducts = productsList
        .filter((product) => !purchasedCategories.has(product.Category))
        .sort((a, b) => a.ProductName.localeCompare(b.ProductName));

      console.log('products', { purchasedProducts, notPurchasedProducts });

      dispatch(setOrders(purchased));
      setProducts({ notPurchased: notPurchasedProducts, purchased: purchasedProducts });
    } else {
      const sortedProducts = [...productsList].sort((a, b) =>
        a.ProductName.localeCompare(b.ProductName)
      );
      setProducts({ notPurchased: sortedProducts, purchased: [] });
    }
  }, [user, productsList, purchaseList]);


  return (
    <div className='wrapper mt-3 p-3'>
      <Row className='banner d-flex flex-wrap justify-content-center  gap-3 p-4 mt-2 mb-2'>
        <Col className=' d-flex flex-column align-items-center justify-content-evenly'>
          <div className='fs-4 fw-semibold'>Clearance Sale Is Live! </div>
          <div className='text-secondary'>Only Limited Stocks</div>
          <button className='buttonFill'>Grab Now</button>
        </Col>
        <Col className=' d-flex  align-items-center justify-content-center'>
          <img src="https://via.placeholder.com/150" alt="img" />
        </Col>
      </Row>
      <main className='landingBody d-flex flex-column justify-content-center'>
        <section className='mt-2 mb-2'>
          <h4 className='mt-2 mb-4'>Explore New!</h4>
          <div className='sectionBody flex-wrap d-flex align-items-center justify-content-start gap-4'>
            {
              products.notPurchased.length > 0 &&
              products.notPurchased.map((data, index) => {
                return (
                  <LandingCards value={data} />
                );
              })
            }
          </div>

        </section>
        <section className='mt-2 mb-2'>
          {
            products.purchased.length > 0 &&
            <>
              <h4 className='mt-2 mb-4'>What you love!</h4>
              <div className='sectionBody flex-wrap d-flex align-items-center justify-content-start gap-4'>

                {
                  products.purchased.map((data, index) => {
                    return (
                      <LandingCards value={data} />

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
