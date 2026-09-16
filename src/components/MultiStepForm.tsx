"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// ─── Zod Schema ─────────────────────────────────────────────────────────────
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  industry: z.string().min(2, "Please enter your industry"),
  companySize: z.string().min(1, "Please enter your company size"),
  primaryChallenge: z.string().min(10, "Please describe your challenge (min 10 chars)"),
});

type FormData = z.infer<typeof formSchema>;

const FORM_STORAGE_KEY = "parther_lead_form_cache";

interface MultiStepFormProps {
  sourcePage?: string;
  sourceIdentifier?: string;
}

export default function MultiStepForm({ sourcePage = 'Unknown', sourceIdentifier = 'None' }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      industry: "",
      companySize: "",
      primaryChallenge: "",
    },
  });

  const formValues = watch();

  // ─── LocalStorage Caching (WCAG 3.3.7 Redundant Entry) ───────────────────
  useEffect(() => {
    const cachedData = localStorage.getItem(FORM_STORAGE_KEY);
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        // Hydrate form
        Object.keys(parsed).forEach((key) => {
          setValue(key as keyof FormData, parsed[key]);
        });
      } catch (e) {
        console.error("Failed to parse cached form data", e);
      }
    }
  }, [setValue]);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formValues));
  }, [formValues]);

  // ─── Step Navigation ──────────────────────────────────────────────────────
  const handleNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ["name", "email", "phone"];
    if (step === 2) fieldsToValidate = ["industry", "companySize"];

    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      if (step === 1) {
        // Simulate partial submission capture
        console.log("Captured partial lead:", formValues.email);
      }
      setStep((prev) => prev + 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    
    console.log("Final submission:", data);
    
    // Prepare payload with contextual tracking
    const payload = {
      ...data,
      sourcePage,
      sourceIdentifier,
      formType: 'MultiStep'
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Clear cache on successful submission
      reset();
      localStorage.removeItem(FORM_STORAGE_KEY);
      setStep(4);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    reset();
    localStorage.removeItem(FORM_STORAGE_KEY);
    setStep(1);
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
            {step === 1 && "Technical Architecture Discovery"}
            {step === 2 && "Platform Scope & Scale"}
            {step === 3 && "Core Bottlenecks & Stack"}
          </CardTitle>
          <CardDescription className="text-cf-text-secondary">
            {step === 1 && "Direct routing to engineering leadership. Mutual NDAs executed prior to architecture scoping."}
            {step === 2 && "Helps us calibrate architectural capacity, compliance matrices, and SLA requirements."}
            {step === 3 && "Detail your current architecture, concurrency targets, or mission-critical bottlenecks."}
          </CardDescription>
        </CardHeader>
      )}

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name / Technical Lead</Label>
                <Input
                  id="name"
                  placeholder="e.g. Alex Henderson"
                  {...register("name")}
                  className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="alex@enterprise.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp (Direct Line)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210 or +1 415..."
                  {...register("phone")}
                  className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <Label htmlFor="industry">Domain / Industry Vertical</Label>
                <Input
                  id="industry"
                  placeholder="e.g. Logistics & Supply Chain, FinTech, Manufacturing ERP, HealthTech"
                  {...register("industry")}
                  className={errors.industry ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.industry && <p className="text-xs text-red-500">{errors.industry.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Scale / User Concurrency</Label>
                <Input
                  id="companySize"
                  placeholder="e.g. 500+ employees, 50k DAU, or Series A-C Scaleup"
                  {...register("companySize")}
                  className={errors.companySize ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.companySize && <p className="text-xs text-red-500">{errors.companySize.message}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <Label htmlFor="primaryChallenge">Architectural Objectives or Current Bottlenecks</Label>
                <Input
                  id="primaryChallenge"
                  placeholder="e.g. Modernizing monolithic ERP, event streaming with Redis/BullMQ, high-concurrency mobile app..."
                  {...register("primaryChallenge")}
                  className={errors.primaryChallenge ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {errors.primaryChallenge && <p className="text-xs text-red-500">{errors.primaryChallenge.message}</p>}
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
              <h3 className="font-serif-display text-h3 mb-2 text-cf-text">Architecture Review Initiated</h3>
              <p className="text-cf-text-secondary mb-8">
                Your technical requirements have been routed directly to our engineering architects. We will connect with a technical scoping blueprint within 24 hours.
              </p>
              <Button
                variant="outline"
                className="w-full"
                type="button"
                onClick={resetForm}
              >
                Submit Another Request
              </Button>
            </div>
          )}

          {step < 4 && (
            <CardFooter className="flex justify-between mt-6 px-0 pb-0 border-t border-cf-border/40 pt-6">
              <Button
                variant="ghost"
                type="button"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="text-cf-text-secondary"
              >
                Back
              </Button>
              {step === 3 ? (
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                >
                  {isSubmitting ? 'Routing to Architecture Team...' : 'Request Architecture Review'}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                >
                  Continue
                </Button>
              )}
            </CardFooter>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
