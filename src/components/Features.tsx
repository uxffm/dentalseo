
import { Card } from "@/components/ui/card";
import { Zap, Search, Palette, Code, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Learn how to build websites that load instantly with AstroJS's zero-JavaScript approach and smart hydration.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Master SEO best practices with server-side rendering and static site generation for maximum search visibility.",
    color: "from-green-400 to-blue-500"
  },
  {
    icon: Palette,
    title: "Framework Agnostic",
    description: "Use React, Vue, Svelte, or any framework you love. Learn how to integrate multiple frameworks seamlessly.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Code,
    title: "Modern Developer Experience",
    description: "Discover the best developer tools, hot reloading, TypeScript support, and modern build optimizations.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Island Architecture",
    description: "Understand AstroJS's revolutionary island architecture and how it revolutionizes web performance.",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Learn deployment strategies, performance optimization, and production best practices for real-world projects.",
    color: "from-indigo-400 to-purple-500"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our AstroJS Course?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the framework that's changing how we build for the web. Learn cutting-edge techniques 
            that will make you a more effective developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
