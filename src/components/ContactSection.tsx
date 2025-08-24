import { useState } from "react";
import { Phone, MessageSquare, MapPin, MessageCircle } from "lucide-react";

interface Contact {
  name: string;
  phone: string;           // display / tel:
  whatsappNumber: string;  // used for WhatsApp link (digits only or with +)
}

const ContactSection = () => {
  const [loadingContact, setLoadingContact] = useState<string | null>(null);

  const contacts: Contact[] = [
    { name: "P. Sai Sankar • Technical Coordinator", phone: "+919492838482", whatsappNumber: "919492838482" },
    { name: "A. Rahul Sai • Lead Coordinator",       phone: "+919347613587", whatsappNumber: "919347613587" },
    // per your mapping: Manikanth's WhatsApp should go to 919347805987
    { name: "Manikanth • Operations Coordinator",    phone: "+919908942130", whatsappNumber: "919347805987" },
  ];

  // Direct WhatsApp URL format
  const getWhatsAppUrl = (number: string) => {
    const cleanNumber = number.replace(/\D/g, ""); // strip +, spaces, etc.
    return `https://api.whatsapp.com/send/?phone=${cleanNumber}&text&type=phone_number&app_absent=0`;
  };

  // keep your call behavior the same (desktop copies, mobile dials)
  const handleCallClick = async (phone: string, e: React.MouseEvent) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      setLoadingContact(phone);
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(phone);
          const notification = document.createElement("div");
          notification.textContent = "Phone number copied to clipboard!";
          notification.className =
            "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50";
          document.body.appendChild(notification);
          setTimeout(() => notification.remove(), 3000);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = phone;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }
      } catch (err) {
        console.error("Failed to copy phone number:", err);
      } finally {
        setLoadingContact(null);
      }
    }
  };

  const scrollToRegistration = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("registration");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl contact-section">
        <div className="text-center mb-12">
          <h2>Get In Touch</h2>
          <p className="text-text-secondary/80 text-lg mt-4">
            Have questions? Reach out to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Coordinators Card */}
          <div className="contact-card md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-success to-success-glow flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-semibold text-text-primary">Student Coordinators</h3>
                <div className="mt-2 grid sm:grid-cols-2 gap-2">
                  {contacts.map((c) => (
                    <div
                      key={c.name}
                      className="text-sm text-text-secondary/90 p-4 rounded-lg bg-card/30 border border-card-border/20 hover:bg-card/50 transition-all"
                    >
                      <div className="font-medium text-text-primary">{c.name}</div>
                      <div className="text-sm text-text-secondary/80 mt-1 mb-3">{c.phone}</div>

                      <div className="flex flex-wrap gap-2">
                        {/* Call button (same style you used) */}
                        <a
                          href={loadingContact === c.phone ? "#" : `tel:${c.phone}`}
                          onClick={(e) => handleCallClick(c.phone, e)}
                          className={`relative inline-flex items-center px-4 py-1.5 rounded-full ${
                            loadingContact === c.phone
                              ? "bg-green-500/20 cursor-not-allowed"
                              : "bg-green-500/10 hover:bg-green-500/20"
                          } text-green-400 hover:text-white transition-all duration-300 group overflow-hidden border border-green-500/20 hover:border-green-500/40 flex-shrink-0`}
                          aria-label={loadingContact === c.phone ? "Copying number..." : `Call ${c.phone}`}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] transition-opacity duration-500"></span>
                          <span className="relative flex items-center gap-1.5">
                            {loadingContact === c.phone ? (
                              <svg
                                className="animate-spin h-3.5 w-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                            ) : (
                              <>
                                <Phone className="h-3.5 w-3.5" />
                                <span className="text-sm font-medium">Call</span>
                                <span className="absolute -right-1 -top-1 flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                              </>
                            )}
                          </span>
                        </a>

                        {/* WhatsApp button — Exact format */}
                        <a
                          href={`https://api.whatsapp.com/send/?phone=919492838482&text&type=phone_number&app_absent=0`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:text-white hover:bg-[#25D366]/20 transition-all duration-300 group overflow-hidden border border-[#25D366]/20 hover:border-[#25D366]/40 flex-shrink-0"
                          aria-label={`Message ${c.name} on WhatsApp`}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/30 to-[#25D366]/0 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] transition-opacity duration-500"></span>
                          <span className="relative flex items-center gap-1.5">
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span className="text-sm font-medium">WhatsApp</span>
                            <span className="absolute -right-1 -top-1 flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Venue Card */}
          <div className="contact-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Venue</h3>
                <p className="text-text-secondary/90 mt-3 leading-relaxed">
                  Anurag University,<br />
                  Hyderabad, Telangana
                </p>
                <a
                  href="https://www.google.com/maps/place/Anurag+University,+Hyderabad/@17.420077,78.656041,16z/data=!4m6!3m5!1s0x3bcb76730bf4dccf:0x2ca84b53416f0abd!8m2!3d17.4200774!4d78.6560408!16s%2Fg%2F11n0zsfgmx?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-200/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="font-medium">Open in Google Maps</span>
                    <span className="absolute -right-2 -top-2 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  </span>
                  <span className="absolute right-4 group-hover:translate-x-1 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Register button */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToRegistration}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent-blue text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span>Register Your Team</span>
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
