import { Helmet } from "react-helmet-async";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <AppShell>
      <Helmet>
        <title>Pricing | QuickFlow</title>
        <meta name="description" content="One plan: $15/month. Free 14-day trial." />
        <link rel="canonical" href="https://quickflow.app/pricing" />
      </Helmet>
      <div className="container py-16 grid place-items-center">
        <div className="max-w-lg w-full rounded-2xl border p-8 text-center shadow-[var(--shadow-elegant)]">
          <h1 className="text-3xl font-bold mb-2">Simple pricing</h1>
          <p className="text-muted-foreground mb-6">Everything you need for invoicing and accounting.</p>
          <div className="text-5xl font-extrabold mb-2">$15<span className="text-base font-medium text-muted-foreground">/mo</span></div>
          <p className="text-sm mb-8">14‑day free trial. No credit card required.</p>
          <a href="/onboarding"><Button variant="hero" size="xl">Start free trial</Button></a>
        </div>
      </div>
    </AppShell>
  );
};

export default Pricing;
