import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "./pages/landingPage/landingPage";
import { AuthPage } from "./pages/authPage/authPage";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Main, DepositPage, Withdraw, Earnings } from './pages/dashboard/components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="main" element={<Main />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="earnings" element={<Earnings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
