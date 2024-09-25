import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../home/home';
import Dashboard from '../dashboard/sales/dashboard';

const appRouters = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </>
    )
);

export default appRouters;
