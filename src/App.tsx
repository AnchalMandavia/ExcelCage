import React, { useState, useEffect } from 'react';
import { ChevronUp, Menu, X, ArrowRight, Phone, Mail, MapPin, Leaf, Recycle, Zap, Award, Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">Excel Industries</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Product Modal Component
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-blue-900">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Star size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Specifications</h3>
                <div className="space-y-3">
                  {product.specs?.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{spec.label}</span>
                      <span className="text-gray-700">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery Modal Component
const GalleryModal = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  if (!isOpen || !images || currentIndex < 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
        >
          <X size={24} className="text-white" />
        </button>
        
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onPrev}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-white"
          >
            Previous
          </button>
          <span className="text-white">{currentIndex + 1} of {images.length}</span>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Horizontal Scrolling Gallery Component
const HorizontalGallery = ({ images, onImageClick }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Split images into two rows of 10 each
  const topRowImages = images.slice(0, 10);
  const bottomRowImages = images.slice(10, 20);

  return (
    <div className="relative">
      {/* Scroll Controls */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => scroll('left')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Scrollable Gallery Container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-col space-y-4 min-w-max">
          {/* Top Row */}
          <div className="flex space-x-4">
            {topRowImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                style={{ width: '280px', height: '200px' }}
                onClick={() => onImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex space-x-4">
            {bottomRowImages.map((image, index) => (
              <div
                key={index + 10}
                className="relative group cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                style={{ width: '280px', height: '200px' }}
                onClick={() => onImageClick(index + 10)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 11}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays for Visual Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [galleryImages] = useState([
    // Top Row (10 images)
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
    // Bottom Row (10 images)
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

  // Scroll detection for active section
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
      
      {/* Hero Section */}
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

      {/* Products Section */}
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

      {/* Gallery Section */}
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

      {/* Sustainability Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your manufacturing needs? Contact us today for a consultation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-orange-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-orange-500" />
                    <span>info@manufactureco.com</span>
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
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf8_example_form_id/viewform?embedded=true"
                width="100%"
                height="400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
                title="Contact Form"
              >
                Loading contact form...
              </iframe>
              <p className="text-sm text-gray-400 mt-2">
                * This is a placeholder for your Google Form. Replace the src URL with your actual Google Form embed link.
              </p>
            </div>
            
            {/* Map */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Google Maps Integration</p>
                  <p className="text-sm mt-2">
                    Replace this placeholder with your<br />
                    Google Maps embed code
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                * Embed your Google Maps location here using an iframe with your specific coordinates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">ManufactureCo</div>
          <p className="text-gray-400 mb-4">Excellence in Manufacturing Since 1985</p>
          <div className="text-sm text-gray-500">
            © 2024 ManufactureCo. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
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