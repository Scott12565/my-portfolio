'use client'
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // form data
  const [status, setStatus] = useState(''); // set success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Form Data:', formData); // Log the form data to check if it's populated correctly.
  
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required');
      return; // Prevent submission if any field is missing
    }
  
    try {
      const respond = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await respond.json();
      console.log(data);
  
      if (data.success) {
        setStatus('Message sent successfully!');
        // Clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
  
      // Set a timer to clear the status after 3 seconds
      setTimeout(() => {
        setStatus('');
      }, 3000);
  
    } catch (error) {
      setStatus('Something went wrong! Please try again.');
      console.log(error.message);
  
      // Set a timer to clear the status after 3 seconds
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="mb-24 py-8 px-7 md:py-12 text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg leading-relaxed mb-6">
          Have a project in mind? Let's build something amazing together!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name} // bind formData to value
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email} // bind formData to value
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message} // bind formData to value
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Display status message */}
        {status && (
          <div className="mt-4 text-lg font-semibold text-gray-300">
            {status}
          </div>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <Link href="https://github.com/Scott12565" target="_blank" className="text-blue-400 hover:text-blue-500 transition duration-200">GitHub</Link>
          <Link href="https://www.linkedin.com/in/nkosinathisilinda/" target="_blank" className="text-blue-400 hover:text-blue-500 transition duration-200">LinkedIn</Link>
          <Link href="https://twitter.com/Scott_9135" target="_blank" className="text-blue-400 hover:text-blue-500 transition duration-200">Twitter</Link>
        </div>
      </div>
    </section>
  );
}
