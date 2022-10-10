import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
export const QuizContext = createContext([]);
const Root = () => {
   const quizes = useLoaderData([]);
   return (
      <div>
         <QuizContext.Provider value={quizes}>
            <Header></Header>
            <Outlet></Outlet>
         </QuizContext.Provider>
      </div>
   );
};

export default Root;
