import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import AgentLayout from "../layouts/AgentLayout";

import Login from "../pages/auth/Login";

import Dashboard from "../pages/Dashboard";
import StateCivil from "../pages/StateCivil";
import Urbanisme from "../pages/Urbanisme";
import Voirie from "../pages/Voirie";
import Services from "../pages/Services";
import ProjetsInvestissement from "../pages/ProjetsInvestissement";
import Complaints from "../pages/Complaints";
import LostDocuments from "../pages/LostDocuments";
import Analytics from "../pages/Analytics";
import RequestDetails from "../pages/RequestDetails";
import ComplaintDetails from "../pages/ComplaintDetails";
import Users from "../pages/Users";
import Agents from "../pages/Agents";
import Settings from "../pages/Settings";

import AgentDashboard from "../pages/agent/AgentDashboard";
import AgentStateCivil from "../pages/agent/AgentStateCivil";
import AgentUrbanisme from "../pages/agent/AgentUrbanisme";
import AgentVoirie from "../pages/agent/AgentVoirie";
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

      <Route element={<AdminLayout />}>

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/state-civil"
          element={<StateCivil />}
        />

        <Route
          path="/admin/urbanisme"
          element={<Urbanisme />}
        />

        <Route
          path="/admin/voirie"
          element={<Voirie />}
        />

        <Route
          path="/admin/services"
          element={<Services />}
        />

        <Route
          path="/admin/projets-investissement"
          element={<ProjetsInvestissement />}
        />


        <Route
          path="/admin/requests"
          element={<Navigate to="/admin/state-civil" replace />}
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
          path="/admin/lost-documents"
          element={<LostDocuments />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

      </Route>

      <Route element={<AgentLayout />}>

        <Route
          path="/agent/dashboard"
          element={<AgentDashboard />}
        />

        <Route
          path="/agent/state-civil"
          element={<AgentStateCivil />}
        />

        <Route
          path="/agent/urbanisme"
          element={<AgentUrbanisme />}
        />

        <Route
          path="/agent/voirie"
          element={<AgentVoirie />}
        />

        <Route
          path="/agent/requests"
          element={<Navigate to="/agent/state-civil" replace />}
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
