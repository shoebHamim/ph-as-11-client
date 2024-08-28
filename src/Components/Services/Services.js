import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import Service from './Service';

const Services = ({from}) => {
  const {loading}=useContext(authContext)
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch(`https://shootpro-server.vercel.app/services/${from}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  if (loading) {
    return <>
      <div className="flex justify-center">
        <div className="border-t-transparent text-ce border-solid animate-spin  rounded-full border-blue-400 border-4 h-12 w-12"></div>
      </div>
      </>
  }

return (
  <>
  <div className='grid grid-cols-2 gap-4' >
    {
      services.map(s =>
        <Service key={s._id} service={s} from={from}></Service>)
    }
  </div>
  <div className='text-center my-8'>
  {from==='home'?<Link to={'/services'}  className="btn btn-primary ">See All</Link>:<></>}
  </div>

  </>
);
}

export default Services; 