import React from 'react';
import { Car, Shield, Award, Factory, ChevronDown, Users, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const products = [
    {
      id: "luxury-sedans",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&q=80",
      title: "Luxury Sedans",
      description: "Combining comfort with performance"
    },
    {
      id: "electric-vehicles",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80",
      title: "Electric Vehicles",
      description: "Sustainable mobility solutions"
    },
    {
      id: "suvs",
      image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80",
      title: "SUVs",
      description: "Versatility meets sophistication"
    },
    {
      id: "sports-cars",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
      title: "Sports Cars",
      description: "Pure driving excitement"
    },
    {
      id: "hybrid-vehicles",
      image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80",
      title: "Hybrid Vehicles",
      description: "Efficient and eco-friendly"
    }
  ];

  const customers = [
    { name: "Global Motors Corporation" },
    { name: "EcoTech Mobility" },
    { name: "Asia Motors Ltd" },
    { name: "Premium Auto Group" },
    { name: "Commercial Fleet Solutions" },
    { name: "Future Mobility Tech" },
    { name: "AutoTech Industries" },
    { name: "Sustainable Transport Corp" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80"
            alt="Modern car factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-white" />
            <span className="text-white text-xl font-bold">AutoTech Manufacturing</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#products" className="text-white hover:text-gray-300">Products</a>
            <a href="#capabilities" className="text-white hover:text-gray-300">Capabilities</a>
            <a href="#certifications" className="text-white hover:text-gray-300">Certifications</a>
            <a href="#customers" className="text-white hover:text-gray-300">Customers</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering Excellence in Automotive Manufacturing
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Leading the future of mobility with innovative manufacturing solutions and uncompromising quality
          </p>
          <a href="#products" className="animate-bounce flex items-center text-white">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold">Our Premium Products</h2>
            <Link 
              to="/products" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
              <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
                {products.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0" style={{ width: '300px' }}>
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <Factory className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Manufacturing</h3>
                <p className="text-gray-600">State-of-the-art robotics and automation systems ensuring precision and efficiency</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                <p className="text-gray-600">Rigorous testing and inspection processes at every stage of production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001:2015", description: "Quality Management System" },
              { title: "ISO 14001:2015", description: "Environmental Management" },
              { title: "IATF 16949", description: "Automotive Quality Management" }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold">Our Trusted Customers</h2>
            <Link 
              to="/customers" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View All Customers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
              <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
                {customers.map((customer, index) => (
                  <div key={index} className="flex-shrink-0 w-64 flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
                    <Users className="w-12 h-12 text-gray-400 mb-4" />
                    <span className="text-gray-700 font-medium text-center">{customer.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Manufacturing Way<br />
                        Industrial District<br />
                        Detroit, MI 48201
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">contact@autotech.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47220.95168920771!2d-83.0786002!3d42.331427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AutoTech Manufacturing Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="w-6 h-6" />
              <span className="font-bold">AutoTech Manufacturing</span>
            </div>
            <p className="text-gray-400">Leading the future of automotive manufacturing</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#capabilities" className="text-gray-400 hover:text-white">Capabilities</a></li>
              <li><a href="#certifications" className="text-gray-400 hover:text-white">Certifications</a></li>
              <li><a href="#customers" className="text-gray-400 hover:text-white">Customers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Manufacturing Way</li>
              <li>Industrial District</li>
              <li>contact@autotech.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;