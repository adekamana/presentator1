import HomePage from './pages/HomePage/HomePage';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index'
import './index.scss';
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
