import { ChatIcon, XIcon } from '@heroicons/react/solid';
import { Message } from 'alersh_models';
import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '../Button';

const MessageModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Message>();
  const onSubmit: SubmitHandler<Message> = ({ name, message }) => {
    setIsOpen(false);
    reset();
    axios
      .post('http://localhost:4000/message', {
        name,
        message,
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <ChatIcon
        onClick={() => setIsOpen(true)}
        className="hidden md:block absolute cursor-pointer left-4 bottom-4 text-red-500 hover:text-red-600 w-10 h-10 transition transform hover:scale-105"
      />
      {isOpen && (
        <>
          <div className="absolute z-10 inset-0 bg-black opacity-75" />
          {!!Object.values(errors).length && (
            <div className="absolute text-center z-10 inset-x-1/2 transform -translate-x-1/2 top-1/4 text-red-500 text-4xl font-semibold w-52">
              Fill all fields
            </div>
          )}
          <XIcon
            onClick={() => setIsOpen(false)}
            className="absolute cursor-pointer right-6 top-6 text-white hover:text-red-600 w-8 h-8 z-10"
          />
          <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/6 h-72">
            <form className="w-full h-full flex flex-col items-center justify-around">
              <input
                type="text"
                placeholder="Enter your name and contacts"
                className="px-4 py-2 rounded-2xl w-full focus:outline-none border border-transparent focus:ring-2 focus:ring-red-600 focus:border-transparent"
                {...register('name', { required: true })}
              />
              <textarea
                className="px-4 resize-none my-2 py-2 rounded-2xl w-full focus:outline-none border border-transparent focus:ring-2 focus:ring-red-600 focus:border-transparent h-2/3"
                placeholder="Enter message"
                {...register('message', { required: true })}
              />
              <Button text="Send Message" className="w-3/4 mt-4" onClick={handleSubmit(onSubmit)} />
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default MessageModal;
