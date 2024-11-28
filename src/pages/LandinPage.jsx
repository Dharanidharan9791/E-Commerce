import React from 'react';
import "../styles/LandingPage.css";
import Index from '../layouts/Index';

const LandingPage = ({ ...props }) => {
  return (
    <div className='wrapper mt-3 '>
      <div className='banner mt-2 mb-2'>
        Banner
      </div>
      <main className='landingBody'>
        <section className='mt-2 mb-2'>
          <h5>For You!</h5>
          <div className='sectionBody flex-wrap d-flex align-items-center justify-content-start gap-3'>
          {
            Array.from({ length: 5 }, (_, index) => {
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
          <div className='sectionBody flex-wrap d-flex align-items-center justify-content-start gap-3'>
          {
            Array.from({ length: 5 }, (_, index) => {
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
