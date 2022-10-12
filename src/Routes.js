import { createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Root from './components/Root';
import Statistics from './components/Statistics';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         { path: '/', element: <Home></Home> },
         { path: '/about', element: <About></About> },
         {
            path: '/quiz/:id',
            element: <Quiz></Quiz>,
            loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
         },
         { path: '/statistics', element: <Statistics></Statistics> },
         { path: '/blog', element: <Blog></Blog> },
      ],
   },
]);
