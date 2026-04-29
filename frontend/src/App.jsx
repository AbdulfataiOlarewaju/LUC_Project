import { Route, Routes } from "react-router"
import LandingPage from "./pages/landing"
import Selection from "./pages/landing/selection"
import TalentLoginPage from "./pages/talent/auth/login"
import TalentRegisterOnePage from "./pages/talent/auth/register-step-one"
import TalentRegsiterTwoPage from "./pages/talent/auth/register-step-two"
import TalentRegsiterThreePage from "./pages/talent/auth/register-step-three"
import UniversityLoginPage from "./pages/university/auth/login"
import SuperAdminLoginPage from "./pages/super-admin/auth/login"
import ClientLoginPage from "./pages/client/auth/login"
import UniversityRegsiterPage from "./pages/university/auth/resgiter"
import SuperAdminRegsiterPage from "./pages/super-admin/auth/resgiter"
import ClientRegsiterPage from "./pages/client/auth/resgiter"
import VerifiationStatus from "./pages/talent/auth/verification-status"
import { Toaster } from "sonner"
import TalentDashboard from "./pages/talent/telent-dashboard"
import Portifolio from "./pages/talent/portifolio"
import LearningLog from "./pages/talent/learning-log"
import Message from "./pages/talent/message"
import Competiton from "./pages/talent/competion"
import AccountManagement from "./pages/talent/account-management"
import Analysitics from "./pages/talent/analytics"
import Settings from "./pages/talent/settings"




function App() {


  return (
   <div className='flex flex-col overflow-hidden bg-white'>
    <Toaster position="top-left" />
    <Routes>

      {/* LandingPage Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/selection" element={<Selection/>}/>

      {/* Telent Route */}
      <Route path="/talent-sign-in" element={<TalentLoginPage/>} />
      <Route path="/talent-sign-up" element={<TalentRegisterOnePage/>}/>
      <Route path="/talent-sign-up/step-two" element={<TalentRegsiterTwoPage/>}/>
      <Route path="/talent-sign-up/step-three" element={<TalentRegsiterThreePage/>}/>
      <Route path="/talent-sign-up/verification" element={<VerifiationStatus/>}/>
      <Route path="talent-dashboard" element={<TalentDashboard/>}/>
      <Route path="talent-portfolio" element={<Portifolio/>}/>
      <Route path="talent-logs" element={<LearningLog/>}/>
      <Route path="talent-messages" element={<Message/>}/>
      <Route path="talent-competitions" element={<Competiton/>}/>
      <Route path="talent-settings" element={<Settings/>}/>
      <Route path="talent-account-management" element={<AccountManagement/>}/>
      <Route path="talent-analytics" element={<Analysitics/>}/>

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