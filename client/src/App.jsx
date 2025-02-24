import './style/App.css';

import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

import Start from './components/Start.jsx';
import Quiz from './components/Quiz.jsx';
import Result from './components/Result.jsx';
//import  { CheckUserExist }  from './helper/helper.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Start></Start>
  },
  {
    path : '/quiz',
    element : <Quiz />
  },
  {
    path : '/result',
    element : <Result />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;