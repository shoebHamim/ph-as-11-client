import React from 'react';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import Works from '../Works/Works';

const Home = () => {
  
  return (
    <div className='sm:w-3/4 m-auto'>
      <Slider></Slider>
      <div className='my-12 text-center'>
            <h1 className='text-3xl font-bold'>Services</h1>
      </div>
      <Services from={'home'}></Services>
      <Works></Works>
      <Contact></Contact>
    

    </div>
  );
};

export default Home;