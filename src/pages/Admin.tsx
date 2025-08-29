import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { BarChart3, Users, Activity, MessageSquare, Calendar, TrendingUp, Shield, Download } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Admin = () => {
  // Sample data for charts
  const monthlyUsage = [
    { month: "Jan", users: 450, sessions: 1200 },
    { month: "Feb", users: 520, sessions: 1400 },
    { month: "Mar", users: 680, sessions: 1800 },
    { month: "Apr", users: 750, sessions: 2100 },
    { month: "May", users: 890, sessions: 2500 },
    { month: "Jun", users: 920, sessions: 2700 }
  ];

  const serviceUsage = [
    { name: "AI Chat", value: 35, color: "hsl(175, 45%, 45%)" },
    { name: "Counseling", value: 25, color: "hsl(155, 35%, 65%)" },
    { name: "Resources", value: 20, color: "hsl(15, 60%, 75%)" },
    { name: "Forum", value: 15, color: "hsl(195, 40%, 70%)" },
    { name: "Screening", value: 5, color: "hsl(175, 50%, 65%)" }
  ];

  const recentSessions = [
    { id: "USR001", type: "AI Chat", duration: "15 min", status: "Completed", risk: "Low" },
    { id: "USR002", type: "Counseling", duration: "50 min", status: "In Progress", risk: "Medium" },
    { id: "USR003", type: "Screening", duration: "8 min", status: "Completed", risk: "High" },
    { id: "USR004", type: "Forum", duration: "25 min", status: "Active", risk: "Low" },
    { id: "USR005", type: "AI Chat", duration: "12 min", status: "Completed", risk: "Low" }
  ];

  const stats = [
    { label: "Total Users", value: "3,542", change: "+12%", icon: Users },
    { label: "Active Sessions", value: "47", change: "+5%", icon: Activity },
    { label: "Messages Today", value: "892", change: "+18%", icon: MessageSquare },
    { label: "Appointments", value: "28", change: "+8%", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Anonymous analytics and platform management</p>
            </div>
            <Button variant="calm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Privacy Notice */}
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20 rounded-2xl">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              All data shown is anonymized and aggregated. No personally identifiable information is displayed.
            </p>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 rounded-2xl bg-card/80 backdrop-blur">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Tabs for different analytics */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 rounded-2xl bg-card/50 backdrop-blur">
            <TabsTrigger value="overview" className="rounded-xl">Overview</TabsTrigger>
            <TabsTrigger value="usage" className="rounded-xl">Usage Analytics</TabsTrigger>
            <TabsTrigger value="sessions" className="rounded-xl">Sessions</TabsTrigger>
            <TabsTrigger value="alerts" className="rounded-xl">Risk Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Usage Trend */}
              <Card className="p-6 rounded-2xl bg-card/80 backdrop-blur">
                <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Usage Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={monthlyUsage}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="hsl(175, 45%, 45%)" strokeWidth={2} />
                    <Line type="monotone" dataKey="sessions" stroke="hsl(15, 60%, 75%)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Service Usage Distribution */}
              <Card className="p-6 rounded-2xl bg-card/80 backdrop-blur">
                <h3 className="text-lg font-semibold text-foreground mb-4">Service Usage Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={serviceUsage}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Peak Hours */}
            <Card className="p-6 rounded-2xl bg-card/80 backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground mb-4">Peak Usage Hours</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={[
                  { hour: "6AM", sessions: 20 },
                  { hour: "9AM", sessions: 45 },
                  { hour: "12PM", sessions: 60 },
                  { hour: "3PM", sessions: 55 },
                  { hour: "6PM", sessions: 80 },
                  { hour: "9PM", sessions: 95 },
                  { hour: "12AM", sessions: 30 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="hsl(175, 45%, 45%)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card className="p-6 rounded-2xl bg-card/80 backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Sessions (Anonymized)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Service Type</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Duration</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSessions.map((session) => (
                      <tr key={session.id} className="border-b border-border/50">
                        <td className="py-3 px-4 text-sm text-foreground">{session.id}</td>
                        <td className="py-3 px-4 text-sm text-foreground">{session.type}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{session.duration}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            session.status === "Completed" ? "bg-green-100 text-green-700" :
                            session.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {session.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            session.risk === "High" ? "bg-red-100 text-red-700" :
                            session.risk === "Medium" ? "bg-yellow-100 text-yellow-700" :
                            "bg-green-100 text-green-700"
                          }`}>
                            {session.risk}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card className="p-6 rounded-2xl bg-destructive/5 border-destructive/20">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="h-5 w-5 text-destructive" />
                <h3 className="text-lg font-semibold text-foreground">Risk Detection Summary</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                System has identified 3 users who may need immediate professional support based on screening results and chat patterns.
              </p>
              <Button variant="destructive" size="sm">
                Review Cases
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;