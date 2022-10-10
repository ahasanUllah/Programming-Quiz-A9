import React from 'react';

const Topics = ({ quiz }) => {
   const { id, name, logo, total } = quiz;
   return (
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
         <img
            src={logo}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 bg-teal-100"
         />
         <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
               <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
               <p className="dark:text-gray-100">Quiz: {total}</p>
            </div>
            <button
               type="button"
               className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-teal-500 text-gray-100"
            >
               Start Practice
            </button>
         </div>
      </div>
   );
};

export default Topics;