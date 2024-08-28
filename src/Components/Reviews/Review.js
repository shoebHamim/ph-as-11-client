import React from 'react';
import { FaStar } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Review = ({ review,service_name,reviews,handleReviews }) => {

  const { reviewer_name, reviewer_id, reviewer_img, ratings, text } = review
  const handleDelete=()=>{
    fetch(`https://shootpro-server.vercel.app/myreviews/${review._id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      const new_reviews=reviews.filter(r=>r._id!==review._id)
      handleReviews(new_reviews)
      toast.success('Review Deleted!')
      
    })


  }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl text-center mb-6">
        <div className="card-body ">
          {service_name&& <h1 className='text-base font-semibold'>Reviewed On- {service_name}</h1>}
          <div className='card-title justify-center'>
          <img className='c w-10 rounded-full' src={reviewer_img} alt="" />
          <h2 className="text-base">{reviewer_name}</h2>
          </div>
          <p>{text}</p>
          <p className='flex items-center justify-center'><FaStar className='mr-1'></FaStar>{ratings}</p>
          {service_name&&<>
          <button className='btn-sm btn-accent'>Edit Review</button>
          <button onClick={handleDelete} className='btn-sm btn-error'>Delete Review</button>
          </>}
          <Toaster/>
        </div>
      </div>
    </div>
  );
};

export default Review;