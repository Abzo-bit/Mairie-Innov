import { Outlet } from "react-router-dom";

import AgentSidebar from "../components/layout/AgentSidebar";
import AgentNavbar from "../components/layout/AgentNavbar";

export default function AgentLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <AgentSidebar />

      <div style={{ flex: 1 }}>
        <AgentNavbar />

        <main
          style={{
            padding: "24px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
