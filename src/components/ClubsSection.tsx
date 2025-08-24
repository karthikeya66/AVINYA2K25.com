import { Users2 } from "lucide-react";

type Club = {
  name: string;
  role?: string;
  logo?: string; // path under public/
};

const clubs: Club[] = [
  { name: "Hackspace Club", role: "Host", logo: "https://avinya2k25.vercel.app/assets/images/clubs/hs.jpg" },
  { name: "Coding Club", role: "Co-organizer", logo: "https://avinya2k25.vercel.app/assets/images/clubs/cb.jpg" },
  { name: "A2I Club", role: "Co-organizer", logo: "https://avinya2k25.vercel.app/assets/images/clubs/a2i.jpg" },
  { name: "ISTE Club", role: "Partner", logo: "https://avinya2k25.vercel.app/assets/images/clubs/iste.jpg" },
];

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2>Organizing Clubs</h2>
          <p className="text-text-secondary/80 text-lg mt-4 max-w-2xl mx-auto">
            Led by student communities at Anurag University, bringing innovation and technology together
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clubs.map((club) => (
            <div key={club.name} className="club-card p-8 text-center">
              <div className="club-logo">
                {club.logo ? (
                  <img 
                    src={club.logo} 
                    alt={club.name} 
                    className="w-14 h-14 object-contain transition-transform duration-300" 
                  />
                ) : (
                  <Users2 className="h-8 w-8 text-green-400" />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{club.name}</h3>
              {club.role && (
                <span className="club-role">{club.role}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
