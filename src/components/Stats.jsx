const stats = [
  { number: '7,000+', label: 'Medical Students Enrolled', icon: '🩺' },
  { number: '2,500+', label: 'Non-Medical Students', icon: '📚' },
  { number: '50+', label: 'Approved Universities', icon: '🏛️' },
  { number: '40+', label: 'Branches Across India', icon: '🗺️' },
];

export default function Stats() {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(({ number, label, icon }) => (
            <div key={label} className="group">
              <div className="text-4xl mb-2">{icon}</div>
              <div className="text-4xl font-extrabold mb-1 group-hover:text-yellow-300 transition-colors">{number}</div>
              <div className="text-white/80 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
