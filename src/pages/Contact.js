import React, { useState } from 'react';
import PageTitile from '../components/PageTitile';
import { projectFirestore } from '../firebase/config';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [send, setSend] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSend({ name, email, message });
      projectFirestore.collection('contact').add(send);
      // need a loader and succeed message
    }
  };
  return (
    <div>
      <PageTitile
        title={'Contact Me'}
        subtitle={'Please Feel Free to Contact Me'}
      ></PageTitile>
      <form className='w-11/12 sm:w-3/4  px-10 py-12 mx-auto'>
        <div className='md:flex'>
          <span className='text-gray-700 w-1/6 pt-1'>Name</span>
          <input
            type='text'
            className='mt-2 mb-5 form-input mt-1 block w-full border focus:outline-none focus:ring focus:border-opacity-0 rounded-md p-1 focus:border-blue-500'
            placeholder='Your name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='md:flex'>
          <span className='text-gray-700 w-1/6 pt-1'>Email</span>
          <input
            type='text'
            className='mt-2 mb-5 form-input mt-1 block w-full border focus:outline-none focus:ring focus:border-opacity-0 rounded-md p-1 focus:border-blue-500'
            placeholder='Your email or phone'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='md:flex'>
          <span className='text-gray-700 w-1/6 pt-1'>Message</span>
          <textarea
            className='mt-2 mb-5 form-textarea mt-1 block w-full border focus:outline-none focus:ring focus:border-opacity-0 rounded-md p-1 focus:border-blue-500'
            rows='3'
            placeholder='Feel free to leave me a message here'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className='mt-10'>
          <button
            onClick={(e) => {
              submitHandler(e);
            }}
            className='px-4 py-1 transition duration-500 ease-in-out
                        bg-blue-600 text-white 
                        hover:bg-blue-400 hover:text-white
                        focus:outline-none focus:bg-blue-400 focus:text-white
                        rounded-lg'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;