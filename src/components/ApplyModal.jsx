import { useState } from 'react';

const courseOptions = ['Medical', 'MBA', 'Hotel Management', 'Aviation', 'Engineering', 'Law'];

export default function ApplyModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', course: '' });
  const [done, setDone] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setDone(true); };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
            <h5>Application Submitted!</h5>
            <p style={{ color: '#5b5b5b', marginTop: 8, fontSize: 14 }}>
              Our counselors will contact you within 24 hours.
            </p>
            <button className="butn bg-ln-orange1" style={{ marginTop: 24 }} onClick={onClose}>
              <span>Close</span>
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h5>Apply for Admission</h5>

            {[
              { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
              { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
              { label: 'City', name: 'city', type: 'text', placeholder: 'Enter your city' },
            ].map(f => (
              <div className="form-group" key={f.name}>
                <label>{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handle}
                  placeholder={f.placeholder}
                  required
                />
              </div>
            ))}

            <div className="form-group">
              <label>Select Course</label>
              <select name="course" value={form.course} onChange={handle} required>
                <option value="" disabled>Select Course</option>
                {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <button type="submit" className="butn bg-ln-orange1" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Submit Application</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
