
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Mail, LineChart, RefreshCw, ThumbsUp, ThumbsDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [emailContent, setEmailContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isSpam: boolean; confidence: number }>(null);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!emailContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter some email content to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    // Simulate API call for analysis
    setTimeout(() => {
      // Random result for demonstration
      const isSpam = Math.random() > 0.5;
      const confidence = 70 + Math.floor(Math.random() * 30);
      
      setResult({ isSpam, confidence });
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `This email is ${isSpam ? "likely spam" : "probably safe"}`,
      });
    }, 1500);
  };

  const handleFeedback = (isCorrect: boolean) => {
    toast({
      title: "Feedback Submitted",
      description: "Thank you for helping improve our system",
    });
    setResult(null);
    setEmailContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container px-4 pt-16 pb-12 mx-auto text-center fade-in">
        <span className="px-4 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-full">
          Powered by AI
        </span>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Intelligent Email Protection
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
          Advanced spam detection powered by machine learning. Protect your inbox
          from unwanted messages with real-time analysis.
        </p>
      </section>

      {/* Email Analysis Section */}
      <section className="container px-4 py-8 mx-auto">
        <div className="max-w-3xl mx-auto glass-card bg-gray-800/50 border-gray-700 rounded-2xl p-8">
          <h2 className="mb-6 text-2xl font-semibold text-center text-white">
            Analyze Your Email
          </h2>
          <div className="space-y-4">
            <Textarea
              placeholder="Paste email content here..."
              className="w-full min-h-[200px] bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
            
            {result ? (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  result.isSpam 
                    ? "bg-red-900/20 border border-red-700/50" 
                    : "bg-green-900/20 border border-green-700/50"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {result.isSpam ? (
                        <Shield className="text-red-400" />
                      ) : (
                        <Shield className="text-green-400" />
                      )}
                      <span className="font-semibold">
                        {result.isSpam ? "Likely Spam" : "Probably Safe"}
                      </span>
                    </div>
                    <div className="text-sm">
                      Confidence: <span className="font-semibold">{result.confidence}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => handleFeedback(true)} 
                    variant="outline"
                    className="flex-1 border-gray-700 hover:bg-gray-700"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" /> Correct
                  </Button>
                  
                  <Button 
                    onClick={() => handleFeedback(false)} 
                    variant="outline"
                    className="flex-1 border-gray-700 hover:bg-gray-700"
                  >
                    <ThumbsDown className="w-4 h-4 mr-2" /> Incorrect
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      setResult(null);
                      setEmailContent("");
                    }}
                    variant="secondary"
                    className="flex-1"
                  >
                    Analyze Another
                  </Button>
                </div>
              </div>
            ) : (
              <Button 
                className="w-full hover-lift" 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>Analyze</>
                )}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-gray-800/50 border-gray-700 p-6 text-center hover-lift">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Advanced Protection</h3>
            <p className="text-gray-400">
              Real-time scanning and analysis of incoming emails
            </p>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 p-6 text-center hover-lift">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Smart Filtering</h3>
            <p className="text-gray-400">
              AI-powered classification of spam and legitimate emails
            </p>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 p-6 text-center hover-lift">
            <LineChart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Learning System</h3>
            <p className="text-gray-400">
              Continuous improvement through user feedback
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="glass-card bg-gray-800/50 border-gray-700 rounded-2xl p-8">
          <h2 className="mb-8 text-3xl font-bold">Trust in Numbers</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <p className="mt-2 text-gray-400">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                <span className="inline-flex items-center">
                  <RefreshCw className="w-8 h-8 mr-2" />
                  24/7
                </span>
              </div>
              <p className="mt-2 text-gray-400">Real-time Protection</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">50M+</div>
              <p className="mt-2 text-gray-400">Emails Analyzed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-16 text-center bg-gray-900">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © 2025 SpamGuard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
