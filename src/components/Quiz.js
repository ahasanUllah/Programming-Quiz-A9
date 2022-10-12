import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';
import { ScoreContext } from './Root';

const Quiz = () => {
   const [score] = useContext(ScoreContext);
   const { data } = useLoaderData();
   const { name, questions } = data;
   console.log(data.length);
   return (
      <div>
         <h2 className="text-4xl font-bold text-teal-700 mt-16">Quiz of {name}</h2>
         <div className="grid grid-cols-1 md:grid-cols-5   xl:px-72 mx-auto m-10">
            <div className="col-span-4 space-y-12  ">
               {questions.map((question, index) => (
                  <Questions key={question.id} question={question} index={index}></Questions>
               ))}
            </div>
            <div className="col-span-1 bg-gray-100 p-5">
               <h2 className="text-2xl mt-14 font-semibold ">Score</h2>
               <p className="text-xl sticky ">
                  score: {score}/{questions.length}
               </p>
            </div>
         </div>
      </div>
   );
};

export default Quiz;
