import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Service = ({ service, from }) => {
  let { name, img, price, description,_id } = service
  if (from==='home') {
    description = description.slice(0, 100)
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl self-center ">
      <figure className='hover:cursor-pointer'>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>

      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}{(from==='home') && '...'}</p>
        <div className="card-actions justify-end items-center">
          <p className='text-base font-semibold text-purple-600' >Starts at: ${price}</p>
          {from!=='details' && 
          <Link to={`/serviceDetails/${_id}`} className="btn btn-primary btn-outline">Details</Link>
          }
        </div>
      </div>
    </div>

  );
};

export default Service;