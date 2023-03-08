import "./App.css";

import Home from "./pages/Home/Home";
import { InfoProvider } from "./context/InfoContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import PMPage from "./pages/PMPage/PMPage";
import MMPage from "./pages/MMPage/MMPage";
import FMPage from "./pages/FMPage/FMPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <InfoProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/pm" element={<PMPage />} />
              <Route path="/mm" element={<MMPage />} />
              <Route path="/fm" element={<FMPage />} />
            </Routes>
          </InfoProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}
