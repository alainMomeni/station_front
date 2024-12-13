// router/index.tsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../login/loginPage";
import Dashboard from "../dashboard/Dashboard";
import FormPage from "../dashboard/form/FormPage";
import SignupForm from "@/components/login/form/signupForm";
import TablePage from "../dashboard/table/tablePage";
import { ProtectedRoute } from "./PrivateRoute";

const appRouters = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Login />} >
         <Route path="/" element={<SignupForm />} />
      </Route>
      <Route element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }>
        <Route path="/fiche-de-prix" element={<TablePage />} />
        <Route path="/produits" element={<TablePage />} />
        <Route path="/fiche-de-prix/form" element={<FormPage />} />
        <Route path="/produits/form" element={<FormPage />} />
      </Route>
      {/* Ajoutez les autres routes ici en suivant le même modèle */}
    </>
  )
);

export default appRouters;
