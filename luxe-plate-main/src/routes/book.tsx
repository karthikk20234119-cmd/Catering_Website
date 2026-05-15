import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "@/components/SectionHeading";
import { ShieldCheck, ChefHat, Sparkles, Clock, ScrollText, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Catering — Royal Feast" },
      {
        name: "description",
        content:
          "Reserve premium catering for your wedding, corporate event, or private celebration.",
      },
      { property: "og:title", content: "Book Royal Feast Catering" },
      {
        property: "og:description",
        content: "Tell us about your event — we'll design a tailored menu.",
      },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  email: z.string().trim().email("Enter a valid email").max(120),
  eventType: z.string().min(1, "Choose an event type"),
  guests: z.coerce.number().min(1, "At least 1 guest").max(5000),
  date: z.string().min(1, "Pick a date"),
  message: z.string().max(1000).optional(),
});
type FormValues = z.infer<typeof schema>;

const features = [
  { icon: ShieldCheck, title: "Hygienic Preparation" },
  { icon: ChefHat, title: "Professional Chefs" },
  { icon: Sparkles, title: "Luxury Presentation" },
  { icon: Clock, title: "Punctual Service" },
  { icon: ScrollText, title: "Customized Menus" },
  { icon: BadgeDollarSign, title: "Premium Packages" },
];

function BookPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventType: "",
      date: "",
      message: "",
      guests: 50,
    },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Booking inquiry:", data);
    toast.success("Inquiry received", {
      description: "Our concierge will reach out within 4 working hours.",
    });
    reset();
  };

  return (
    <>
      <section className="px-6 py-16">
        <SectionHeading
          eyebrow="Book Catering"
          title={
            <>
              Reserve your <span className="text-gold italic">date</span>
            </>
          }
          subtitle="Share a few details — we'll respond with menu ideas tailored to your event."
        />
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="relative lg:col-span-3 overflow-hidden rounded-[2rem] glass-strong p-8 md:p-10 shadow-elegant"
          >
            <div className="pointer-events-none absolute -inset-20 bg-gradient-warm blur-3xl opacity-60" />
            <div className="relative grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name")} className={inputCls} placeholder="Jane Doe" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone")} className={inputCls} placeholder="+1 555 000 0000" />
              </Field>
              <Field label="Email" error={errors.email?.message} className="sm:col-span-2">
                <input
                  type="email"
                  {...register("email")}
                  className={inputCls}
                  placeholder="jane@email.com"
                />
              </Field>
              <Field label="Event Type" error={errors.eventType?.message}>
                <select {...register("eventType")} className={inputCls}>
                  <option value="">Select…</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Birthday</option>
                  <option>Private Dining</option>
                  <option>Outdoor</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Guest Count" error={errors.guests?.message}>
                <input
                  type="number"
                  min={1}
                  {...register("guests")}
                  className={inputCls}
                  placeholder="120"
                />
              </Field>
              <Field label="Event Date" error={errors.date?.message} className="sm:col-span-2">
                <input type="date" {...register("date")} className={inputCls} />
              </Field>
              <Field
                label="Tell us about your event"
                error={errors.message?.message}
                className="sm:col-span-2"
              >
                <textarea
                  rows={5}
                  {...register("message")}
                  className={`${inputCls} resize-none`}
                  placeholder="Theme, venue, dietary preferences, anything else…"
                />
              </Field>

              <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By submitting you agree to be contacted by our concierge.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground gold-glow transition-transform hover:scale-105 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send Inquiry"}
                </button>
              </div>
            </div>
          </motion.form>

          {/* Why choose us */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl">
              Why choose <span className="text-gold italic">Royal Feast</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Six reasons hosts return to us, again and again.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="hover-tilt rounded-2xl glass p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 font-display text-base">{f.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

function Field({
  label,
  children,
  error,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}
