import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { company } from "@/lib/demo-content";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-black/10 bg-white/95 p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <a
        href={`tel:${company.phoneTel}`}
        className="flex items-center justify-center gap-2 rounded-full bg-brand-dark px-4 py-3 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" /> Ring nu
      </a>
      <Link
        href="/#kontakt"
        className="flex items-center justify-center gap-2 rounded-full bg-cta px-4 py-3 text-sm font-semibold text-white"
      >
        <Send className="h-4 w-4" /> Få tilbud
      </Link>
    </div>
  );
}
