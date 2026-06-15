import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import AgentLayout from "../layouts/AgentLayout";

import Login from "../pages/auth/Login";

import Dashboard from "../pages/Dashboard";
import Requests from "../pages/Requests";
import Complaints from "../pages/Complaints";
import LostDocuments from "../pages/LostDocuments";
import Analytics from "../pages/Analytics";
import RequestDetails from "../pages/RequestDetails";
import ComplaintDetails from "../pages/ComplaintDetails";
import Users from "../pages/Users";
import Agents from "../pages/Agents";
import Departments from "../pages/Departments";
import Settings from "../pages/Settings";

import AgentDashboard from "../pages/agent/AgentDashboard";
import AgentRequests from "../pages/agent/AgentRequests";
import AgentComplaints from "../pages/agent/AgentComplaints";
import AgentLostDocuments from "../pages/agent/AgentLostDocuments";
import AgentProfile from "../pages/agent/AgentProfile";


export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />


      {/* ADMIN */}

      <Route element={<AdminLayout />}>

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/requests"
          element={<Requests />}
        />

        <Route
          path="/admin/requests/:id"
          element={<RequestDetails />}
        />

        <Route
          path="/admin/complaints"
          element={<Complaints />}
        />

        <Route
          path="/admin/complaints/:id"
          element={<ComplaintDetails />}
        />

        <Route
          path="/admin/users"
          element={<Users />}
        />

        <Route
          path="/admin/agents"
          element={<Agents />}
        />

        <Route
          path="/admin/departments"
          element={<Departments />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

        <Route
          path="/admin/lost-documents"
          element={<LostDocuments />}
        />


        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

      </Route>

      {/* AGENT */}

      <Route element={<AgentLayout />}>

        <Route
          path="/agent/dashboard"
          element={<AgentDashboard />}
        />

        <Route
          path="/agent/requests"
          element={<AgentRequests />}
        />

        <Route
          path="/agent/complaints"
          element={<AgentComplaints />}
        />

        <Route
          path="/agent/lost-documents"
          element={<AgentLostDocuments />}
        />

        <Route
          path="/agent/profile"
          element={<AgentProfile />}
        />

      </Route>

    </Routes>
  );
}
