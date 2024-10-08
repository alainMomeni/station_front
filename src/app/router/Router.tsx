// router/index.tsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../login/LoginPage";
import SupplyFormPage from "../dashboard/sales/supply/form/supplyFormPage";
import SupplyTablePage from "../dashboard/sales/supply/table/supplyTablePage";
import PurchaseOrderTablePage from "../dashboard/sales/purchase order/table/purchaseOrderTablePage";
import PurchaseOrderFormPage from "../dashboard/sales/purchase order/form/purchaseOrderFormPage";
import Dashboard from "../dashboard/Dashboard";

const appRouters = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route element={<Dashboard />}>
        <Route path="/approvisionnement/form" element={<SupplyFormPage />} />
        <Route path="/approvisionnement" element={<SupplyTablePage />} />
        <Route
          path="/approvisionnement/bons-de-commande/form"
          element={<PurchaseOrderFormPage />}
        />
        <Route
          path="/approvisionnement/bons-de-commande"
          element={<PurchaseOrderTablePage />}
        />
      </Route>
      {/* Ajoutez les autres routes ici en suivant le même modèle */}
    </>
  )
);

export default appRouters;
