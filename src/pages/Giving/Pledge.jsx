import { useState } from 'react';
import API from '../../context/api';

const Pledge = () => {
  const [form, setForm] = useState({ name: '', email: '', amount: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/pledge', form);
      setStatus('Thank you for your pledge!');
      setForm({ name: '', email: '', amount: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Make a Pledge</h1>
        <p className="mb-8 text-center text-lg italic text-[#FFF5E1]/80">
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          – 2 Corinthians 9:7
        </p>

        <form onSubmit={handleSubmit} className="bg-[#FFF5E1]/10 text-[#FFF5E1] rounded-lg p-6 space-y-4">
          <div>
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Pledge Amount (EUR)</label>
            <input
              type="number"
              name="amount"
              placeholder="Pledge Amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-[#B0A8B9]"
            />
          </div>
          <div>
            <label className="block mb-1">Your message or prayer point (optional)</label>
            <textarea
              name="message"
              placeholder="Your message or prayer point"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md text-gray-900 resize-none focus:ring-2 focus:ring-[#B0A8B9]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#B0A8B9] text-[#800020] font-semibold px-6 py-2 rounded-md hover:bg-[#a095a6] transition-colors w-full"
          >
            Submit Pledge
          </button>
        </form>

        {status && <p className="mt-4 text-center font-semibold text-green-300">{status}</p>}
      </div>
    </section>
  );
};

export default Pledge;
