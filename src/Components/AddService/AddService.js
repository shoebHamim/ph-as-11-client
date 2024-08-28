import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault()
    const form=e.target
    const name=form.name.value
    const description=form.description.value
    const price=form.price.value
    const photoURL=form.photoURL.value
    const service={
      name:name,
      img: photoURL,
      price: price,
      description: description
    }
    fetch('https://shootpro-server.vercel.app/addservice',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Service Added Successfully!')
      }
      console.log(data)
    })
    console.log(service);



  }
  return (
    <div className='sm:w-3/4 mx-auto min-h-screen'>
      <h1 className='text-center text-xl mb-4 font-semibold'>Add Service</h1>
      <div className='flex justify-center'>
        <form onSubmit={handleAddService}>
          <input required name='name' type="text" placeholder="service name" className="input input-bordered input-sm w-full max-w-xs mb-2" /><br />
          <input required name='description' type="text" placeholder="description" className="input input-bordered input-sm w-full max-w-xs mb-2" /><br />
          <input required name='price' type="text" placeholder="price" className="input input-bordered input-sm w-full max-w-xs mb-2" /><br />
          <input required name='photoURL' type="text" placeholder="photoURL" className="input input-bordered input-sm w-full max-w-xs mb-2" /><br />
          <br />
          <button className='btn btn-primary btn-sm btn-outline '>Add Service</button>
        </form>

      </div>
    <Toaster></Toaster>
    </div>
  );
};

export default AddService;