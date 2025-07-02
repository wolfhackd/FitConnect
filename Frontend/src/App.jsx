import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/Login";
import "./index.css";
import PrivateRoute from "./middleware/PrivateRouter";
import Dashboard from "./pages/admin/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import StudentManager from "./pages/admin/StudentManager";
import CreateStudent from "./pages/admin/CreateStudent";
import PlanManager from "./pages/admin/PlanManager";
import CreatePlan from "./pages/admin/CreatePlan";
import EditStudent from "./pages/admin/EditStudent";
import StudentProfilePage from "./pages/admin/StudentProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* ---------------------------------------------------------------- */}
        <Route element={<PrivateRoute allowedTypes={[1]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alunos" element={<StudentManager />} />
          <Route path="/alunos/criar" element={<CreateStudent />} />
          <Route path="/alunos/editar" element={<EditStudent />} />
          <Route path="/alunos/detalhes" element={<StudentProfilePage />} />
          <Route path="/planos" element={<PlanManager />} />
          <Route path="/planos/criar" element={<CreatePlan />} />
        </Route>
        {/* ---------------------------------------------------------------- */}
        <Route element={<PrivateRoute allowedTypes={[0]} />}>
          <Route path="/he" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
