/**
 * JoinForm Component
 * 
 * SUBMISSION LOGIC:
 * This form submits data to a Google Apps Script web app endpoint,
 * which writes each submission as a new row in a Google Sheet.
 * 
 * HOW IT WORKS:
 * 1. User fills in the form and clicks "Register Interest"
 * 2. Client-side validation runs (zod schema)
 * 3. Data is POSTed as JSON to the Google Apps Script URL
 * 4. The Apps Script parses the JSON and appends a row to the Google Sheet
 * 
 * HOW TO CHANGE THE DESTINATION GOOGLE SHEET:
 * 1. Update the GOOGLE_SCRIPT_URL constant below with your new Apps Script deployment URL
 * 2. Or create a new Apps Script project attached to a different Google Sheet
 *    and deploy it as a web app (see docs/google-sheets-setup.md)
 * 
 * SECURITY:
 * - No API keys are exposed client-side; the Apps Script URL is a public web app endpoint
 * - Server-side validation is performed in the Apps Script
 * - The Apps Script only accepts POST requests with the expected fields
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/**
 * Google Apps Script web app URL.
 * Replace this with your own deployment URL.
 * See docs/google-sheets-setup.md for instructions.
 */
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const joinSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email").max(255),
  connection: z.string().min(1, "Please select your connection to defence"),
  interests: z.array(z.string()).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "You must agree to the community guidelines" }) }),
});

type JoinFormData = z.infer<typeof joinSchema>;

const connections = [
  "Serving — Military",
  "Serving — Civil Service",
  "Veteran",
  "Reservist",
  "Defence Industry",
  "Family Member",
  "Pre-joining Candidate",
  "Other",
];

const interestOptions = [
  "Peer networking",
  "Resources and guidance",
  "Events and workshops",
  "Volunteering",
  "Research participation",
];

const JoinForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      name: "",
      email: "",
      connection: "",
      interests: [],
      consent: undefined as unknown as true,
    },
  });

  const onSubmit = async (data: JoinFormData) => {
    // Prevent duplicate submissions
    if (submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    // Build the payload matching the Google Sheet columns
    const payload = {
      timestamp: new Date().toISOString(),
      fullName: data.name,
      email: data.email,
      connectionToDefence: data.connection,
      peerNetworking: data.interests?.includes("Peer networking") ?? false,
      resourcesAndGuidance: data.interests?.includes("Resources and guidance") ?? false,
      eventsAndWorkshops: data.interests?.includes("Events and workshops") ?? false,
      volunteering: data.interests?.includes("Volunteering") ?? false,
      researchParticipation: data.interests?.includes("Research participation") ?? false,
      communityGuidelinesAgreed: data.consent === true,
    };

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Form endpoint not configured. Please set VITE_GOOGLE_SCRIPT_URL.");
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      console.info("Join form submitted successfully:", {
        name: data.name,
        email: data.email,
        connection: data.connection,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm" role="status" aria-live="polite">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mb-2 text-xl font-bold text-foreground">Registration Received</h3>
        <p className="text-muted-foreground">
          Thank you for your interest. We will be in touch with further details about joining the community.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="mb-1 text-xl font-bold text-foreground">Join the Community</h3>
      <p className="mb-6 text-sm text-muted-foreground">
        Register your interest to join the Dyslexia in Defence peer network.
      </p>

      {submitError && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{submitError}</span>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate aria-label="Join the network form">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="connection"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Connection to Defence</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your connection" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {connections.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Interests */}
          <FormField
            control={form.control}
            name="interests"
            render={() => (
              <FormItem>
                <FormLabel>Areas of Interest (optional)</FormLabel>
                <div className="grid gap-2 sm:grid-cols-2">
                  {interestOptions.map((interest) => (
                    <FormField
                      key={interest}
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(interest)}
                              onCheckedChange={(checked) => {
                                const current = field.value || [];
                                field.onChange(
                                  checked
                                    ? [...current, interest]
                                    : current.filter((v) => v !== interest)
                                );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">{interest}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />

          {/* Consent */}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex items-start gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value === true}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <FormLabel className="text-sm font-normal">
                    I agree to the community guidelines and understand that my data will be handled in line with UK data protection principles.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              "Register Interest"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default JoinForm;
