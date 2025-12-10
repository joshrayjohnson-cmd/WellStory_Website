import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactForm() {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const web3FormData = new FormData(event.target);
    web3FormData.append("access_key", "7866509e-284a-4e5f-b10e-a67dc5e3bd4d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setSubmitted(true);
        event.target.reset();
      } else {
        setResult(data.message || "Error");
      }
    } catch (error) {
      setResult("Something went wrong!");
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center h-full"
          >
            <h2 className="font-['Lato'] text-3xl lg:text-4xl text-[#154771] font-semibold leading-relaxed">
              Share your goals, challenges, or questions. We'll help map out the next steps 
              to bring your vision to life.
            </h2>
          </motion.div>

          {/* Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#89C7CA]/10 to-[#75C9E3]/10 rounded-2xl p-8 border-2 border-[#75C9E3]/20">
              <h2 className="font-['Lato'] text-3xl text-[#154771] font-semibold mb-6">
                Tell us about your needs
              </h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Send size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-['Lato'] text-2xl text-green-800 font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll be in touch soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#154771] font-['Lato'] font-semibold mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-2 border-[#AEABAC] focus:border-[#75C9E3] rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#154771] font-['Lato'] font-semibold mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="border-2 border-[#AEABAC] focus:border-[#75C9E3] rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#154771] font-['Lato'] font-semibold mb-2">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="border-2 border-[#AEABAC] focus:border-[#75C9E3] rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#154771] font-['Lato'] font-semibold mb-2">
                      Tell me about your needs
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your goals, challenges, or questions. We'll help you map out the next steps to bring your vision to life."
                      rows={6}
                      required
                      className="border-2 border-[#AEABAC] focus:border-[#75C9E3] rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 bg-[#FFB629] hover:bg-[#75C9E3] text-white font-['Lato'] font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-xl"
                    disabled={result === "Sending...."}
                  >
                    {result === "Sending...." ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {result && result !== "Sending...." && !submitted && (
                    <p className="text-red-500 text-center mt-2">{result}</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6900ed629bc4c59f4bb9ea27/068c5cb1f_paul-skorupskas-7KLa-xLbSXA-unsplash.jpg"
            alt="Camera lens with mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#154771]/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-['Lato'] font-semibold text-5xl lg:text-6xl text-white mb-6">
              Every great project begins with a conversation.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}