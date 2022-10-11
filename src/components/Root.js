import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
export const QuizContext = createContext([]);
export const ScoreContext = createContext(0);
const Root = () => {
   const quizes = useLoaderData([]);
   const [score, setScore] = useState(0);
   return (
      <div>
         <QuizContext.Provider value={quizes}>
            <ScoreContext.Provider value={[score, setScore]}>
               <Header></Header>
               <Outlet></Outlet>
            </ScoreContext.Provider>
         </QuizContext.Provider>
      </div>
   );
};

export default Root;
