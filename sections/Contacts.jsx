'use client'
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // form data
  const [status, setStatus] = useState('') // set success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const respond = await fetch('/api/contact', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      const data = await respond.json()
      console.log(data)

      if(data.success){
        setStatus('Message sent succeful')
        console.log(formData.name, formData.email, formData.message)
        setFormData({name: '', email: '', message: ""})
      } else {
        setStatus('Failed to send a message')
      }

    } catch (error) {
      setStatus('Something went wrong! please try again.')
      console.log(error.message)
    }
  }

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
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
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