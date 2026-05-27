import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Radio, Monitor, Wifi, Tv, Mic, Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Radio,
    title: "Conferences & Summits",
    description: "Multi-camera coverage, presentation capture, audience microphones, livestreaming, and session recording."
  },
  {
    icon: Tv,
    title: "Sports & Athletics",
    description: "Live game coverage with graphics, scoreboards, commentary integration, replay capability, and streaming."
  },
  {
    icon: Wifi,
    title: "Guest Speakers & Keynotes",
    description: "Professional presentation capture and livestreaming for educational and corporate events."
  },
  {
    icon: Monitor,
    title: "Concerts & Performances",
    description: "Multi-camera production and event recording for performances and live entertainment."
  },
  {
    icon: Mic,
    title: "Fundraisers & Community Events",
    description: "Broadcast-quality coverage that helps extend your event beyond the venue."
  },
  {
    icon: Calendar,
    title: "Hybrid Events",
    description: "Connect in-person and remote audiences through reliable streaming and virtual participation."
  }
];

export default function LiveProduction() {
  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            alt="Live event production"
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
              Live Production and Event Broadcasting
            </h1>
            <p className="text-xl text-[#FEFCF9] max-w-2xl mx-auto leading-relaxed">
              Multi-camera livestreaming, event recording, sports broadcasting, and conference production throughout Montana.
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
                Broadcast-Quality Live Production
              </h2>
              <div className="space-y-4 text-lg text-[#333333] leading-relaxed">
                <p>
                  Whether you're hosting a conference, sporting event, keynote presentation, fundraiser, concert, or community event, Well Story Media delivers professional live production tailored to your audience and goals.
                </p>
                <p>
                  Our team manages every technical element including cameras, audio, switching, graphics, recording, and streaming so you can focus on running your event with confidence.
                </p>
              </div>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
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
                src="https://media.base44.com/images/public/6900ed629bc4c59f4bb9ea27/5b2053fed_paul-einerhand-Dy6a8sLrVl4-unsplash.jpg"
                alt="Live event broadcast"
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
              Events We Support
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              Complete live production solutions for any event, any scale.
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

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#154771] font-semibold mb-4">
              What's Included
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              Comprehensive production services that cover every aspect of your live event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Multi-Camera Production",
              "Professional Audio Capture",
              "Live Switching & Graphics",
              "Livestreaming to Major Platforms",
              "Event Recording & Archive Files",
              "Remote Audience Delivery",
              "Replay & Highlight Capabilities",
              "On-Site Production Support"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#75C9E3] to-[#154771] flex items-center justify-center">
                  <Check size={20} className="text-white" />
                </div>
                <p className="text-lg text-[#333333] font-['Lato']">{item}</p>
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
              Planning a Live Event?
            </h2>
            <p className="text-[#89C7CA] text-xl mb-10 leading-relaxed">
              Let's talk about your event. We'll help you deliver a seamless, professional broadcast experience.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}