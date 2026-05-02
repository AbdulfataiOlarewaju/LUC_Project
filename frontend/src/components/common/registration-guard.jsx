import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RegistrationGuard() {
  const location = useLocation();
  const registerData = useSelector((state) => state.register);

  // Check if step one is complete
  const isStepOneComplete =
    registerData.full_name?.trim() &&
    registerData.institution_id?.trim() &&
    registerData.major?.trim() &&
    registerData.level?.trim();

  // Check if step two is complete
  const isStepTwoComplete =
    isStepOneComplete &&
    registerData.sub_niche_id?.trim() &&
    registerData.bio?.trim();

  // Check if step three is complete (for verification page access)
  const isStepThreeComplete =
    isStepTwoComplete &&
    registerData.email?.trim() &&
    registerData.password?.trim();

  const currentPath = location.pathname;

  // Allow access to step-one (no requirements)
  if (currentPath === "/talent/sign-up") {
    return <Outlet />;
  }

  // Protect step-two: requires step-one to be complete
  if (currentPath === "/talent/sign-up/step-two") {
    if (!isStepOneComplete) {
      return <Navigate to="/talent/sign-up" replace />;
    }
    return <Outlet />;
  }

  // Protect step-three: requires step-two to be complete
  if (currentPath === "/talent/sign-up/step-three") {
    if (!isStepTwoComplete) {
      return <Navigate to="/talent/sign-up/step-two" replace />;
    }
    return <Outlet />;
  }

  // Protect verification: requires step-three to be complete
  if (currentPath === "/talent/sign-up/verification") {
    if (!isStepThreeComplete) {
      return <Navigate to="/talent/sign-up/step-three" replace />;
    }
    return <Outlet />;
  }

  return <Outlet />;
}

export default RegistrationGuard;
