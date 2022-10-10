import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

function App() {
   return (
      <div className="App">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
