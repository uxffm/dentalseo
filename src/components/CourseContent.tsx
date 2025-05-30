
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, CheckCircle } from "lucide-react";

const modules = [
  {
    title: "Introduction to AstroJS",
    lessons: 6,
    duration: "45 min",
    topics: ["What is AstroJS?", "Setting up your environment", "Your first Astro project", "Understanding the file structure"]
  },
  {
    title: "Components & Layouts",
    lessons: 8,
    duration: "1h 20min",
    topics: ["Astro components", "Layouts and slots", "Props and data flow", "Component composition patterns"]
  },
  {
    title: "Pages & Routing",
    lessons: 7,
    duration: "1h 10min",
    topics: ["File-based routing", "Dynamic routes", "API routes", "Redirects and middleware"]
  },
  {
    title: "Styling & Assets",
    lessons: 6,
    duration: "50min",
    topics: ["CSS in Astro", "Sass/SCSS support", "CSS Modules", "Image optimization"]
  },
  {
    title: "Framework Integration",
    lessons: 9,
    duration: "1h 45min",
    topics: ["Adding React components", "Vue integration", "Svelte components", "Mixing frameworks"]
  },
  {
    title: "Island Architecture",
    lessons: 5,
    duration: "1h 15min",
    topics: ["Understanding islands", "Client directives", "Hydration strategies", "Performance optimization"]
  },
  {
    title: "Content & Collections",
    lessons: 6,
    duration: "1h 30min",
    topics: ["Content collections", "Markdown & MDX", "CMS integration", "Dynamic content"]
  }
];

export function CourseContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Comprehensive Curriculum
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Course Breakdown
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            47 carefully crafted lessons covering everything from basics to advanced AstroJS concepts. 
            Build real projects and gain practical experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {modules.slice(0, 4).map((module, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Play className="w-4 h-4 mr-1" />
                        {module.lessons} lessons
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    Module {index + 1}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            {modules.slice(4).map((module, index) => (
              <Card key={index + 4} className="p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Play className="w-4 h-4 mr-1" />
                        {module.lessons} lessons
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    Module {index + 5}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
            View Full Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
}
