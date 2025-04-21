import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import AdminLayout from "./layouts/AdminLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "Rs. ";

const ProtectedRoute = ({ token, children }) => {
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    if (token && location.pathname === "/login") {
      navigate("/");
    }
  }, [token, location, navigate]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute token={token}>
              <AdminLayout token={token} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
