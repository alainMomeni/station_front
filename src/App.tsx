import { RouterProvider } from 'react-router-dom';
import appRouters from './app/router/Router';

function App() {
  return <RouterProvider router={appRouters} />;
}

export default App;
