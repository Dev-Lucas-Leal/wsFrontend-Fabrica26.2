import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export function AppRoute() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />
      
    </Routes>

  );
}