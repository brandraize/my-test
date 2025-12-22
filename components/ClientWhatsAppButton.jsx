"use client";
import dynamic from "next/dynamic";

// Load WhatsAppButton ONLY on client to prevent hydration mismatch
const WhatsAppButton = dynamic(
  () => import("./WhatsAppButton"),
  { ssr: false }
);

export default function ClientWhatsAppButton({ lang }) {
  return <WhatsAppButton lang={lang} />;
}