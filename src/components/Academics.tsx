import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Academics() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bal Bharti Public School</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/academics" className="hover:underline font-semibold">
              Academics
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Academics Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Academic Programs
          </h2>

          {/* Curriculum Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Curriculum
            </h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              We follow a comprehensive curriculum that combines academic
              excellence with practical learning. Our programs are designed to
              develop critical thinking, creativity, and problem-solving skills
              while maintaining strong foundational knowledge.
            </p>
          </div>

          {/* Grade Levels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Primary School</CardTitle>
                <CardDescription>Classes I - V</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Foundation in English, Hindi, and Mathematics</li>
                  <li>• Environmental Studies</li>
                  <li>• Art and Craft</li>
                  <li>• Physical Education</li>
                  <li>• Moral Science</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Middle School</CardTitle>
                <CardDescription>Classes VI - VIII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Core subjects: English, Hindi, Mathematics</li>
                  <li>• Science and Social Studies</li>
                  <li>• Computer Science</li>
                  <li>• Sanskrit (optional)</li>
                  <li>• Sports and Games</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary School</CardTitle>
                <CardDescription>Classes IX - XII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Science Stream (PCM/PCB)</li>
                  <li>• Commerce Stream</li>
                  <li>• Humanities Stream</li>
                  <li>• Advanced Computer Science</li>
                  <li>• Career Counseling</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Special Programs */}
          <h3 className="text-3xl font-bold text-center mb-8">
            Special Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>STEM Education</CardTitle>
                <CardDescription>
                  Science, Technology, Engineering & Mathematics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Hands-on learning approach with modern laboratories, robotics
                  club, and science projects to develop analytical and
                  problem-solving skills.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Language Development</CardTitle>
                <CardDescription>
                  Multilingual proficiency program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Focus on English, Hindi, and regional languages with emphasis
                  on communication skills, literature appreciation, and cultural
                  understanding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arts & Culture</CardTitle>
                <CardDescription>
                  Creative expression and cultural awareness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Music, dance, drama, and visual arts programs to nurture
                  creativity and cultural appreciation among students.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sports & Fitness</CardTitle>
                <CardDescription>
                  Physical development and team spirit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Comprehensive sports program including cricket, football,
                  basketball, athletics, and yoga to promote physical fitness
                  and teamwork.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <h4 className="text-lg font-semibold mb-2">
            Bal Bharti Public School
          </h4>
          <p className="text-gray-300">
            Street No. 5, Vishnu Garden, Sector 105
            <br />
            Gurugram, Haryana, India
          </p>
          <p className="text-gray-400 mt-4">
            © 2024 Bal Bharti Public School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Academics;
