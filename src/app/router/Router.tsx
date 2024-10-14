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
import SaleTablePage from "../dashboard/sales/sales/table/saleTablePage";
import Dashboard from "../dashboard/Dashboard";
import VenteFormPage from "../dashboard/sales/sales/form/saleFormPage";
import ProductTablePage from "../dashboard/sales/product/table/productTablePage";
import ProductFormPage from "../dashboard/sales/product/form/productFormPage";
import StockFuelTablePage from "../dashboard/sales/stock Fuel/table/stockFuelTablePage";
import StockOLATablePage from "../dashboard/sales/stockOLA/table/stockOLATablePage";

const appRouters = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route element={<Dashboard />}>
        <Route path="/approvisionnement/form" element={<SupplyFormPage />} />
        <Route path="/approvisionnement" element={<SupplyTablePage />} />
        <Route path="/approvisionnement/bons-de-commande/form" element={<PurchaseOrderFormPage />} />
        <Route path="/approvisionnement/bons-de-commande" element={<PurchaseOrderTablePage />} />
        <Route path="/ventes" element={<SaleTablePage />} />
        <Route path="/ventes/form" element={<VenteFormPage />} />
        <Route path="/produits" element={<ProductTablePage />} />
        <Route path="/produits/form" element={<ProductFormPage />} />
        <Route path="/stock fuel" element={<StockFuelTablePage />} />
        <Route path="/stock OLA" element={<StockOLATablePage />} />
      </Route>
      {/* Ajoutez les autres routes ici en suivant le même modèle */}
    </>
  )
);

export default appRouters;
