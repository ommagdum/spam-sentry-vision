
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { storeTokens } from "@/utils/authUtils";
import Navigation from "@/components/Navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login - replace with actual authentication logic
    setTimeout(() => {
      // Store the JWT tokens
      storeTokens(
        "mock_access_token_" + Date.now(),
        "mock_refresh_token_" + Date.now(),
        3600 // 1 hour expiry
      );
      
      toast({
        title: "Success",
        description: "You've successfully logged in",
      });
      
      setIsLoading(false);
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Navigation />
      
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">Sign in to your account to continue</p>
          </div>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl text-center">Sign In</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="pl-10 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="pl-10 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full hover-lift"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" /> Sign In
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="w-full text-center text-sm">
                <Link to="#" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="w-full text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-gray-400 hover:text-primary">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

