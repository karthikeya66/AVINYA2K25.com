import { Building2, Handshake } from "lucide-react";

type Partner = {
  name: string;
  logo?: string; // path under public/
  url?: string;
  tier: "Title" | "Gold" | "Silver" | "Community";
};

const partners: Partner[] = [
  // Populate with real logos later; using placeholder.svg for now
  { name: "Title Sponsor", logo: "/placeholder.svg", tier: "Title", url: "#" },
  { name: "Gold Partner 1", logo: "/placeholder.svg", tier: "Gold", url: "#" },
  { name: "Gold Partner 2", logo: "/placeholder.svg", tier: "Gold", url: "#" },
  { name: "Silver Partner 1", logo: "/placeholder.svg", tier: "Silver", url: "#" },
  { name: "Silver Partner 2", logo: "/placeholder.svg", tier: "Silver", url: "#" },
  { name: "Community Partner", logo: "/placeholder.svg", tier: "Community", url: "#" },
];

const tiers: Partner["tier"][] = ["Title", "Gold", "Silver", "Community"];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-primary bg-clip-text text-transparent">
            Sponsors & Partners
          </h2>
          <p className="text-text-secondary mt-2">We thank our partners for their support</p>
        </div>

        {tiers.map((tier) => {
          const list = partners.filter((p) => p.tier === tier);
          if (!list.length) return null;
          return (
            <div key={tier} className="mb-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                {tier === "Title" ? (
                  <Handshake className="h-5 w-5 text-primary" />
                ) : (
                  <Building2 className="h-5 w-5 text-accent-blue" />
                )}
                <h3 className="text-xl font-semibold text-text-primary">{tier} Partners</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {list.map((p) => (
                  <a
                    key={p.name}
                    href={p.url || "#"}
                    target={p.url ? "_blank" : undefined}
                    rel={p.url ? "noreferrer" : undefined}
                    className="glass rounded-xl p-4 border border-card-border/20 flex items-center justify-center hover:scale-[1.02] transition"
                    aria-label={p.name}
                  >
                    <img
                      src={p.logo || "/placeholder.svg"}
                      alt={p.name}
                      className="max-h-12 object-contain opacity-80"
                    />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnersSection;
