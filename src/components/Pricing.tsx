
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your AstroJS Journey Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your learning style. All plans include lifetime access and free updates.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="p-8 bg-white/5 backdrop-blur-lg border-white/10 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Course Only</h3>
              <p className="text-gray-400 mb-6">Perfect for self-learners</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$97</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                47 comprehensive lessons
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                12+ hours of content
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Lifetime access
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Source code included
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Certificate of completion
              </li>
            </ul>
            
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Get Started
            </Button>
          </Card>
          
          {/* Premium Plan - Most Popular */}
          <Card className="p-8 bg-gradient-to-b from-purple-900/50 to-pink-900/50 backdrop-blur-lg border-purple-500/50 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Course + Community</h3>
              <p className="text-gray-300 mb-6">Best value for dedicated learners</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$197</span>
                <span className="text-gray-300 ml-2">one-time</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Everything in Course Only
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Private Discord community
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Monthly Q&A sessions
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Code review & feedback
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Priority email support
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Bonus workshops
              </li>
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Start Learning Now
            </Button>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="p-8 bg-white/5 backdrop-blur-lg border-white/10 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Team License</h3>
              <p className="text-gray-400 mb-6">Perfect for teams & companies</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$497</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Everything in Premium
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Up to 10 team members
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Custom team onboarding
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Advanced project templates
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                1-on-1 consultation call
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 mr-3 text-green-400" />
                Commercial license
              </li>
            </ul>
            
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Contact Sales
            </Button>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            30-day money-back guarantee • Secure payment • Instant access
          </p>
          <p className="text-sm text-gray-500">
            Join 5,000+ developers who have already mastered AstroJS
          </p>
        </div>
      </div>
    </section>
  );
}
