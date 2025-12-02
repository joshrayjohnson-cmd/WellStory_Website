
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Video, Film, Scissors, Palette, Users, Radio } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const services = [
  {
    icon: Users,
    title: "Producing",
    description: "End-to-end project management from concept to delivery"
  },
  {
    icon: Film,
    title: "Filming",
    description: "Professional cinematography with state-of-the-art equipment"
  },
  {
    icon: Scissors,
    title: "Editing",
    description: "Expert post-production and storytelling through the edit"
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and cinematic look development"
  },
  {
    icon: Video,
    title: "Consulting",
    description: "Strategic guidance for your video content initiatives"
  },
  {
    icon: Radio,
    title: "Live Events",
    description: "Seamless live event production with broadcast-quality results"
  }];


  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#154771] via-[#75C9E3] to-[#89C7CA]">
          <div className="w-full h-full flex items-center justify-center text-white/30">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-t-12 border-t-transparent border-l-16 border-l-white/50 border-b-12 border-b-transparent ml-2" />
              </div>
              <p className="font-['Lato'] text-lg">Background Video Placeholder</p>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h1 className="text-[#FFFFFF] mb-6 text-5xl font-normal lg:text-6xl font-['Lato'] italic">Experience • Story • Impact

            </h1>
            <p className="text-[#ffffff] mx-auto text-xl leading-relaxed max-w-3xl">Crafting compelling visual narratives that resonate with audiences and drive results

            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1">

              <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-6">
                Biography
              </h2>
              <div className="space-y-4 text-lg text-[#333333] leading-relaxed">
                <p>
                  With over a decade of experience in video production, WellStory Media has established itself 
                  as a trusted partner for organizations seeking to tell their stories through compelling visual content.
                </p>
                <p>
                  Our background spans work with major brands, government agencies, and nonprofit organizations, 
                  giving us unique insight into what resonates with diverse audiences. We understand that every project 
                  is different, and we bring a collaborative, client-focused approach to every engagement.
                </p>
                <p>
                  From documentary-style storytelling to corporate communications, from event coverage to promotional 
                  content, we've done it all. Our experience encompasses the full spectrum of video production, 
                  and we're passionate about using our expertise to help you achieve your goals.
                </p>
                <p className="font-semibold text-[#154771]">Why choose WellStory Media? Because we don't just make videos. We tell stories that connect, inspire, and drive action.


                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2">

              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#154771] to-[#75C9E3]">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-6xl">👤</div>
                    </div>
                    <p className="font-['Lato'] text-lg">Headshot or<br />Relevant Image Placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#89C7CA]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#FFB629] font-normal mb-4">
              Our Services
            </h2>
            <p className="text-xl text-[#333333] max-w-2xl mx-auto">
              Comprehensive video production services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group">

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#75C9E3]">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#AEABAC] to-[#75C9E3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            )}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              A comprehensive explanation of the services we offer and the collaborative process 
              that ensures your vision becomes reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#154771] to-[#75C9E3] rounded-2xl p-8 text-white">

              <h3 className="font-['Lato'] text-2xl font-semibold mb-4">
                Industries We Serve
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFB629] rounded-full mt-2 flex-shrink-0" />
                  <span>For-profit businesses seeking to elevate their brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFB629] rounded-full mt-2 flex-shrink-0" />
                  <span>Nonprofit organizations amplifying their mission</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFB629] rounded-full mt-2 flex-shrink-0" />
                  <span>Government agencies communicating with constituents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFB629] rounded-full mt-2 flex-shrink-0" />
                  <span>Educational institutions sharing their impact</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#75C9E3] to-[#AEABAC] rounded-2xl p-8 text-white">

              <h3 className="font-['Lato'] text-2xl font-semibold mb-4">
                Our Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#154771] rounded-full mt-2 flex-shrink-0" />
                  <span>Collaborative consultation to understand your vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#154771] rounded-full mt-2 flex-shrink-0" />
                  <span>Strategic planning aligned with your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#154771] rounded-full mt-2 flex-shrink-0" />
                  <span>Professional execution with attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#154771] rounded-full mt-2 flex-shrink-0" />
                  <span>Timely delivery that exceeds expectations</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center">

            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">

              Start Your Journey
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);

}