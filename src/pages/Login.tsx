
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, LogIn, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
      toast({
        title: "Success",
        description: "You've successfully logged in",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black earth-background px-4">
      <div className="absolute top-6 left-6">
        <Link to="/" className="text-white/80 hover:text-white flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
      </div>
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-white/70">Sign in to your account</p>
        </div>
        
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-xl text-center text-white">Sign In</CardTitle>
            <CardDescription className="text-center text-white/60">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10 bg-white/10 border-white/10 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10 bg-white/10 border-white/10 text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 hover-lift"
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
            <div className="w-full text-center text-sm text-white/70">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
