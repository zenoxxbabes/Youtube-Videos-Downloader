import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
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
            <Link to="/academics" className="hover:underline">
              Academics
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Bal Bharti Public School
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Excellence in Education, Character Building, and Holistic
            Development
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link to="/about">Learn More</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Quality Education</CardTitle>
                <CardDescription>
                  Comprehensive curriculum designed to nurture young minds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our experienced faculty provides personalized attention to
                  each student, ensuring academic excellence and character
                  development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modern Facilities</CardTitle>
                <CardDescription>
                  State-of-the-art infrastructure for optimal learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Well-equipped classrooms, science labs, computer labs,
                  library, and sports facilities to support holistic education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Extracurricular Activities</CardTitle>
                <CardDescription>
                  Beyond academics - sports, arts, and cultural programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Wide range of activities including sports, music, dance,
                  drama, and various clubs to develop students' talents.
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

export default Home;
