import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/admin/Login";
import "./index.css";
import PrivateRoute from "./middleware/PrivateRouter";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
