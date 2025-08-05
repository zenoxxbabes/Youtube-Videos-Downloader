import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Contact() {
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
            <Link to="/contact" className="hover:underline font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>School Address</CardTitle>
                  <CardDescription>Visit us at our campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Bal Bharti Public School</p>
                    <p>Street No. 5, Vishnu Garden</p>
                    <p>Sector 105, Gurugram</p>
                    <p>Haryana, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Get in touch with us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Phone:</p>
                      <p>+91 124 XXXX XXX</p>
                    </div>
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p>info@balbhartipublicschool.edu.in</p>
                    </div>
                    <div>
                      <p className="font-semibold">Office Hours:</p>
                      <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p>Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admission Enquiry</CardTitle>
                  <CardDescription>
                    For admission related queries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>Admission Office: +91 124 YYYY YYY</p>
                    <p>Email: admissions@balbhartipublicschool.edu.in</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Admission enquiries are welcome throughout the year.
                      Please contact us to schedule a campus visit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>We'd love to hear from you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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

export default Contact;
