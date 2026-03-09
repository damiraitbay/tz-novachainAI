export type NavLink = {
  href: string;
  label: string;
};

export type Feature = {
  title: string;
  text: string;
  icon: string;
};

export type UseCase = {
  title: string;
  text: string;
  cta: string;
};

export type RoadmapItem = {
  quarter: string;
  item: string;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const navLinks: NavLink[] = [
  { href: "#platform", label: "Platform" },
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contacts", label: "Contacts" }
];

export const features: Feature[] = [
  {
    title: "120K TPS throughput",
    text: "Stable transaction speed for high-load payment and scoring scenarios.",
    icon: "01"
  },
  {
    title: "AI risk engine",
    text: "Real-time anomaly detection and adaptive fraud prevention.",
    icon: "02"
  },
  {
    title: "Fast integration",
    text: "SDK and API-first setup to launch in days, not months.",
    icon: "03"
  },
  {
    title: "Secure consensus",
    text: "Proof-of-Stake architecture tuned for fintech-grade reliability.",
    icon: "04"
  }
];

export const useCases: UseCase[] = [
  {
    title: "Digital Banking",
    text: "Instant settlements and anti-fraud workflows across retail products.",
    cta: "Talk to architecture team"
  },
  {
    title: "Cross-border Payments",
    text: "Lower fee routing with compliance-ready transaction tracing.",
    cta: "Request pilot"
  },
  {
    title: "Embedded Finance",
    text: "Launch branded wallet and card experiences with API orchestration.",
    cta: "See integration plan"
  }
];

export const roadmap: RoadmapItem[] = [
  { quarter: "Q2 2026", item: "Enterprise dashboard 2.0 and SLA analytics" },
  { quarter: "Q3 2026", item: "Multi-region validator clusters (EU + MENA)" },
  { quarter: "Q4 2026", item: "Advanced AI model marketplace for risk policies" }
];

export const testimonials: Testimonial[] = [
  {
    name: "Iryna Smolina",
    role: "Product Lead, FinPilot",
    text: "After migration to NovaChain AI, transaction processing time dropped by 68%.",
    rating: 5
  },
  {
    name: "Maxim Dorofeev",
    role: "CTO, ClearBanking",
    text: "The onboarding flow is excellent: product design and technical delivery are both strong.",
    rating: 5
  },
  {
    name: "Dana Miller",
    role: "Head of Ops, FluxPay",
    text: "We launched in two regions with zero incidents and measurable reduction in chargebacks.",
    rating: 5
  }
];

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NovaChain AI",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length.toString()
  },
  review: testimonials.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name
    },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5"
    }
  }))
};
