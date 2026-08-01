"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companySize: "",
    industry: "",
    primaryChallenge: "",
  });

  const updateForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = async () => {
    if (step === 1) {
      // Simulate partial submission capture for abandonment recovery
      console.log("Captured partial lead:", formData.email);
    }
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit fully
      console.log("Final submission:", formData);
      setStep(4); // Success step
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-cf-card border-cf-border shadow-float">
      {step < 4 && (
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-mono-caps text-cf-text-tertiary">Step {step} of 3</span>
            <span className="text-sm font-medium text-cf-text-secondary">{Math.round((step / 3) * 100)}%</span>
          </div>
          <Progress value={(step / 3) * 100} className="h-2 mb-4" />
          <CardTitle className="font-serif-display text-h3 text-cf-text">
            {step === 1 && "Let's start with the basics"}
            {step === 2 && "Tell us about your business"}
            {step === 3 && "What's your biggest challenge?"}
          </CardTitle>
          <CardDescription className="text-cf-text-secondary">
            {step === 1 && "We need your email to send the technical assessment."}
            {step === 2 && "This helps us tailor our engineering recommendations."}
            {step === 3 && "We specialize in resolving operational bottlenecks."}
          </CardDescription>
        </CardHeader>
      )}

      <CardContent>
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <Label htmlFor="name">Work Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => updateForm("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => updateForm("email", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                placeholder="e.g. Manufacturing, Logistics"
                value={formData.industry}
                onChange={(e) => updateForm("industry", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size (Revenue/Employees)</Label>
              <Input
                id="companySize"
                placeholder="e.g. 50+ employees or 10Cr+"
                value={formData.companySize}
                onChange={(e) => updateForm("companySize", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <Label htmlFor="primaryChallenge">What are you trying to solve?</Label>
              <Input
                id="primaryChallenge"
                placeholder="e.g. Legacy ERP is too slow, need custom CRM..."
                value={formData.primaryChallenge}
                onChange={(e) => updateForm("primaryChallenge", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="py-12 text-center animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-[var(--color-status-green)] opacity-90 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif-display text-h3 mb-2 text-cf-text">Analysis Requested</h3>
            <p className="text-cf-text-secondary mb-8">
              We'll be in touch within 15 minutes with your preliminary technical assessment.
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                console.log("Opening calendar widget");
              }}
            >
              Book Priority Discovery Call
            </Button>
          </div>
        )}
      </CardContent>

      {step < 4 && (
        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="text-cf-text-secondary"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={(step === 1 && !formData.email) || (step === 2 && !formData.industry)}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {step === 3 ? "Complete Request" : "Continue"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
