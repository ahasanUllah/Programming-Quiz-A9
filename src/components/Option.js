import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const Option = ({ option, handleOption, question }) => {
   const { options, id, correctAnswer } = question;
   console.log(question);

   return (
      <div>
         <ul onClick={() => handleOption(option)} className="bg-gray-100 p-5 rounded text-xl cursor-pointer mb-11">
            <li>{option}</li>
         </ul>
      </div>
   );
};

export default Option;
