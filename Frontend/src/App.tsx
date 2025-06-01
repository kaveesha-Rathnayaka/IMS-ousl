import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BrowseInventory from "./pages/BrowseInventory";
import MyRequests from "./pages/MyRequests";
import Notifications from "./pages/Notifications";
import ChatAdmin from "./pages/ChatAdmin";
import ProfileSettings from "./pages/ProfileSettings";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import RequestConfirmation from "./pages/RequestConfirmation";
import PickupInstructions from "./pages/PickupInstructions";
import ReturnItem from "./pages/ReturnItem";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import RequestRepair from "./pages/RequestRepair";
import MyItems from "./pages/MyItems";
import ReturnItemRequest from "./pages/ReturnItemRequest";
import RequestForm from "./pages/RequestForm";
import HomePage from "./pages/HomePage";



import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminInventoryManagement from "./pages/Admin/AdminInventoryManagement";
import AdminRequestsApprovals from "./pages/Admin/AdminRequestsApprovals";
import AdminReportsAnalytics from "./pages/Admin/AdminReportsAnalytics";
import AdminUserManagement from "./pages/Admin/AdminUserManagement";
import AdminSecurityLogs from "./pages/Admin/AdminSecurityLogs";
import AdminNotifications from "./pages/Admin/AdminNotifications";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminCondemnedItems from "./pages/Admin/AdminCondemnedItems";
import AdminTransferItems from "./pages/Admin/AdminTransferItems";
import AdminRepairingItems from "./pages/Admin/AdminRepairingItems";
import AdminRestockingItems from "./pages/Admin/AdminRestockingItems";
import AdminQRCodeReader from "./pages/Admin/AdminQRCodeReader";
import AdminGenerateEmails from "./pages/Admin/AdminGenerateEmails";
import AdminAuditLog from "./pages/Admin/AdminAuditLog";

import AdminForgotPassword from "./pages/Admin/AdminForgotPassword";
import RequestHistory from "./pages/Admin/AdminRequestHistory";
import HODRequestPage from "./pages/Admin/HODRequestPage";
import DigitalSign from "./pages/Admin/DigitalSign";
import AdminFinalSign from "./pages/Admin/AdminFinalSign";
import FinalConfirmation from "./pages/Admin/FinalConfirmation";
import IssueLetter from "./pages/Admin/IssueLetter";



import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";

import EditProfile from "./pages/Admin/EditProfile";
import ChangePassword from "./pages/Admin/ChangePassword";
import LogoutConfirmation from "./pages/Admin/LogoutConfirmation";




const App: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/browse-inventory" element={<BrowseInventory />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat-admin" element={<ChatAdmin />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />

        <Route path="/Header" element={<Header />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Footer" element={<Footer />} />

        <Route path="request-confirmation" element={<RequestConfirmation />} />
        <Route path="/pickup-instructions" element={< PickupInstructions/>} />
        <Route path="/return-item" element={< ReturnItem/>} />
        <Route path="/forgot-password" element={< ForgotPassword/>} />
        <Route path="/register" element={< Register/>} />
        <Route path="/request-repair" element={< RequestRepair/>} />
        <Route path="/my-items" element={< MyItems/>} />
        <Route path="/request-return" element={<ReturnItemRequest />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/home-page" element={<HomePage />} />
        






        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admininventory-management" element={<AdminInventoryManagement />} />
        <Route path="/requests-approvals" element={<AdminRequestsApprovals />} />
        <Route path="/reports-analytics" element={<AdminReportsAnalytics />} />
        <Route path="/user-management" element={<AdminUserManagement />} />
        <Route path="/security-logs" element={<AdminSecurityLogs />} />
        <Route path="/adminnotifications" element={<AdminNotifications />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-condemned-items" element={<AdminCondemnedItems />} />
        <Route path="/admin-transfer-items" element={<AdminTransferItems />} />
        <Route path="/admin-updating-repairing-items" element={<AdminRepairingItems />} />
        <Route path="/admin-updating-restocking-items" element={<AdminRestockingItems />} />
        <Route path="/admin-qr-code-reader" element={<AdminQRCodeReader />} />
        <Route path="/admin-generate-emails" element={<AdminGenerateEmails  />} />
        <Route path="/admin-audit-log" element={<AdminAuditLog />} />


        <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
        <Route path="/request-history" element={<RequestHistory />} />
        <Route path="/hod-request" element={<HODRequestPage />} />
        <Route path="/digital-sign" element={<DigitalSign />} />
        <Route path="/admin-final-sign" element={<AdminFinalSign />} />
        <Route path="/final-confirmation" element={<FinalConfirmation />} />
        <Route path="/issue-letter" element={<IssueLetter />} />



        





        <Route path="/Header" element={<AdminHeader />} />
        <Route path="/Sidebar" element={<AdminSidebar />} />
        <Route path="/Footer" element={<AdminFooter />} />

        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={< ChangePassword/>} />
        <Route path="/logout-confirmation" element={< LogoutConfirmation/>} />
        

        
      </Routes>
    </div>
  );
};

export default App;
