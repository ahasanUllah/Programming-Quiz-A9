import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';
import { QuizContext } from './Root';
// const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

const Statistics = () => {
   const { data } = useContext(QuizContext);
   console.log(data);
   return (
      <div className="mx-auto flex justify-center w-full h-full mt-52 md:mt-10">
         <ResponsiveContainer width="80%" height={500}>
            <LineChart width="80%" height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line type="monotone" dataKey="total" stroke="#8884d8" />
               <CartesianGrid stroke="#000" strokeDasharray="5 5" />
               <Legend verticalAlign="top" height={36} />
               <XAxis dataKey="name" />
               <YAxis dataKey={'total'} />
               <Tooltip />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Statistics;
