import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/homePage';
import PrimaryLayout from "./layout/primaryLayout";
import DynamicDashboardPage from "./pages/dynamicDashboardPage";
import NotFoundPage from "./pages/notFoundPage";
import DynamicAssetPage from "./pages/dynamicAssetPage";
import DynamicConfigPage from "./pages/dynamicConfigPage";
import DynamicSettingsPage from "./pages/dynamicSettingsPage";
import DynamicLogPage from "./pages/dynamicLogPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<HomePage/>} />
        <Route path="/dashboards/:subRouteName" element={<DynamicDashboardPage/>} />
        <Route path="/assets/:subRouteName" element={<DynamicAssetPage/>} />
        <Route path="/configurations/:subRouteName" element={<DynamicConfigPage/>} />
        <Route path="/settings/:subRouteName" element={<DynamicSettingsPage/>} />
        <Route path="/log/:subRouteName" element={<DynamicLogPage/>} />
      </Route>
      <Route  path="*" element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
