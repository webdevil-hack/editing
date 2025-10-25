import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

// Animated 3D Background Component
function AnimatedSphere({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} position={position}>
        <MeshDistortMaterial
          color="#9b87f5"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
        />
      </Sphere>
    </Float>
  )
}

function Creative3DBackground() {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <color attach="background" args={["#0a0a0f"]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#00e5ff" intensity={0.5} />
      
      <AnimatedSphere position={[-4, 2, -5]} />
      <AnimatedSphere position={[4, -2, -8]} />
      <AnimatedSphere position={[0, 0, -10]} />
      
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

// Interactive Card Component
interface FeatureCardProps {
  title: string
  description: string
  icon: string
  delay: number
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-glow">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl mb-4"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-white/70 leading-relaxed">
          {description}
        </p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          className="h-0.5 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"
        />
      </div>
    </motion.div>
  )
}

// Animated Counter Component
function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < target) {
          return Math.min(prev + Math.ceil(target / 50), target)
        }
        return target
      })
    }, 50)

    return () => clearInterval(timer)
  }, [target])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-white/60 text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}

// Floating Action Button
function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 min-w-48"
          >
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                🎨 Create Project
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                📁 Browse Templates
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm">
                💡 Get Inspired
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-glow"
      >
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </motion.button>
    </div>
  )
}

// Main Creative Page Component
export default function CreativePage() {
  const [currentSection, setCurrentSection] = useState(0)
  
  const features = [
    {
      title: "AI-Powered Creation",
      description: "Transform your ideas into stunning visuals with our advanced AI algorithms that understand your creative vision.",
      icon: "🤖"
    },
    {
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, sharing ideas and iterating on projects instantly.",
      icon: "🤝"
    },
    {
      title: "Infinite Possibilities",
      description: "Explore unlimited creative potential with our vast library of templates, effects, and customization options.",
      icon: "✨"
    },
    {
      title: "Professional Quality",
      description: "Export your creations in professional-grade quality, ready for any platform or presentation.",
      icon: "🎯"
    }
  ]

  const stats = [
    { target: 10000, label: "Projects Created" },
    { target: 500, label: "Active Users" },
    { target: 50, label: "AI Models" },
    { target: 99, label: "Uptime %" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Creative3DBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Create
              </span>
              <br />
              <span className="text-white">Without Limits</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Unleash your creativity with our revolutionary platform that combines 
            artificial intelligence with human imagination to create extraordinary experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
              Start Creating
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Discover the tools that will transform your creative workflow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Trusted by <span className="text-accent">Creators Worldwide</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={stat.label}
                  target={stat.target}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Create Magic</span>?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join thousands of creators who are already using our platform to bring their visions to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
                Get Started Free
              </button>
              <button className="px-10 py-5 border border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingActionButton />
    </div>
  )
}