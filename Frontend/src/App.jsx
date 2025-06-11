import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/Login";
import "./index.css";
import PrivateRoute from "./middleware/PrivateRouter";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
