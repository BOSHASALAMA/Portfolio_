'use client'
import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "motion/react";

const Contact = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_vf9br08',
        'template_bqeg8we',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'pQUD78_atvYDXV7bN'
      );
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 1500);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
      setTimeout(() => setSubmitMessage(''), 1500);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData.name, formData.email, formData.message]);

  return (
    <div id="contact" className="min-h-screen w-full overflow-x-hidden py-32 px-4 md:px-8 lg:px-32 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
        initial={{opacity:0,y:70}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 mb-8">
          Contact Me
        </motion.h1>
        <motion.p
        initial={{opacity:0,y:70}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        className="text-lg text-center text-neutral-300 mb-12">
          Let's work together! Send me a message and I'll get back to you as soon as possible.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.6}}
          >
            <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-neutral-400"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
          >
            <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-neutral-400"
              placeholder="your.email@example.com"
            />
          </motion.div>

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
          >
            <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-neutral-400 resize-none"
              placeholder="Your message here..."
            />
          </motion.div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitMessage && (
            <p className={`text-center text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
)
export default Contact;
