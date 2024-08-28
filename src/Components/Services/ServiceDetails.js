import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import Service from './Service';

const ServiceDetails = () => {
  const service=useLoaderData()
  return (
    <div className='w-3/4 mx-auto my-10 grid grid-cols-2 gap-12'>
      <div>
        <Service service={service} from={'details'}></Service>
      </div>
      <div>
        <Reviews service={service}></Reviews>
      </div>
    </div>
  );
};

export default ServiceDetails;