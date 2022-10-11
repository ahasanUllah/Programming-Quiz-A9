import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quiz = () => {
   const { data } = useLoaderData();
   const { total, name, id, questions } = data;

   return (
      <div className="space-y-12">
         <h2 className="text-2xl font-bold">quiz of {name}</h2>
         {questions.map((question) => (
            <Questions key={question.id} question={question}></Questions>
         ))}
      </div>
   );
};

export default Quiz;
