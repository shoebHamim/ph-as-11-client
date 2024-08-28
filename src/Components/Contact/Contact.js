import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';

const Contact = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='w-3/4 mx-auto my-8'>
      <h1 className='text-center text-xl font-bold mb-4'>Let's Work Together!</h1>
      <div className='flex justify-center text-center'>
        <form className='w-2/3' >
        <input type="text" placeholder="Full Name" className="input w-full max-w-xs bg-base-300 mb-2" /><br />
      <input type="text" placeholder="Email" className="input w-full max-w-xs bg-base-300 mb-2" /><br />
      <input type="text" placeholder="Phone" className="input w-full max-w-xs bg-base-300 mb-2" /><br />
      <input type="text" placeholder="Desired Shooting Location" className="input w-full max-w-xs bg-base-300 mb-2" /><br />
      <input type="text" placeholder="Description" className="input w-full max-w-xs bg-base-300 mb-2" /><br />
      <DateTimePicker  onChange={onChange} value={value} /><br />
  
      <button className='btn btn-success mt-4'>Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;