import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../login/home';
import IndexFormSupply from '../dashboard/sales/MainContent/supply/form';
import IndexTableSupply from '../dashboard/sales/MainContent/supply/table';
import IndexFormPurchaseOrder from '../dashboard/sales/MainContent/purchase order/form';


const appRouters = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Login />} />
            <Route path='/supply/form' element={<IndexFormSupply />} />
            <Route path='/supply/table' element={<IndexTableSupply />} />
            <Route path='/purchase order/form' element={<IndexFormPurchaseOrder />} />
        </>
    )
);

export default appRouters;
