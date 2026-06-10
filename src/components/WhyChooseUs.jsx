const reasons = [
  { icon: '🏆', title: 'Guaranteed Admission', desc: 'We guarantee your admission to a top MCI/NMC-approved university or your money back.' },
  { icon: '💰', title: 'Affordable Fees', desc: 'Study MBBS at a fraction of Indian private college costs — as low as ₹3L/year.' },
  { icon: '🆓', title: 'Free Consultation', desc: 'No hidden charges. Get expert counselling from our doctor-advisors completely free.' },
  { icon: '🚫', title: 'No Donations', desc: 'Transparent admissions with zero capitation fees or donations required.' },
  { icon: '✅', title: 'MCI/NMC Approved', desc: 'All universities in our catalog are recognized by NMC/WHO and listed in the World Directory of Medical Schools.' },
  { icon: '🤝', title: 'End-to-End Support', desc: 'We stay with you from counselling to arrival — visa, accommodation, and academic support.' },
  { icon: '🌐', title: '20+ Countries', desc: 'The widest selection of study-abroad destinations for medical and non-medical courses.' },
  { icon: '👨‍⚕️', title: 'Doctor-Led Team', desc: 'Our advisors are practicing doctors who understand your journey intimately.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-300 text-sm font-semibold uppercase tracking-widest">Our Advantages</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Why Choose MedicosMindz?</h2>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            We're not just a consultancy — we're your long-term partner in building a medical career.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
