import React, { useState } from 'react';

const Questions = ({ question }) => {
   const { options, id, correctAnswer } = question;
   console.log(question);
   const [quizNo, setQuizNo] = useState(0);
   const plus = quizNo + 1;
   return (
      <div className="border p-14 space-y-6 w-2/4 mx-auto ">
         <div className="text-3xl font-semibold text-teal-500">
            Quiz:{quizNo} {question.question.split('<p>').join('').split('</p>').join('')}
         </div>
         <ul className="space-y-4">
            {question.options.map((option) => (
               <li className="bg-gray-100 p-5 rounded text-xl">{option}</li>
            ))}
         </ul>
      </div>
   );
};

export default Questions;
