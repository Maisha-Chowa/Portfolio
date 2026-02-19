import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, SendHorizonal } from "lucide-react";
import { profile } from "@/data/portfolio-data";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const formRef = useRef(null);
  const [sendStatus, setSendStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendStatus("sending");
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSendStatus("sent");
        formRef.current.reset();
        setTimeout(() => setSendStatus("idle"), 4000);
      })
      .catch(() => {
        setSendStatus("error");
        setTimeout(() => setSendStatus("idle"), 4000);
      });
  };

  return (
    <section id="contact" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-primary">Contact Me</h2>
        <p className="mt-2 text-muted-foreground">Get in Touch</p>
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="space-y-8 pt-4">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail size={20} />
            </span>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone size={20} />
            </span>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">{profile.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Linkedin size={20} />
            </span>
            <div>
              <p className="font-semibold text-foreground">LinkedIn</p>
              <a
                href={
                  profile.links.find((l) => l.label === "LinkedIn")?.href
                }
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                @maisha-chowa
              </a>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <form
              ref={formRef}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input
                name="from_name"
                required
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Name"
                type="text"
              />
              <input
                name="from_email"
                required
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Email"
                type="email"
              />
              <textarea
                name="message"
                required
                className="min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Message"
              />
              <Button
                type="submit"
                className="gap-2"
                disabled={sendStatus === "sending"}
              >
                {sendStatus === "sending" ? "Sending..." : "Send Message"}{" "}
                <SendHorizonal size={16} />
              </Button>
              {sendStatus === "sent" && (
                <p className="text-sm text-green-600">
                  Message sent successfully!
                </p>
              )}
              {sendStatus === "error" && (
                <p className="text-sm text-red-600">
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
