import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Cinematic Video Editor",
      description: "AI-powered video editing platform with multiple API integrations",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "AI", "Video"],
      status: "Live"
    },
    {
      id: 2,
      title: "3D Animation Studio",
      description: "Real-time 3D rendering and animation tools for content creators",
      image: "/api/placeholder/600/400",
      tags: ["Three.js", "WebGL", "Animation"],
      status: "In Development"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Automated content creation using advanced machine learning models",
      image: "/api/placeholder/600/400",
      tags: ["AI", "Python", "Machine Learning"],
      status: "Beta"
    },
    {
      id: 4,
      title: "Cloud Video Processing",
      description: "Scalable video processing infrastructure for enterprise clients",
      image: "/api/placeholder/600/400",
      tags: ["AWS", "Docker", "Microservices"],
      status: "Live"
    }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Three.js", level: 85 },
    { name: "Python", level: 82 },
    { name: "AI/ML", level: 80 }
  ];

  return (
    <div className="min-h-screen text-white cinematic-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Showcasing innovative projects and cutting-edge solutions in AI, video editing, and web development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-white/70 text-lg">Explore our latest work and innovative solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-surface/80 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg text-sm font-medium transition-colors">
                      View Project
                    </button>
                    <button className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-lg text-sm transition-colors">
                      View Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-white/70 text-lg">Technologies and tools we excel at</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-surface/80 border border-white/10 rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-accent font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-accent to-accent/80 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent hover:bg-accent/80 rounded-lg text-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-lg text-lg transition-colors">
                View All Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;