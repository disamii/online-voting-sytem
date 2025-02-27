import { useState } from "react"
import { AdminSidebar } from "./sidebar"
import { DashboardOverview } from "./dashboard-overview"
import { CandidatesManagement } from "./candidates-management"
import { VotersManagement } from "./voters-management"
import { ElectionsManagement } from "./elections-management"




export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {activeTab === "dashboard" && <DashboardOverview />}
          {activeTab === "elections" && <ElectionsManagement />}
          {activeTab === "candidates" && <CandidatesManagement />}
          {activeTab === "voters" && <VotersManagement />}
        </main>
      </div>
    </div>
  )
}

