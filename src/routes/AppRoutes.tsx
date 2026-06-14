import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Requests from "../pages/Requests";
import Complaints from "../pages/Complaints";
import LostDocuments from "../pages/LostDocuments";
import LostDocumentDetails from "../pages/LostDocumentDetails";
import Analytics from "../pages/Analytics";
import RequestDetails from "../pages/RequestDetails";
import ComplaintDetails from "../pages/ComplaintDetails";
import Users from "../pages/Users";
import Agents from "../pages/Agents";
import Departments from "../pages/Departments";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/requests" element={<Requests />} />
        <Route path="/requests/:id" element={<RequestDetails />} />

        <Route path="/complaints" element={<Complaints />} />
        <Route path="/complaints/:id" element={<ComplaintDetails />} />

        <Route path="/users" element={<Users />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/lost-documents" element={<LostDocuments />} />
        <Route path="/lost-documents/:id" element={<LostDocumentDetails />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
