const countries = [
  { flag: '🇬🇪', name: 'Georgia', universities: '12 Universities', popular: true },
  { flag: '🇷🇸', name: 'Serbia', universities: '6 Universities', popular: true },
  { flag: '🇷🇴', name: 'Romania', universities: '5 Universities', popular: false },
  { flag: '🇷🇺', name: 'Russia', universities: '20 Universities', popular: true },
  { flag: '🇰🇿', name: 'Kazakhstan', universities: '8 Universities', popular: false },
  { flag: '🇰🇬', name: 'Kyrgyzstan', universities: '7 Universities', popular: false },
  { flag: '🇺🇿', name: 'Uzbekistan', universities: '5 Universities', popular: false },
  { flag: '🇧🇩', name: 'Bangladesh', universities: '4 Universities', popular: false },
  { flag: '🇵🇭', name: 'Philippines', universities: '6 Universities', popular: true },
  { flag: '🇨🇳', name: 'China', universities: '15 Universities', popular: false },
  { flag: '🇩🇪', name: 'Germany', universities: '3 Universities', popular: false },
  { flag: '🇨🇦', name: 'Canada', universities: '4 Universities', popular: false },
];

const universities = [
  {
    name: 'Bukhara State Medical Institute',
    location: 'Bukhara, Uzbekistan',
    fee: '₹3.5L/year',
    type: 'Government',
    badge: 'MCI Approved',
  },
  {
    name: 'Navoiy State Pedagogical Institute',
    location: 'Navoiy, Uzbekistan',
    fee: '₹3L/year',
    type: 'Government',
    badge: 'NMC Approved',
  },
  {
    name: 'Central University of Europe',
    location: 'Budapest, Hungary',
    fee: '₹5L/year',
    type: 'Private',
    badge: 'WHO Listed',
  },
  {
    name: 'Kutaisi University',
    location: 'Kutaisi, Georgia',
    fee: '₹4L/year',
    type: 'Private',
    badge: 'Popular Choice',
  },
  {
    name: 'Tbilisi State Medical University',
    location: 'Tbilisi, Georgia',
    fee: '₹4.5L/year',
    type: 'Government',
    badge: 'MCI Approved',
  },
  {
    name: 'Dnipro Medical Institute',
    location: 'Dnipro, Ukraine',
    fee: '₹3.2L/year',
    type: 'Government',
    badge: 'NMC Approved',
  },
];

export default function Countries() {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Countries grid */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Study Destinations</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">20+ Countries to Choose From</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We have partnerships with top medical universities across the globe for affordable, quality education.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {countries.map(({ flag, name, universities: unis, popular }) => (
            <div
              key={name}
              className="relative bg-gray-50 rounded-2xl p-4 text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group border border-gray-100"
            >
              {popular && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-navy text-xs font-bold px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
              <div className="text-4xl mb-2">{flag}</div>
              <div className="font-semibold text-navy text-sm group-hover:text-primary transition-colors">{name}</div>
              <div className="text-xs text-gray-400 mt-1">{unis}</div>
            </div>
          ))}
        </div>

        {/* Featured universities */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Top Picks</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Featured Universities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map(({ name, location, fee, type, badge }) => (
            <div key={name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-br from-blue-600 to-navy h-28 flex items-center justify-center">
                <span className="text-5xl">🏛️</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-navy text-base group-hover:text-primary transition-colors leading-snug">{name}</h3>
                </div>
                <div className="text-gray-400 text-sm mb-4">📍 {location}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-primary font-bold text-lg">{fee}</div>
                    <div className="text-xs text-gray-400">{type} University</div>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">{badge}</span>
                </div>
                <a href="#apply" className="mt-4 block text-center bg-primary text-white text-sm font-semibold py-2 rounded-full hover:bg-primary-dark transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
