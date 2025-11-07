
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Ear, Sparkles, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const processSteps = [
  {
    icon: Ear,
    title: "Listen",
    description: "We dive deep into your story, understanding your vision, goals, and audience to create content that truly resonates."
  },
  {
    icon: Sparkles,
    title: "Create",
    description: "Our team brings your story to life through expert filming, creative direction, and collaborative production."
  },
  {
    icon: Package,
    title: "Deliver",
    description: "We craft polished, professional video content that connects with your audience and drives measurable results."
  }];


  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#154771]/5 via-[#75C9E3]/5 to-[#FFB629]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>

              <h1 className="font-['Lato'] font-bold text-5xl lg:text-6xl text-[#154771] leading-tight mb-6">
                Story-Driven Video Production that Connects and Inspires
              </h1>
              <p className="text-xl text-[#333333] leading-relaxed mb-8">
                Professional video production services for businesses, nonprofits, and government agencies. 
                We transform your vision into compelling visual stories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#154771] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">

                  Start Your Journey
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to={createPageUrl("About")}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#75C9E3] text-[#154771] font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] hover:text-white transition-all duration-300">

                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative">

              {/* Video Placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#154771] to-[#75C9E3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                    <p className="font-['Lato'] text-lg">Demo Reel Placeholder</p>
                    <p className="text-sm text-white/80 mt-2">Video content showcase</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-[#FFB629]/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-[#75C9E3]/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Lato'] text-4xl lg:text-5xl text-[#154771] font-normal mb-4">

              How great are you at what you do?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#89C7CA] to-[#75C9E3]">

              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-6xl">📹</div>
                  </div>
                  <p className="font-['Lato'] text-lg">Headshot / Relevant Image Placeholder</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4">

              <p className="text-lg text-[#333333] leading-relaxed">
                At WellStory Media, we believe every organization has a powerful story to tell. 
                With years of experience working with major brands, government agencies, and diverse media formats, 
                we bring your vision to life through compelling visual narratives.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed">From concept to final delivery, our team handles every aspect of video production to ensure your message connects with your audience and drives real results. Together, we'll turn your vision into a compelling story. One that inspires action, builds trust, and makes your message unforgettable.


              </p>
              <Link
                to={createPageUrl("About")}
                className="inline-flex items-center gap-2 text-[#75C9E3] hover:text-[#FFB629] font-['Lato'] font-semibold text-lg transition-colors group">

                Learn more about our process
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#89C7CA]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#154771] font-normal mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[#333333]">
              Three simple steps to bring your story to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) =>
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group">

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#75C9E3]">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#75C9E3] to-[#154771] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-['Lato'] text-2xl text-[#154771] font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 &&
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-[#FFB629]" />
                  </div>
              }
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16">

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
