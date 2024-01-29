import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInFormComponent from "./components/Auth/SignInFormComponent/SignInFormComponent";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent";
import InvoiceComponent from "./components/InvoiceComponent/InvoiceComponent";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";
import CalendarComponent from "./components/CalendarComponent/CalendarComponent";
import NotificationComponent from "./components/NotificationComponent/NotificationComponent";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import SidebarComponent from "./components/SidebarComponent/SidebarComponent";
import UploadComponent from "./components/UploadComponent/UploadComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <SidebarComponent onLogin={handleLogin} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <UploadComponent onLogout={handleLogout} />
            ) : (
              <SignInFormComponent onLogin={handleLogin} />
            )
          }
        />
        <Route path="/dashboard" Component={DashboardComponent} />
        <Route
          path="/upload"
          element={<UploadComponent onLogout={handleLogout} />}
        />
        <Route path="/invoice" Component={InvoiceComponent} />
        <Route path="/schedule" Component={ScheduleComponent} />
        <Route path="/calendar" Component={CalendarComponent} />
        <Route path="notification" Component={NotificationComponent} />
        <Route path="/settings" Component={SettingsComponent} />
      </Routes>
    </Router>
  );
}

export default App;
