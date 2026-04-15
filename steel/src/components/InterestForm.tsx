import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { saveSubmission } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  productInterest: z.string({
    required_error: "Please select a product of interest",
  }),
  message: z.string().min(10, "Requirement should be at least 10 characters"),
});

const InterestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      console.log("Submitting Interest Form:", values);
      const result = await saveSubmission(values);
      
      if (result.success) {
        // Result is already logged in saveSubmission, but adding extra context here if needed
        toast.success("Interest submitted successfully!");
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Interest Form Submission Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }



  if (isSubmitted) {
    return (
      <section id="interest" className="py-24 bg-steel-dark text-foreground">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card p-12 border border-primary/20"
          >
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Success!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you! Our team will contact you soon.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="interest" className="py-24 bg-steel-dark relative">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Interested in Our Products?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Fill out the form below, and our experts will provide you with a customized quote and technical specifications tailored to your project.
            </motion.p>
            
            <div className="space-y-6">
               {[
                 { title: "Direct Line", val: "+91 98765 43210" },
                 { title: "Inquiries", val: "sales@dharmasteel.com" },
                 { title: "HQ", val: "Industrial Area Phase II, Jamshedpur" }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + (i * 0.1) }}
                   className="flex gap-4"
                 >
                   <div className="w-[2px] bg-primary/30 h-full" />
                   <div>
                     <p className="text-[10px] uppercase tracking-tighter text-primary font-black">{item.title}</p>
                     <p className="text-foreground font-bold">{item.val}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-10 border border-border/50 relative"
          >
            <div className="absolute -top-1 -right-1 w-20 h-20 border-t-2 border-r-2 border-primary/30" />
            
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-5" 
                autoComplete="off" 
                name={`form-interest-${Date.now()}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-none bg-background border-border/50" autoComplete="off" />
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="rounded-none bg-background border-border/50" autoComplete="off" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91" {...field} className="rounded-none bg-background border-border/50" autoComplete="off" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Forge Ltd." {...field} className="rounded-none bg-background border-border/50" autoComplete="off" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="productInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-none bg-background border-border/50">
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Mild Steel Sheets">Mild Steel Sheets</SelectItem>
                          <SelectItem value="Galvanized Sheets">Galvanized Sheets</SelectItem>
                          <SelectItem value="Stainless Steel">Stainless Steel</SelectItem>
                          <SelectItem value="Hot Rolled Sheets">Hot Rolled Sheets</SelectItem>
                          <SelectItem value="Cold Rolled Sheets">Cold Rolled Sheets</SelectItem>
                          <SelectItem value="Structural Steel">Structural Steel</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirement / Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or specific requirements..." 
                          className="min-h-[120px] rounded-none bg-background border-border/50"
                          {...field} 
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-none mt-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                  ) : (
                    "SUBMIT INTEREST"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterestForm;
