'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', scope: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sourcePage: 'Contact Page',
          sourceIdentifier: 'General Contact',
          formType: 'HighVelocity'
        }),
      });
      
      if (response.ok) {
        alert('Request received! We will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', scope: '' });
      } else {
        alert('There was an issue submitting. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-cf-text mb-2">Full Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="John Doe"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-cf-text mb-2">Work Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="john@company.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-cf-text mb-2">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder="+91 98765 43210"
          required
        />
      </div>

      <div>
        <label htmlFor="scope" className="block text-sm font-semibold text-cf-text mb-2">Project Scope (Briefly)</label>
        <textarea 
          id="scope" 
          rows={4}
          value={formData.scope}
          onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
          placeholder="e.g., We need a custom ERP to manage logistics across 3 warehouses..."
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit & Book Discovery Call'}
      </button>
      <p className="text-center text-xs text-gray-400 mt-4">By submitting, you agree to our Privacy Policy. No spam.</p>
    </form>
  );
}
