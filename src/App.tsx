import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Leaf, Recycle, Zap, Award, X } from 'lucide-react';
import Navigation from './components/navigation';
import ProductModal from './components/products';
import GalleryModal from './components/gallery';
import HorizontalGallery from './components/horizontal_gallery';
import ScrollToTop from './components/scroll_to_top';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [galleryImages] = useState([
    'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5483078/pexels-photo-5483078.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3683108/pexels-photo-3683108.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862367/pexels-photo-3862367.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5483079/pexels-photo-5483079.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3683109/pexels-photo-3683109.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862368/pexels-photo-3862368.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5483080/pexels-photo-5483080.jpeg?auto=compress&cs=tinysrgb&w=800'
  ]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(-1);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Taper Roller Cage ',
      image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Handles radial and axial heavy loads.',
      description: 'Each product at Excel is developed for an individual customer specific request. The products are finished with different technologies like vibro, shot blast, phosphate and black oxide depending upon the design. Additionally each product lot is cleaned with ultra sonic cleaning machine for superior product performance. Excel supports its customers from the development till the final bearing assembly stage with its knowledge and tooling expertise.',
      features: [
        'Advanced CNC control systems',
        'Sub-micron precision accuracy',
        'Automated quality monitoring',
        'Energy-efficient operation',
        'Modular design for easy maintenance'
      ],
      specs: [
        { label: 'Outer Diameter', value: '30 mm to 300 mm' },
        { label: 'Inner Diameter', value: '25 mm to 210 mm' },
        { label: 'Material thickness', value: '1 mm to 4 mm' },
        { label: 'Press Capacity', value: '10 tonne to 160 tonne' },
        { label: 'Production Capacity', value: '500,000 per month' }
      ]
    },
    {
      id: 2,
      name: 'Spherical Roller Cage',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'Self-aligning for misaligned shaft loads.',
      description: 'Transform your production line with our state-of-the-art Automated Assembly Systems. These intelligent systems reduce manual labor, increase throughput, and ensure consistent quality across all production runs.',
      features: [
        'Intelligent robotic arms',
        'Real-time quality inspection',
        'Flexible product configuration',
        'Predictive maintenance alerts',
        'Integration with existing systems'
      ],
      specs: [
        { label: 'Outer Diameter', value: '30 mm to 300 mm' },
        { label: 'Inner Diameter', value: '25 mm to 210 mm' },
        { label: 'Material thickness', value: '1 mm to 4 mm' },
        { label: 'Press Capacity', value: '10 tonne to 160 tonne' },
        { label: 'Production Capacity', value: '500,000 per month' }
      ]
    },
    {
      id: 3,
      name: 'Cylindrical Roller Cage',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800',
      shortDescription: 'High-speed, radial load capacity applications.',
      description: 'Ensure product excellence with our comprehensive Quality Control Solutions. Using advanced sensor technology and AI-powered analysis, these systems detect defects at the earliest stage of production.',
      features: [
        'High-resolution imaging systems',
        'AI-powered defect detection',
        'Statistical process control',
        'Automated reject handling',
        'Comprehensive reporting dashboard'
      ],
      specs: [
        { label: 'Outer Diameter', value: '30 mm to 300 mm' },
        { label: 'Inner Diameter', value: '25 mm to 210 mm' },
        { label: 'Material thickness', value: '1 mm to 4 mm' },
        { label: 'Press Capacity', value: '10 tonne to 160 tonne' },
        { label: 'Production Capacity', value: '500,000 per month' }
      ]
    }
  ];

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const openGalleryModal = (index) => {
    setCurrentGalleryIndex(index);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    setCurrentGalleryIndex(-1);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'products', 'gallery', 'sustainability', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Excel Industries
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Excellence in Taper and Spherical Bearing Cages
          </p>
          <button
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Explore Our Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of precision-engineered bearing cages designed to boost performance, durability, and manufacturing efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <button
                    onClick={() => openProductModal(product)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    View Details & Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take a look at our manufacturing facilities and products in action
            </p>
            <p className="text-sm text-gray-500">
              Use the arrow buttons to scroll horizontally through our image gallery
            </p>
          </div>
          
          <HorizontalGallery 
            images={galleryImages} 
            onImageClick={openGalleryModal}
          />
        </div>
      </section>

      <section id="sustainability" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Sustainability Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to environmental responsibility and sustainable manufacturing practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Leaf size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Carbon Neutral</h3>
              <p className="text-gray-600">Achieving carbon neutrality by 2030 through renewable energy and efficiency improvements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Recycle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Circular Economy</h3>
              <p className="text-gray-600">Implementing circular design principles to minimize waste and maximize resource efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Clean Energy</h3>
              <p className="text-gray-600">Transitioning to 100% renewable energy sources for all manufacturing operations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600">Maintaining ISO 14001 environmental management system certification</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Environmental Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                <p className="text-gray-600">Reduction in CO2 emissions since 2020</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                <p className="text-gray-600">Waste diverted from landfills</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
                <p className="text-gray-600">Energy from renewable sources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your manufacturing needs? Contact us today for a consultation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-orange-500" />
                    <span>+91 9426480520</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-orange-500" />
                    <span>info@excelcage.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-orange-500 mt-1" />
                    <div>
                      <p>123 Manufacturing Drive</p>
                      <p>Industrial City, IC 12345</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Sunday: 8:00 AM - 7:00 PM</p>
                  <p>Wednesday: Closed</p>
                </div>
              </div>

              {/* Contact Form Modal Trigger */}
                <div className="rounded-2xl p-6 flex flex-col items-start justify-center">
                <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                Open Contact Form
                </button>
                {isContactModalOpen && (
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="mt-4 bg-gray-900 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                </button>
                )}
              </div>

              {/* Contact Form Modal */}
              {isContactModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                  <div className="bg-white rounded-2xl max-w-4xl w-full overflow-y-auto">
                    <div className="flex items-start justify-between p-6 mb-0">
                      <h3 className="text-2xl font-bold text-blue-900">Contact Us</h3>
                      <button
                        onClick={() => setIsContactModalOpen(false)}
                        className="p-2 bg-gray-100 rounded-full"
                      >
                        <X size={24} className="text-gray-900" />
                      </button>
                    </div>
                    <div className="p-6 pt-0">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeLwq8ayckiu0tals3GmkivzxFfq3_Yt9DOu4b-4O73WETlLg/viewform?embedded=true" 
                        width="100%" 
                        height="700" 
                        className="rounded-lg w-full"
                        title="Contact Form"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="bg-gray-700 rounded-lg" style={{ height: '380px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14787.923857728081!2d70.7754986181295!3d22.08854392589219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958365b58373df3%3A0x8b3913034c28949a!2sExcel%20Industries!5e0!3m2!1sen!2sin!4v1753685567418!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Excel Industries Location"
              ></iframe>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Excel Industries</div>
          <p className="text-gray-400 mb-4">Excellence in Manufacturing Since 1997</p>
          <div className="text-sm text-gray-500">
            © 2025 Excel Industries All rights reserved.
          </div>
        </div>
      </footer>

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
      />
      
      <GalleryModal
        images={galleryImages}
        currentIndex={currentGalleryIndex}
        isOpen={isGalleryModalOpen}
        onClose={closeGalleryModal}
        onNext={nextGalleryImage}
        onPrev={prevGalleryImage}
      />
      
      <ScrollToTop />
    </div>
  );
}

export default App;