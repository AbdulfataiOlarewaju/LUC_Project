import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import LandingPage from "./pages/landing";
import Selection from "./pages/landing/selection";
import TalentLoginPage from "./pages/talent/auth/login";
import TalentRegisterOnePage from "./pages/talent/auth/register-step-one";
import TalentRegsiterTwoPage from "./pages/talent/auth/register-step-two";
import TalentRegsiterThreePage from "./pages/talent/auth/register-step-three";
import UniversityLoginPage from "./pages/university/auth/login";
import SuperAdminLoginPage from "./pages/super-admin/auth/login";
import ClientLoginPage from "./pages/client/auth/login";
import UniversityRegsiterPage from "./pages/university/auth/resgiter";
import SuperAdminRegsiterPage from "./pages/super-admin/auth/resgiter";
import ClientRegsiterPage from "./pages/client/auth/resgiter";
import VerifiationStatus from "./pages/talent/auth/verification-status";
import { Toaster } from "sonner";
import TalentDashboard from "./pages/talent/telent-dashboard";
import Portifolio from "./pages/talent/portifolio";
import LearningLog from "./pages/talent/learning-log";
import Message from "./pages/talent/message";
import Competiton from "./pages/talent/competion";
import AccountManagement from "./pages/talent/account-management";
import Analysitics from "./pages/talent/analytics";
import Settings from "./pages/talent/settings";
import CheckAuth from "./components/common/check-auth";
import RegistrationGuard from "./components/common/registration-guard";

function App() {
  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Toaster position="top-left" />
      <Routes>

      {/* LandingPage Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/selection" element={<Selection/>}/>

{/* Telent Route */}
      <Route path="/talent" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}/>}>
      
         <Route path="sign-in" element={<TalentLoginPage/>} />
      <Route element={<RegistrationGuard />}>
        <Route path="sign-up" element={<TalentRegisterOnePage/>}/>
        <Route path="sign-up/step-two" element={<TalentRegsiterTwoPage/>}/>
        <Route path="sign-up/step-three" element={<TalentRegsiterThreePage/>}/>
        <Route path="sign-up/verification" element={<VerifiationStatus/>}/>
      </Route>
      <Route path="dashboard" element={<TalentDashboard/>}/>
      <Route path="portfolio" element={<Portifolio/>}/>
      <Route path="logs" element={<LearningLog/>}/>
      <Route path="messages" element={<Message/>}/>
      <Route path="competitions" element={<Competiton/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="account-management" element={<AccountManagement/>}/>
      <Route path="analytics" element={<Analysitics/>}/>
      </Route>
     

      {/* University Route */}
      <Route path="/university-sign-in" element={<UniversityLoginPage/>} />
      <Route path="/university-sign-up" element={<UniversityRegsiterPage/>} /> 

      {/* Super Admin Route */}
      <Route path="/super-admin-sign-in" element={<SuperAdminLoginPage/>} />
      <Route path="/super-admin-sign-up" element={<SuperAdminRegsiterPage/>} />  

      {/* Client Route */}
      <Route path="/client-sign-in" element={<ClientLoginPage/>} />
      <Route path="/client-sign-up" element={<ClientRegsiterPage/>} />
    </Routes>
   </div>
  )
}

export default App
