
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

// Mock data for now
const initialHistoryData = [
  { id: 1, content: "Special offer just for you...", date: "2025-04-20", prediction: "Spam", confidence: "98%" },
  { id: 2, content: "Meeting notes from yesterday", date: "2025-04-19", prediction: "Ham", confidence: "95%" },
  { id: 3, content: "Your account needs verification", date: "2025-04-18", prediction: "Spam", confidence: "99%" },
  { id: 4, content: "Project update from the team", date: "2025-04-17", prediction: "Ham", confidence: "92%" },
  { id: 5, content: "Claim your prize now!", date: "2025-04-16", prediction: "Spam", confidence: "97%" },
  { id: 6, content: "Invoice for your recent purchase", date: "2025-04-15", prediction: "Ham", confidence: "94%" },
  { id: 7, content: "You won the lottery", date: "2025-04-14", prediction: "Spam", confidence: "99%" },
  { id: 8, content: "Team lunch next Friday", date: "2025-04-13", prediction: "Ham", confidence: "96%" },
  { id: 9, content: "Urgent: Your payment is past due", date: "2025-04-12", prediction: "Spam", confidence: "91%" },
  { id: 10, content: "Signup confirmation", date: "2025-04-11", prediction: "Ham", confidence: "98%" },
];

const History = () => {
  const [historyData, setHistoryData] = useState(initialHistoryData);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // This would be replaced with actual API calls
  useEffect(() => {
    // Fetch user history
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const handleFeedback = (id: number, isCorrect: boolean) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Feedback Submitted",
        description: `Thank you for your feedback on prediction #${id}`,
      });
      setIsLoading(false);
    }, 500);
  };

  const handleClearHistory = () => {
    // Add confirmation before clearing
    if (window.confirm("Are you sure you want to clear your history? This action cannot be undone.")) {
      setHistoryData([]);
      toast({
        title: "History Cleared",
        description: "Your prediction history has been cleared",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Prediction History</h1>
          
          <Button 
            variant="destructive" 
            className="mt-4 sm:mt-0"
            onClick={handleClearHistory}
            disabled={historyData.length === 0}
          >
            Clear History
          </Button>
        </div>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle>Email Analysis History</CardTitle>
            <CardDescription className="text-gray-400">
              Your recent email checks with prediction results
            </CardDescription>
          </CardHeader>
          <CardContent>
            {historyData.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                <p className="text-xl mb-2">No history yet</p>
                <p>Your email analysis history will appear here</p>
              </div>
            ) : (
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-left w-2/5">Content</TableHead>
                      <TableHead className="text-left">Date</TableHead>
                      <TableHead className="text-left">Prediction</TableHead>
                      <TableHead className="text-right">Confidence</TableHead>
                      <TableHead className="text-right">Feedback</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historyData.map((item) => (
                      <TableRow key={item.id} className="border-gray-700 hover:bg-gray-800/50">
                        <TableCell className="font-medium">{truncateText(item.content, 40)}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.prediction === "Spam" 
                              ? "bg-primary/20 text-primary" 
                              : "bg-green-500/20 text-green-500"
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
                              className="border-gray-700 hover:bg-gray-700"
                              disabled={isLoading}
                              onClick={() => handleFeedback(item.id, true)}
                            >
                              👍
                            </Button>
                            <Button 
                              variant="outline"
                              size="sm"
                              className="border-gray-700 hover:bg-gray-700"
                              disabled={isLoading}
                              onClick={() => handleFeedback(item.id, false)}
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
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;
