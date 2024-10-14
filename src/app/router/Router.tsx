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
import ContactTablePage from "../dashboard/sales/contact/table/contactTablePage";
import AccountTablePage from "../dashboard/sales/account/table/accountTablePage";
import AccountFormPage from "../dashboard/sales/account/form/accountFormPage";
import ContactFormPage from "../dashboard/sales/contact/form/contactFormPage";
import ControlStockTablePage from "../dashboard/sales/controlStock/table/controlStockTablePage";
import InventoryTablePage from "../dashboard/sales/Inventory/table/inventoryTablePage";
import ExpenseTablePage from "../dashboard/sales/expense/table/expenseTablePage";
import CommandTablePage from "../dashboard/sales/commandes/table/commandTablePage";

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
        <Route path="/clients" element={<ContactTablePage />} />
        <Route path="/comptes" element={<AccountTablePage />} />
        <Route path="/clients/form" element={<ContactFormPage />} />
        <Route path="/comptes/form" element={<AccountFormPage />} />
        <Route path="/inventaire" element={<InventoryTablePage />} />
        <Route path="/control stock" element={<ControlStockTablePage />} />
        <Route path="/depenses" element={<ExpenseTablePage />} />
        <Route path="/commandes" element={<CommandTablePage />} />
      </Route>
      {/* Ajoutez les autres routes ici en suivant le même modèle */}
    </>
  )
);

export default appRouters;
