import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Real Machines - Next-Gen AI Automation" },
    { name: "description", content: "Transform your business with cutting-edge AI automation solutions from Real Machines." },
  ];
};

export default function Index() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-blue-600/20" />
        <div className="container relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-8 leading-tight text-white">
              The Future of <span className="gradient-text">AI Automation</span> Is Here
            </h1>
            <p className="text-xl mb-12 text-gray-200">
              Revolutionize your business operations with intelligent automation powered by cutting-edge AI technology.
            </p>
            <div className="space-x-4">
              <button className="btn">Get Started Free</button>
              <button className="btn bg-white/20 hover:bg-white/30 from-transparent to-transparent border border-white/20">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Why Choose <span className="gradient-text">Real Machines</span>
            </h2>
            <p className="text-xl text-gray-200">
              Experience the next generation of business automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-20 text-white">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <div className="ml-4">
                    <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                    <p className="text-gray-200">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-12"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Start Your <span className="gradient-text">AI Journey</span>
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Smart Automation",
    description: "Deploy intelligent workflows that learn and adapt to your business needs in real-time.",
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights with advanced AI-powered analytics and predictive modeling.",
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and security protocols protect your sensitive data.",
    icon: <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  }
];

const testimonials = [
  {
    content: "Real Machines has revolutionized our operations. We've seen a 40% increase in efficiency and significant cost reduction within months.",
    name: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    content: "The AI solutions provided by Real Machines have given us a competitive edge we didn't think was possible. Simply outstanding.",
    name: "Michael Chen",
    role: "Operations Director, InnovateCo"
  }
];
