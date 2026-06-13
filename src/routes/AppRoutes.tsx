import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Requests from "../pages/Requests";
import Complaints from "../pages/Complaints";
import LostDocuments from "../pages/LostDocuments";
import QrVerification from "../pages/QrVerification";
import Analytics from "../pages/Analytics";
import RequestDetails from "../pages/RequestDetails";
import ComplaintDetails from "../pages/ComplaintDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/requests" element={<Requests />} />
        <Route path="/requests/:id" element={<RequestDetails />} />

        <Route path="/complaints" element={<Complaints />} />
        <Route
          path="/complaints/:id"
          element={<ComplaintDetails />}
        />

        <Route
          path="/lost-documents"
          element={<LostDocuments />}
        />

        <Route
          path="/qr-verification"
          element={<QrVerification />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />
      </Route>
    </Routes>
  );
}
