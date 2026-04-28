import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'geral@minecode.io',
      href: 'mailto:geral@minecode.io',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+351 913 965 690',
      href: 'tel:+351913965690',
    },

    {
      icon: Phone,
      label: 'Phone',
      value: '+351 913 965 017',
      href: 'tel:+351913965017',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Leiria, Portugal',
      href: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-24 bg-black relative overflow-hidden flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#98ef3c_1px,transparent_1px),linear-gradient(to_bottom,#98ef3c_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let’s turn your idea into reality. Contact us!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                We’re ready to hear your ideas and help turn them into amazing digital solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#98ef3c]/10 border border-[#98ef3c]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#98ef3c]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#98ef3c]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-[#98ef3c] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {info.href ? (
                      <a href={info.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your First and Last Name"
                    className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#98ef3c]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#98ef3c]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#98ef3c]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#98ef3c] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#98ef3c] hover:bg-[#88df2c] text-black font-semibold group"
              >
                Send
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
