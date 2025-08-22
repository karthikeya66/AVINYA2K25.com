import { CalendarDays } from "lucide-react";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-accent-blue text-neon mb-6">
            Schedule
          </h2>
        </div>

        {/* Schedule Card */}
        <div className="glass rounded-2xl p-12 border border-accent-blue/30 hover-scale">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-cyan flex items-center justify-center">
              <CalendarDays className="h-10 w-10 text-white" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-accent-blue text-glow mb-6">
            Coming Soon
          </h3>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Detailed schedule will be released soon. Day 1: Inauguration & Hacking Begins. 
            Day 2: Final presentations, Judging & Results.
          </p>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20">
            <p className="text-accent-blue font-semibold">Stay Tuned!</p>
            <p className="text-text-secondary text-sm mt-2">
              Complete timeline with keynote speakers, workshops, and mentoring sessions coming very soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;