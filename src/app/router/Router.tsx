import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../login/home';
import DashboardFormSupply from '../dashboard/sales/MainContent/supply/form/dashboard';
import DashboardTableSupply from '../dashboard/sales/MainContent/supply/table/dashboard';


const appRouters = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Login />} />
            <Route path='/supply/form' element={<DashboardFormSupply />} />
            <Route path='/supply/table' element={<DashboardTableSupply />} />
        </>
    )
);

export default appRouters;
