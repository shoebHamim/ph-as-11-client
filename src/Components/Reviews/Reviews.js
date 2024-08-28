import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import AddReview from './AddReview';
import Review from './Review';

const Reviews = ({service}) => {
  const {_id,name}=service
  const {user,loading}=useContext(authContext)
  const [reviews,setReviews]=useState([])
  useState(()=>{
    fetch(`https://shootpro-server.vercel.app/reviews/${_id}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))

  })

  if (loading) {
    return <>
      <div className="flex justify-center">
        <div className="border-t-transparent text-ce border-solid animate-spin  rounded-full border-blue-400 border-4 h-12 w-12"></div>
      </div>
      </>
  }
  return (
    <div>
      <h1 className='text-xl text-center font-semibold'>User Reviews</h1>
      {
        reviews.map(r=><Review review={r} key={r._id}></Review>)
      }
      {user?.uid?
      <AddReview service_id={_id} name={name}></AddReview>:
      <p className='text-center'>Please <Link className='text-blue-400' to={'/login'}>Login</Link> to add review</p>
      }
    </div>
  );
};

export default Reviews;