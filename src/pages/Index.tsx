
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Mail, LineChart, RefreshCw } from "lucide-react";
import { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 mx-auto text-center fade-in">
        <span className="px-4 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-full">
          Powered by AI
        </span>
        <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Intelligent Email Protection
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
          Advanced spam detection powered by machine learning. Protect your inbox
          from unwanted messages with real-time analysis.
        </p>
      </section>

      {/* Email Analysis Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-900">
            Analyze Your Email
          </h2>
          <div className="space-y-4">
            <Textarea
              placeholder="Paste email content here..."
              className="w-full min-h-[200px]"
            />
            <Button className="w-full hover-lift">
              Analyze
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 text-center glass-card rounded-xl hover-lift">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Advanced Protection</h3>
            <p className="text-gray-600">
              Real-time scanning and analysis of incoming emails
            </p>
          </div>
          <div className="p-6 text-center glass-card rounded-xl hover-lift">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Smart Filtering</h3>
            <p className="text-gray-600">
              AI-powered classification of spam and legitimate emails
            </p>
          </div>
          <div className="p-6 text-center glass-card rounded-xl hover-lift">
            <LineChart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Learning System</h3>
            <p className="text-gray-600">
              Continuous improvement through user feedback
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="glass-card rounded-2xl p-8">
          <h2 className="mb-8 text-3xl font-bold">Trust in Numbers</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <p className="mt-2 text-gray-600">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                <span className="inline-flex items-center">
                  <RefreshCw className="w-8 h-8 mr-2" />
                  24/7
                </span>
              </div>
              <p className="mt-2 text-gray-600">Real-time Protection</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">50M+</div>
              <p className="mt-2 text-gray-600">Emails Analyzed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-16 text-center bg-gray-50">
        <p className="text-gray-600">
          © 2024 Spam Detection. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
