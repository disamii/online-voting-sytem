import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Activity, Users, Vote, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import useStatus from "../customhook/useStatus"
import useCandidates from "../customhook/useCandidates"
import useRecentActivity from "../customhook/useRecentActivity"

export function DashboardOverview() {

  const electionName = "Presidential Election "
  const electionDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const electionStatus = "In Progress"
  const {stats}=useStatus()
  const {candidates}=useCandidates()
  const {recent}=useRecentActivity()


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{electionName}</h2>
          <p className="text-muted-foreground">
            {electionDate} • <span className="text-green-500 font-medium">{electionStatus}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated: Today, 2:30 PM</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats?.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {/* <stat.icon className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Leading Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {candidates.map((candidate, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{candidate.first_name} {candidate.last_name}</p>
                      <p className="text-xs text-muted-foreground">
                        {candidate.party} • {candidate.votes} votes
                      </p>
                    </div>
                    <div className="text-sm font-medium">{candidate.votes}%</div>
                  </div>
                  <Progress value={candidate?.votes} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recent.map((activity, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.details}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

