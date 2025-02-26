import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Info, Settings, Battery, Gauge } from 'lucide-react';

function ProductDetail() {
  const { id } = useParams();

  const products = {
    'luxury-sedans': {
      title: "Luxury Sedans",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&q=80",
      description: "Experience unparalleled comfort and sophistication with our range of luxury sedans. Each model is crafted with meticulous attention to detail and features the latest in automotive technology.",
      features: ["Premium leather interior", "Advanced driver assistance", "Premium sound system"],
      specifications: {
        engine: "3.0L V6 Twin-Turbo",
        power: "362 hp @ 5,500 rpm",
        torque: "369 lb-ft @ 1,600-4,500 rpm",
        transmission: "9-speed automatic",
        acceleration: "0-60 mph in 4.9 seconds",
        topSpeed: "155 mph (electronically limited)"
      },
      highlights: [
        "Handcrafted interior with premium materials",
        "Advanced driver assistance systems",
        "64-color ambient lighting",
        "Burmester® surround sound system",
        "Air suspension with adaptive damping"
      ]
    },
    'electric-vehicles': {
      title: "Electric Vehicles",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80",
      description: "Our electric vehicles represent the future of sustainable transportation. Combining impressive range with cutting-edge technology, these vehicles deliver both performance and environmental consciousness.",
      features: ["Long-range battery", "Fast charging capability", "Zero emissions"],
      specifications: {
        motor: "Dual Motor AWD",
        power: "480 hp",
        range: "350 miles",
        charging: "10-80% in 30 minutes",
        acceleration: "0-60 mph in 3.5 seconds",
        topSpeed: "162 mph"
      },
      highlights: [
        "Zero emissions powertrain",
        "Over-the-air software updates",
        "Advanced regenerative braking",
        "17-inch touchscreen display",
        "Full self-driving capability"
      ]
    },
    'suvs': {
      title: "SUVs",
      image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80",
      description: "Our SUV lineup offers versatility without compromise. Perfect for both urban adventures and off-road excursions, these vehicles provide space, comfort, and capability.",
      features: ["Spacious interior", "All-wheel drive", "Advanced safety features"],
      specifications: {
        engine: "2.0L Turbo I4",
        power: "255 hp @ 5,800 rpm",
        torque: "273 lb-ft @ 1,800-4,800 rpm",
        transmission: "8-speed automatic",
        groundClearance: "8.0 inches",
        cargoSpace: "63.3 cubic feet"
      },
      highlights: [
        "Intelligent all-wheel drive",
        "Panoramic sunroof",
        "Power liftgate",
        "Third-row seating",
        "Off-road driving modes"
      ]
    },
    'sports-cars': {
      title: "Sports Cars",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
      description: "Designed for driving enthusiasts, our sports cars deliver exhilarating performance and precise handling. Each model represents the perfect blend of power and aerodynamic efficiency.",
      features: ["High-performance engine", "Aerodynamic design", "Sport-tuned suspension"],
      specifications: {
        engine: "4.0L V8 Twin-Turbo",
        power: "503 hp @ 6,250 rpm",
        torque: "505 lb-ft @ 2,100-5,500 rpm",
        transmission: "8-speed dual-clutch",
        acceleration: "0-60 mph in 3.2 seconds",
        topSpeed: "195 mph"
      },
      highlights: [
        "Carbon fiber construction",
        "Active aerodynamics",
        "Track-focused suspension",
        "Carbon ceramic brakes",
        "Race-inspired cockpit"
      ]
    },
    'hybrid-vehicles': {
      title: "Hybrid Vehicles",
      image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80",
      description: "Our hybrid vehicles offer the perfect balance of efficiency and performance. Enjoy reduced emissions and improved fuel economy without sacrificing the driving experience.",
      features: ["Fuel efficiency", "Regenerative braking", "ECO driving mode"],
      specifications: {
        engine: "2.5L I4 + Electric Motor",
        combinedPower: "219 hp",
        fuelEconomy: "52 city / 48 highway mpg",
        electricRange: "32 miles",
        charging: "2.5 hours (240V)",
        transmission: "eCVT"
      },
      highlights: [
        "Seamless hybrid powertrain",
        "EV-only capability",
        "Energy monitoring system",
        "Predictive efficiency assistant",
        "Multiple driving modes"
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <Link 
              to="/products" 
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Info className="w-6 h-6 mr-2 text-blue-600" />
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-blue-600" />
                  Specifications
                </h2>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Battery className="w-6 h-6 mr-2 text-blue-600" />
                Product Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Gauge className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;