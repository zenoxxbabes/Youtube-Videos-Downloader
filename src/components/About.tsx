import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function About() {
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
            <Link to="/about" className="hover:underline font-semibold">
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

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About Our School
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Bal Bharti Public School, we are committed to providing
                quality education that nurtures the intellectual, emotional, and
                social development of our students. We strive to create a
                learning environment that encourages creativity, critical
                thinking, and character building.
              </p>
              <p className="text-gray-600">
                Our mission is to prepare students to become responsible global
                citizens who can contribute positively to society while
                maintaining strong moral values and cultural heritage.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading educational institution that empowers students
                with knowledge, skills, and values necessary for success in the
                21st century, while fostering a love for learning and respect
                for diversity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our History</CardTitle>
                <CardDescription>
                  Established with a vision for excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Founded with the goal of providing quality education in
                  Gurugram, Bal Bharti Public School has been serving the
                  community with dedication and commitment to academic
                  excellence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
                <CardDescription>Core principles that guide us</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Integrity and Honesty</li>
                  <li>Respect and Compassion</li>
                  <li>Excellence in Learning</li>
                  <li>Innovation and Creativity</li>
                  <li>Community Service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Faculty</CardTitle>
                <CardDescription>
                  Experienced and dedicated educators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our team of qualified and experienced teachers are committed
                  to providing personalized attention and creating an engaging
                  learning environment for every student.
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

export default About;
