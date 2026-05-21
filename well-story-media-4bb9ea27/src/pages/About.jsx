import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {



  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6900ed629bc4c59f4bb9ea27/fc88f12fb_MontanaExperienceAboutHero.jpg"
            alt="Montana Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-500/15 to-yellow-600/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h1 className="text-[#FFFFFF] mb-6 text-5xl font-normal lg:text-6xl font-['Lato'] italic">Built on Experience • Driven by Story

            </h1>
            <p className="text-[#ffffff] mx-auto text-xl leading-relaxed max-w-3xl">More than 20 years of media, communications, and production experience serving organizations across Montana and beyond.

            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Josh Johnson Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center lg:justify-items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1">
              <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-6">Meet Joshua Johnson</h2>
              <div className="space-y-4 text-lg text-[#333333] leading-relaxed">
                <p>Well Story Media was founded by Joshua Johnson, a Montana-based producer, broadcaster, and communications professional with more than 20 years of experience helping organizations tell meaningful stories.</p>
                <p>His background spans military broadcasting, public affairs, strategic communications, live event production, and commercial video production. Throughout his career, he has led media operations, managed broadcast teams, coordinated national media coverage, and produced content for audiences ranging from local communities to international organizations.</p>
                <p>Today, he brings that same professionalism and attention to detail to every project whether it's a documentary, marketing campaign, conference livestream, or community event.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://media.base44.com/images/public/6900ed629bc4c59f4bb9ea27/b2c89ef07_JoshuaRJohnsonphoto.jpg"
                  alt="Joshua Johnson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Montana Based Section */}
      <section className="py-20 bg-gradient-to-b from-[#89C7CA]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6900ed629bc4c59f4bb9ea27/f498fdddd_RedCamera.jpg"
                  alt="Professional RED Cinema Camera"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-2">
              <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-6">Proudly Based in Montana</h2>
              <p className="text-lg text-[#333333] leading-relaxed mb-4">From the mountains and small towns of Montana to conference halls, athletic venues, and community events across the region, Well Story Media helps organizations share stories that matter.</p>
              <p className="text-lg text-[#333333] leading-relaxed mb-6">We understand the unique character of Montana communities and work with clients throughout the state to create authentic content that connects with audiences.</p>
              <div className="space-y-6">
                {[
                  "Serving clients throughout Montana",
                  "Available for regional travel",
                  "Experienced in both indoor and outdoor productions",
                  "Equipped for remote and off-grid locations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#75C9E3] to-[#154771] flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <p className="text-lg text-[#333333] font-['Lato']">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-12">Who We Serve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Businesses", desc: "Marketing, recruiting, brand storytelling, and customer success content." },
              { title: "Nonprofits", desc: "Mission-focused storytelling, fundraising campaigns, and community outreach." },
              { title: "Government Agencies", desc: "Public communication, training, education, and stakeholder engagement." },
              { title: "Schools & Universities", desc: "Recruitment, athletics, academics, and institutional storytelling." },
              { title: "Conferences & Events", desc: "Livestreaming, keynote presentations, and event coverage." },
              { title: "Outdoor Recreation & Tourism", desc: "Destination marketing, endurance events, festivals, and outdoor experiences." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#75C9E3]/10 to-[#89C7CA]/10 rounded-2xl p-8">
                <h3 className="font-['Lato'] text-2xl text-[#154771] font-semibold mb-4">{item.title}</h3>
                <p className="text-[#333333] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-[#89C7CA]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-12">Why Organizations Choose Well Story Media</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { title: "Experience That Matters", desc: "More than two decades of media, communications, and production experience." },
              { title: "Storytelling First", desc: "Every project starts with understanding your audience and objectives." },
              { title: "Professional Execution", desc: "Reliable planning, communication, and delivery from concept through completion." },
              { title: "Flexible Production", desc: "From single-camera interviews to multi-camera live broadcasts and large-scale events." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#75C9E3]/10 to-[#89C7CA]/10 rounded-2xl p-8">
                <h3 className="font-['Lato'] text-2xl text-[#154771] font-semibold mb-4">{item.title}</h3>
                <p className="text-[#333333] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="font-['Lato'] text-3xl text-[#154771] font-semibold mb-4">Ready to Tell Your Story?</h3>
            <p className="text-lg text-[#333333] mb-8 max-w-3xl mx-auto">Whether you're planning a documentary, marketing campaign, livestream, or special event,<br/>we'd love to learn about your goals and explore how video<br/>can help you reach your audience.</p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              Request a Quote
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>




    </div>);

}