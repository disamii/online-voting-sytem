import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Pencil, Trash2, Plus, Search, Upload } from "lucide-react"

export function CandidatesManagement() {
  const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false)

  // Mock data for a single election
  const candidates = [
    { id: 1, name: "John Smith", position: "President", party: "Democratic", votes: 342 },
    { id: 2, name: "Sarah Johnson", position: "President", party: "Republican", votes: 285 },
    { id: 3, name: "Michael Brown", position: "President", party: "Independent", votes: 156 },
    { id: 4, name: "Emily Davis", position: "President", party: "Green", votes: 93 },
    { id: 5, name: "Robert Wilson", position: "President", party: "Libertarian", votes: 65 },
    { id: 6, name: "Jennifer Lee", position: "President", party: "Constitution", votes: 42 },
    { id: 7, name: "David Martinez", position: "President", party: "Reform", votes: 28 },
    { id: 8, name: "Lisa Thompson", position: "President", party: "Unity", votes: 15 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Candidates Management</h2>
        <Dialog open={isAddCandidateOpen} onOpenChange={setIsAddCandidateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Candidate
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add New Candidate</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-center">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                    <Upload className="h-4 w-4" />
                    <span className="sr-only">Upload photo</span>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter first name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter last name" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="party">Party</Label>
                <Input id="party" placeholder="Enter party affiliation" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Biography</Label>
                <Textarea id="bio" placeholder="Enter candidate biography" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="platform">Platform</Label>
                <Textarea id="platform" placeholder="Enter candidate platform" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddCandidateOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddCandidateOpen(false)}>Add Candidate</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search candidates..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Party</TableHead>
              <TableHead>Votes</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => {
              // Calculate percentage for this example
              const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0)
              const percentage = totalVotes > 0 ? ((candidate.votes / totalVotes) * 100).toFixed(1) : "0.0"

              return (
                <TableRow key={candidate.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {candidate.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{candidate.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{candidate.party}</TableCell>
                  <TableCell>{candidate.votes.toLocaleString()}</TableCell>
                  <TableCell>{percentage}%</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

