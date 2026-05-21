import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Sparkles, Package, Award, BookOpen, Video, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const serviceCards = [
    {
      icon: Package,
      title: "Live Production",
      description: "Full-scale live event broadcasting and streaming services for conferences, sports events, and special occasions."
    },
    {
      icon: Sparkles,
      title: "Content Production",
      description: "Professional video production services including filming, editing, color grading, and post-production to bring your brand story to life."
    }
  ];

  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#154771]/5 via-[#75C9E3]/5 to-[#FFB629]/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full mb-8">

              <h1 className="font-['Lato'] font-bold text-4xl md:text-5xl lg:text-7xl text-[#154771] leading-tight mb-6">
                Professional Video Production
                <span className="block">{"& Live Event Broadcasting"}</span>
              </h1>
              <p className="text-base md:text-xl text-[#333333] leading-relaxed mb-8 max-w-3xl mx-auto">
                Helping organizations communicate, promote, document, and broadcast the moments that matter through cinematic storytelling and professional live production.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-4xl">

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/E5TMHOy6HSA?autoplay=1&loop=1&playlist=E5TMHOy6HSA&mute=1&controls=0"
                  title="WellStory Media Demo Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-[#FFB629]/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-[#75C9E3]/20 rounded-full blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10">
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#154771] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  Request a Quote
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">

              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6900ed629bc4c59f4bb9ea27/a8c206900_EvryoneHasAStoryToTell.jpg"
                alt="Everyone Has A Story Worth Telling"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4">

              <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#154771] font-normal mb-6">
                Bringing Stories and Events to Life
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                Well Story Media provides professional video production and live event broadcasting services for businesses, nonprofits, government agencies, schools, athletic organizations, and event producers throughout Montana.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed">
                From commercial video campaigns and documentary storytelling to sports broadcasts and conference streaming, we help organizations reach audiences wherever they are.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed">
                Founded by Helena, Montana's own Joshua Johnson, Well Story Media is backed by more than 20 years of professional experience in broadcasting, communications, video production, and live event operations. From managing military broadcast stations to producing content for businesses, nonprofits, and government organizations, Josh brings a storyteller's mindset and a commitment to reliable execution on every project.
              </p>
              <Link
                to={createPageUrl("About")}
                className="inline-flex items-center gap-2 text-[#75C9E3] hover:text-[#FFB629] font-['Lato'] font-semibold text-lg transition-colors group">
                Learn more about us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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

            <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#154771] font-normal mb-4">
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCards.map((service, index) => {
              const pageLink = service.title === "Live Production" ? createPageUrl("LiveProduction") : createPageUrl("ContentProduction");
              return (
                <Link to={pageLink} key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer h-full">

                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#75C9E3]">
                      <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#75C9E3] to-[#154771] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="font-['Lato'] text-2xl text-[#154771] font-semibold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[#333333] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16">

            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              Request a Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-4">
              Why Organizations Choose Well Story Media
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              Professional storytelling, technical expertise, and dependable execution backed by more than 20 years of experience in media, broadcasting, and communications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {[
              {
                icon: Award,
                title: "20+ Years of Experience",
                desc: "Broadcasting, communications, video production, and live event operations."
              },
              {
                icon: BookOpen,
                title: "Storytelling First",
                desc: "Every project begins with understanding your audience, message, and goals."
              },
              {
                icon: Video,
                title: "Production Flexibility",
                desc: "From single-camera interviews to multi-camera broadcasts and livestreams."
              },
              {
                icon: MapPin,
                title: "Montana-Based",
                desc: "Local knowledge and the ability to support organizations throughout Montana and the surrounding region."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group">
                <div className="w-16 h-16 mb-4 mx-auto rounded-full bg-gradient-to-br from-[#75C9E3] to-[#154771] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="font-['Lato'] text-xl text-[#154771] font-semibold mb-2">{item.title}</h3>
                <p className="text-[#333333] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center">

            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              Request a Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}