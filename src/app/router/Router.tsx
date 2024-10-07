// router/index.tsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../login/LoginPage";
import IndexFormSupply from "../dashboard/sales/supply/form/supplyFormPage";
import IndexTableSupply from "../dashboard/sales/supply/table/supplyTablePage";
import IndexFormPurchaseOrder from "../../components/sales/MainContent/purchase order/form/purchaseOrderFormPage";
import Dashboard from "../dashboard/Dashboard";


const appRouters = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route element={<Dashboard />}>
        <Route path="/approvisionnement/form" element={<IndexFormSupply />} />
        <Route path="/approvisionnement" element={<IndexTableSupply />} />
        <Route
          path="/approvisionnement/bons-de-commande"
          element={<IndexFormPurchaseOrder />}
        />
      </Route>
      {/* Ajoutez les autres routes ici en suivant le même modèle */}
    </>
  )
);

export default appRouters;
