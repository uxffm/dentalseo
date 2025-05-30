
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Vercel",
    avatar: "SC",
    content: "This course completely transformed how I think about web development. AstroJS is incredible, and this course taught me everything I needed to build production-ready applications.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Developer at Shopify",
    avatar: "MR", 
    content: "The best investment I've made in my career. The instructor's teaching style is clear, practical, and engaging. I'm now the go-to AstroJS expert at my company.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Freelance Web Developer",
    avatar: "EJ",
    content: "I've taken many online courses, but this one stands out. The projects are real-world applicable, and I immediately started using AstroJS for client work. Highly recommended!",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Tech Lead at Netflix",
    avatar: "DK",
    content: "Exceptional course quality. The depth of content and practical examples helped me implement AstroJS in our production environment with confidence. Outstanding teaching!",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Full Stack Developer",
    avatar: "LW",
    content: "Perfect balance of theory and practice. The course covers everything from basics to advanced concepts. I feel confident building any type of website with AstroJS now.",
    rating: 5
  },
  {
    name: "Alex Thompson",
    role: "Software Engineer at GitHub",
    avatar: "AT",
    content: "This course is a game-changer! The performance improvements I achieved using AstroJS techniques from this course impressed my entire team. Worth every penny!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who have transformed their careers with our AstroJS course.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
