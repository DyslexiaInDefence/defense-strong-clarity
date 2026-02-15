import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactForm from "@/components/ContactForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email"),
});

const ContactPage = () => {
  const [nlSubmitted, setNlSubmitted] = useState(false);
  const nlForm = useForm({ resolver: zodResolver(newsletterSchema), defaultValues: { email: "" } });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Contact</h1>
          <p className="text-lg text-muted-foreground">
            We welcome enquiries from individuals, organisations, and potential partners. Please use the form below and we will respond within 5 working days.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            {/* Newsletter */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Mail className="mb-3 h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="mb-2 text-lg font-bold text-foreground">Newsletter</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Receive occasional updates on resources, events, and community developments.
              </p>
              {nlSubmitted ? (
                <div className="flex items-center gap-2 text-sm text-primary" role="status" aria-live="polite">
                  <CheckCircle className="h-4 w-4" /> Subscribed successfully.
                </div>
              ) : (
                <Form {...nlForm}>
                  <form onSubmit={nlForm.handleSubmit(() => setNlSubmitted(true))} className="space-y-3" noValidate>
                    <FormField
                      control={nlForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="sm" className="w-full">Subscribe</Button>
                  </form>
                </Form>
              )}
            </div>

            {/* Data statement */}
            <div className="rounded-xl border border-border bg-secondary/50 p-6">
              <h3 className="mb-2 text-sm font-bold text-foreground">Data Statement</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Information submitted via this form is used solely to respond to your enquiry. Data is handled in line with UK data protection principles and is not shared with third parties. See our Privacy Statement for full details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
