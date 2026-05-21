import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Film, Scissors, Palette, Video, Users, Camera, Mic, Megaphone, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Camera,
    title: "Filming",
    description: "Professional cinematography designed to capture authentic moments, compelling visuals, and meaningful stories that connect with your audience."
  },
  {
    icon: Scissors,
    title: "Editing",
    description: "Story-driven post-production that transforms raw footage into polished content designed to inform, engage, and inspire action."
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and visual refinement that enhances consistency, strengthens brand presentation, and creates a polished final product."
  },
  {
    icon: Film,
    title: "Documentary Storytelling",
    description: "Authentic, long-form storytelling that highlights the people, mission, and impact behind your organization through compelling visual narratives."
  },
  {
    icon: Video,
    title: "Commercial & Promotional",
    description: "Strategic marketing videos created to increase awareness, strengthen brand identity, promote products or services, and drive engagement."
  },
  {
    icon: Users,
    title: "Producing",
    description: "End-to-end project management that keeps productions organized, efficient, and aligned with your goals from concept through delivery."
  },
  {
    icon: Mic,
    title: "Interviews & Testimonials",
    description: "Capture authentic voices and real experiences that build trust and credibility with your audience."
  },
  {
    icon: Megaphone,
    title: "Government & Nonprofit Communications",
    description: "Strategic video content designed to inform communities, communicate initiatives, and strengthen stakeholder engagement."
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Short-form videos optimized for social platforms to increase reach, engagement, and visibility."
  }
];

export default function ContentProduction() {
  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
            alt="Video production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#154771]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-['Lato'] font-semibold text-5xl lg:text-6xl text-white mb-6">
              Video Content Built Around Your Mission
            </h1>
            <p className="text-xl text-[#FEFCF9] max-w-2xl mx-auto leading-relaxed">
              We help businesses, nonprofits, schools, and government agencies transform ideas into compelling visual content that informs, inspires, and drives results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-6">
                Your Story Deserves to Be Seen
              </h2>
              <div className="space-y-4 text-lg text-[#333333] leading-relaxed">
                <p>
                  Whether you're launching a new product, promoting an event, recruiting employees, raising awareness, or communicating with stakeholders, compelling video helps your message reach the right audience.
                </p>
                <p>
                  Well Story Media produces everything from short-form social content and promotional videos to documentaries, interviews, and brand storytelling campaigns. Every project is tailored to your audience, objectives, and distribution platform to ensure your content makes an impact long after filming ends.
                </p>
              </div>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://media.base44.com/images/public/6900ed629bc4c59f4bb9ea27/60089f1bb_sam-mcghee-KieCLNzKoBo-unsplash.jpg"
                alt="Video production crew"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#89C7CA]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#FFB629] font-normal mb-4">
              How We Help Organizations Communicate
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              A full suite of production services under one roof
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-2 border-transparent">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#75C9E3] to-[#154771] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-['Lato'] text-2xl text-[#154771] font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#154771]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Lato'] text-4xl text-white font-semibold mb-4">
              Ready to Tell Your Story?
            </h2>
            <p className="text-[#89C7CA] text-xl mb-10 leading-relaxed">
              Let's talk about your project. Let's discuss your goals, audience, and vision.<br />
              We'll help develop a production approach that brings your story to life and delivers measurable value for your organization.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}