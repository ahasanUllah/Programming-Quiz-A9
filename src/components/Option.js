import React from 'react';

const Option = ({ option, handleOption, question }) => {
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
