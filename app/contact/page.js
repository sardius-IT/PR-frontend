import ContactClient from "./ContactClient";

// ✅ SERVER COMPONENT (no "use client" here)
export const metadata = {
  title: "Contact Us • FlyHigh PR",
  description:
    "Get in touch with FlyHigh PR for consultations, campaign assistance, or partnership inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
