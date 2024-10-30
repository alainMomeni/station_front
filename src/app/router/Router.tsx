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
import FuelInventoryTablePage from "../dashboard/sales/fuelInventory/table/fuelInventoryTablePage";
import OlaInventoryTablePage from "../dashboard/sales/olaInventory/table/olaInventoryTablePage";
import ExpenseTablePage from "../dashboard/sales/expense/table/expenseTablePage";
import CommandTablePage from "../dashboard/sales/commandes/table/commandTablePage";
import VenteProduitRepportPage from "../dashboard/repport/venteProduitRepportPage";
import VenteFuelRepportPage from "../dashboard/repport/venteFuelRepportPage";
import VenteJournaliereRepportPage from "../dashboard/repport/venteJournaliereRepportPage";
import NotificationsPage from "../dashboard/notification/notificationPage";
import UserProfilePage from "../dashboard/profil/userPage";

const appRouters = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route element={<Dashboard />}>
        <Route path="/approvisionnement/form" element={<SupplyFormPage />} />
        <Route path="/approvisionnement" element={<SupplyTablePage />} />
        <Route path="/bons-de-commande/form" element={<PurchaseOrderFormPage />} />
        <Route path="/bons-de-commande" element={<PurchaseOrderTablePage />} />
        <Route path="/ventes" element={<SaleTablePage />} />
        <Route path="/ventes/form" element={<VenteFormPage />} />
        <Route path="/produits" element={<ProductTablePage />} />
        <Route path="/produits/form" element={<ProductFormPage />} />
        <Route path="/stock-fuel" element={<StockFuelTablePage />} />
        <Route path="/stock-OLA" element={<StockOLATablePage />} />
        <Route path="/clients" element={<ContactTablePage />} />
        <Route path="/comptes" element={<AccountTablePage />} />
        <Route path="/clients/form" element={<ContactFormPage />} />
        <Route path="/comptes/form" element={<AccountFormPage />} />
        <Route path="/inventaire-fuel" element={<FuelInventoryTablePage />} />
        <Route path="/inventaire-OLA" element={<OlaInventoryTablePage />} />
        <Route path="/control-stock" element={<ControlStockTablePage />} />
        <Route path="/depenses" element={<ExpenseTablePage />} />
        <Route path="/commandes" element={<CommandTablePage />} />
        <Route path="/rapport-ventes-produits" element={<VenteProduitRepportPage />} />
        <Route path="/rapport-ventes-fuel" element={<VenteFuelRepportPage />} />
        <Route path="/rapport-ventes-journalieres" element={<VenteJournaliereRepportPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profil" element={<UserProfilePage />} />
      </Route>
      {/* Ajoutez les autres routes ici en suivant le même modèle */}
    </>
  )
);

export default appRouters;
