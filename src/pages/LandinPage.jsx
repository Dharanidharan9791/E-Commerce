import React from 'react';
import "../styles/LandingPage.css";
import Index from '../layouts/Index';
import { useSelector } from 'react-redux';


const LandingPage = ({ ...props }) => {
  const state = useSelector((state) => state)
  console.log("state", state)
  return (
    <div className='wrapper mt-3 '>
      <div className='banner mt-2 mb-2'>
        Banner
      </div>
      <main className='landingBody'>
        <section className='mt-2 mb-2'>
          <h5>For You!</h5>
          <div className='sectionBody flex-wrap d-flex align-items-center justify-content-between gap-3'>
            {
              state.products.length > 0 &&
              state.products.map((data, index) => {
                return (
                  <div key={index} className="landingItem">
                    <p>Item {index + 1}</p>
                  </div>
                );
              })
            }
          </div>

        </section>
        <section className='mt-2 mb-2'>
          <h5>Buy Again!</h5>
          <div className='sectionBody flex-wrap d-flex align-items-center justify-content-between gap-3'>
            {state.products.length > 0 &&
              state.products.map((data, index) => {
                return (
                  <div key={index} className="landingItem">
                    <p>Item {index + 1}</p>
                  </div>
                );
              })
            }
          </div>

        </section>
      </main>
    </div>
  );
};

export default LandingPage;
