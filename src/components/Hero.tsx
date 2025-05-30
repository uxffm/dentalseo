
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90 text-sm">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            4.9/5 from 2,500+ students
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AstroJS</span>
            <br />
            Build Lightning-Fast Websites
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Learn the modern web framework that's revolutionizing frontend development. 
            Build blazing-fast, SEO-optimized websites with zero JavaScript by default.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Start Learning Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm">
              Watch Preview
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-8 text-white/70">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>5,000+ Students</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>12 Hours Content</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Certificate Included</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 max-w-lg">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 rounded-3xl">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AstroJS Mastery</h3>
                <p className="text-white/70">Complete Course Package</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span>Course Progress</span>
                  <span>0/47 lessons</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-0 transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">47</div>
                  <div className="text-sm text-white/70">Lessons</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">12h</div>
                  <div className="text-sm text-white/70">Duration</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
