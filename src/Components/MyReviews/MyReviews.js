import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Reviews/Review';

const MyReviews = () => {
  const {user,loading}=useContext(authContext)
  const [reviews,setReviews]=useState([])
  useEffect(()=>{
    fetch(`https://shootpro-server.vercel.app/myreviews/${user.uid}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])


  if (loading) {
    return <>
      <div className="flex justify-center">
        <div className="border-t-transparent text-ce border-solid animate-spin  rounded-full border-blue-400 border-4 h-12 w-12"></div>
      </div>
      </>
  }
  return (
    <div className='sm:w-3/4 mx-auto'>
      <h1 className='text-center text-xl font-bold my-4'>My reviews</h1>
      <div className='grid grid-cols-3 gap-4'>

      {reviews.length?
      reviews.map(r=>
        <Review reviews={reviews} handleReviews={setReviews}  review={r} key={r._id} service_name={r.service_name} ></Review>)
      :<div className='h-screen'>
        <h1 className='absolute top-1/2 right-1/2 translate-x-1/2 text-xl font-semibold'>No reviews were added</h1>

      </div>}
    </div>
      </div>
  );
};

export default MyReviews;