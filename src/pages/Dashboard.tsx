
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Shield, Mail, LineChart as LineChartIcon, Clock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock data for now - would be replaced with actual API data
const lineChartData = [
  { name: "Jan", spam: 40, ham: 60 },
  { name: "Feb", spam: 30, ham: 70 },
  { name: "Mar", spam: 20, ham: 80 },
  { name: "Apr", spam: 27, ham: 73 },
  { name: "May", spam: 18, ham: 82 },
  { name: "Jun", spam: 23, ham: 77 },
  { name: "Jul", spam: 34, ham: 66 },
];

const pieChartData = [
  { name: "Spam", value: 30 },
  { name: "Ham", value: 70 },
];

const COLORS = ["#9b87f5", "#82ca9d"];

const historyData = [
  { id: 1, content: "Special offer just for you...", date: "2025-04-20", prediction: "Spam", confidence: "98%" },
  { id: 2, content: "Meeting notes from yesterday", date: "2025-04-19", prediction: "Ham", confidence: "95%" },
  { id: 3, content: "Your account needs verification", date: "2025-04-18", prediction: "Spam", confidence: "99%" },
  { id: 4, content: "Project update from the team", date: "2025-04-17", prediction: "Ham", confidence: "92%" },
  { id: 5, content: "Claim your prize now!", date: "2025-04-16", prediction: "Spam", confidence: "97%" },
];

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState({
    totalChecks: 548,
    spamDetected: 183,
    hamDetected: 365,
    accuracy: 96.5
  });

  // This would be replaced with actual API calls
  useEffect(() => {
    // Fetch user stats
    // Fetch history data
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
          Your Dashboard
        </h1>

        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Prediction History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="fade-in">
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Checks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.totalChecks}</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Spam Detected</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{stats.spamDetected}</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ham Detected</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">{stats.hamDetected}</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.accuracy}%</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Spam vs Ham Ratio</CardTitle>
                  <CardDescription className="text-gray-600">Distribution of detected emails</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ChartContainer 
                      config={{ 
                        spam: { color: "#9b87f5" }, 
                        ham: { color: "#82ca9d" }
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 mr-2 rounded-full bg-primary"></div>
                        <span>Spam</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 mr-2 rounded-full bg-green-500"></div>
                        <span>Ham</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Detection Trend</CardTitle>
                  <CardDescription className="text-gray-600">Monthly detection statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ChartContainer 
                      config={{ 
                        spam: { color: "#9b87f5" }, 
                        ham: { color: "#82ca9d" }
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineChartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis stroke="#666" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="spam" stroke="#9b87f5" strokeWidth={2} />
                          <Line type="monotone" dataKey="ham" stroke="#82ca9d" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="fade-in">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Email Check History</CardTitle>
                <CardDescription className="text-gray-600">
                  Your recent email analysis results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-left">Content</TableHead>
                        <TableHead className="text-left">Date</TableHead>
                        <TableHead className="text-left">Prediction</TableHead>
                        <TableHead className="text-right">Confidence</TableHead>
                        <TableHead className="text-right">Feedback</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historyData.map((item) => (
                        <TableRow key={item.id} className="border-gray-200">
                          <TableCell className="font-medium">{truncateText(item.content, 30)}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item.prediction === "Spam" 
                                ? "bg-red-100 text-red-600" 
                                : "bg-green-100 text-green-600"
                            }`}>
                              {item.prediction}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">{item.confidence}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="outline"
                                size="sm"
                                className="border-gray-200 hover:bg-gray-50"
                                onClick={() => alert(`Feedback submitted for ${item.id}`)}
                              >
                                👍
                              </Button>
                              <Button 
                                variant="outline"
                                size="sm"
                                className="border-gray-200 hover:bg-gray-50"
                                onClick={() => alert(`Feedback submitted for ${item.id}`)}
                              >
                                👎
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
