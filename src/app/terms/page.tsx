import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { getContactSettings } from "@/lib/contact-settings";
import { TermsOfServiceContent } from "@/components/legal/terms-of-service-content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions · Easy Credit",
  description:
    "Terms governing your use of the Easy Credit platform and services.",
};

const LAST_UPDATED = "8 April 2026";

export default async function TermsPage() {
  const { contactEmail } = await getContactSettings();
  return (
    <LegalPageShell
      title="Terms & Conditions"
      lastUpdated={LAST_UPDATED}
      contactEmail={contactEmail}
      lede={
        <p>
          These Terms and Conditions (“<strong>Terms</strong>”) form a binding
          agreement between you and Easy Credit regarding use of the Smart
          Kredit Platform. Please read them together with our{" "}
          <Link
            href="/privacy"
            className="font-medium text-brand-indigo underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      }
    >
      <TermsOfServiceContent />
    </LegalPageShell>
  );
}
