
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Insights() {
  const featuredArticle = {
    title: "The Power of Story-Driven Video in Modern Marketing",
    excerpt: "Practical news, proven strategies, and real-world examples to help you turn story-driven video into measurable results for your organization.",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Strategy"
  };

  const previousArticles = [
    {
      title: "5 Ways Video Boosts Nonprofit Engagement",
      date: "January 8, 2025",
      category: "Nonprofits"
    },
    {
      title: "Government Communications in the Digital Age",
      date: "December 28, 2024",
      category: "Government"
    },
    {
      title: "Behind the Scenes: Corporate Video Production",
      date: "December 15, 2024",
      category: "Corporate"
    },
    {
      title: "The ROI of Professional Video Content",
      date: "December 1, 2024",
      category: "Business"
    },
    {
      title: "Color Grading: The Secret to Cinematic Quality",
      date: "November 20, 2024",
      category: "Production"
    },
    {
      title: "Interview Techniques for Authentic Storytelling",
      date: "November 10, 2024",
      category: "Tips"
    }
  ];

  return (
    <div className="bg-[#FEFCF9]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#75C9E3]/10 via-transparent to-[#154771]/10" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-['Lato'] font-normal text-5xl lg:text-6xl text-[#154771] mb-6">
              Insights to Action
            </h1>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
              Practical news, proven strategies, and real-world examples to help you turn 
              story-driven video into measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-8"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#154771] via-[#75C9E3] to-[#FFB629]">
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-5xl">📹</div>
                  </div>
                  <p className="font-['Lato'] text-lg">Featured Article<br />Background Video/Image</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1 bg-[#FFB629] text-white font-['Lato'] font-semibold rounded-full mb-4">
                Featured
              </div>
              <h2 className="font-['Lato'] text-4xl text-[#154771] font-semibold mb-4">
                {featuredArticle.title}
              </h2>
              <div className="flex items-center gap-6 text-sm text-[#333333] mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#75C9E3]" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#75C9E3]" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              <p className="text-lg text-[#333333] leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#75C9E3] text-white font-['Lato'] font-semibold rounded-full hover:bg-[#154771] transition-all duration-300 group">
                Read More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Previous Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-[#89C7CA]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Lato'] text-3xl text-[#154771] font-semibold mb-12"
          >
            Previous Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#75C9E3]">
                  <div className="aspect-video bg-gradient-to-br from-[#154771] to-[#75C9E3]">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center p-4">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-sm font-['Lato']">Article Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-[#89C7CA] text-white text-xs font-['Lato'] font-semibold rounded-full mb-3">
                      {article.category}
                    </div>
                    <h3 className="font-['Lato'] text-xl text-[#154771] font-semibold mb-3 group-hover:text-[#75C9E3] transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#333333]">
                      <Calendar size={14} className="text-[#75C9E3]" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <h2 className="font-['Lato'] text-4xl lg:text-5xl text-[#154771] font-semibold text-center md:text-left">
              Inspired? Let's tell your story.
            </h2>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB629] text-white font-['Lato'] font-semibold text-lg rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
