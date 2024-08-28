import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import Review from './Review';

const AddReview = ({ service_id,name }) => {
  const { user, loading } = useContext(authContext)
  const [temp_review,setTempReview]=useState([])
  if (loading) {
    return <>
      <div className="flex justify-center">
        <div className="border-t-transparent text-ce border-solid animate-spin  rounded-full border-blue-400 border-4 h-12 w-12"></div>
      </div>
      </>
  }

  const handleAddReview = (e) => {
    e.preventDefault()
    const review={
      service_id:service_id,
      service_name:name,
      reviewer_id:user.uid,
      reviewer_name:user.displayName,
      reviewer_img:user.photoURL,
      text: e.target.text.value,
      ratings:e.target.ratings.value
    }
    setTempReview([...temp_review,review])
    fetch('https://shootpro-server.vercel.app/addreview',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  return (
    <div className='text-center'>
      {temp_review.map(r=>
        <Review key={r.text} review={r}></Review>
      )}
      <form onSubmit={handleAddReview}>
      <input required name='text' type="text" placeholder="Your Review" className="input input-bordered input-sm w-full max-w-xs mb-2" />
      <input required name='ratings' type="text" placeholder="ratings" className="input input-bordered input-sm w-full max-w-xs" />
      <br />
      <button  className='btn btn-primary btn-sm btn-outline mt-4'>Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;