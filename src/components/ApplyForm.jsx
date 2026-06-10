import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const courses = ['MBBS', 'BDS', 'MD/MS', 'B.Tech/Engineering', 'B.Com/Commerce', 'MBA/Management', 'B.Arch/Architecture', 'Other'];
const countries = ['Georgia', 'Russia', 'Kazakhstan', 'Kyrgyzstan', 'Uzbekistan', 'Serbia', 'Romania', 'Philippines', 'China', 'Germany', 'Canada', 'Other'];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', course: '', country: '', message: '' });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
        {/* Info */}
        <div>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Free Consultation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-5">Start Your Medical Journey Today</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Fill out the form and our expert medical counselors will get in touch with you within 24 hours. Consultation is completely free — no hidden charges.
          </p>
          <div className="space-y-5">
            {[
              { icon: '📞', title: 'Call Us', info: '+91 9773877349 / +91 8828377456' },
              { icon: '📧', title: 'Email Us', info: 'info@mbbstimes.com' },
              { icon: '📍', title: 'Visit Us', info: 'Hansalya Building, Flat No.15, 1st Floor, Barakhamba Road, New Delhi 110001' },
              { icon: '🕒', title: 'Office Hours', info: 'Mon–Sat: 9:00 AM – 7:00 PM' },
            ].map(({ icon, title, info }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="text-3xl">{icon}</div>
                <div>
                  <div className="font-semibold text-navy">{title}</div>
                  <div className="text-gray-500 text-sm">{info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">Application Submitted!</h3>
              <p className="text-gray-500">Our counselors will contact you within 24 hours. Thank you for choosing MbbsTimes!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-primary text-white px-8 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="text-xl font-bold text-navy mb-6">Apply Now — It's Free</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handle} placeholder="Your full name" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input required type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXXXXXXX" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input name="city" value={form.city} onChange={handle} placeholder="Your city" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Course *</label>
                  <select required name="course" value={form.course} onChange={handle} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-gray-600">
                    <option value="">Select course</option>
                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Country</label>
                  <select name="country" value={form.country} onChange={handle} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-gray-600">
                    <option value="">Select country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea name="message" value={form.message} onChange={handle} rows={3} placeholder="Any specific queries or requirements..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow">
                <Send size={18} /> Submit Application
              </button>
              <p className="text-xs text-center text-gray-400">By submitting, you agree to be contacted by MbbsTimes. We respect your privacy.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
