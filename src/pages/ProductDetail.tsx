import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Info, Settings, Battery, Gauge } from 'lucide-react';

function ProductDetail() {
  const { id } = useParams();

  const products = {
    "Taper_Roller_Cage": {
      title: "Taper Roller Cage",
      image: "/src/Images/Cage.png",
      description: "Designed for high-load applications, the Taper Roller Cage ensures smooth and reliable performance in demanding conditions.",
      features: ["High load capacity", "Durable metal construction", "Precision-engineered for stability"],
      specifications: {
        material: "Hardened steel",
        loadCapacity: "High radial and axial load support",
        lubrication: "Oil/grease compatible",
        temperatureRange: "-40°C to 200°C",
        durability: "Extended service life"
      },
      highlights: [
        "Optimized for heavy-duty applications",
        "Resistant to wear and deformation",
        "Ensures reduced friction and heat generation",
        "Suitable for high-speed operations",
        "Engineered for improved efficiency"
      ]
    },
    "Cylindrical_Roller_Cage": {
      title: "Cylindrical Roller Cage",
      image: "/src/Images/Cage.png",
      description: "The Cylindrical Roller Cage is built for high radial loads and precision movement, ensuring smooth rotation and efficiency.",
      features: ["High radial load capacity", "Optimized roller guidance", "Minimal friction design"],
      specifications: {
        material: "Alloy steel",
        loadCapacity: "Supports high radial forces",
        lubrication: "Grease/oil compatibility",
        temperatureRange: "-30°C to 180°C",
        durability: "Low wear and high longevity"
      },
      highlights: [
        "High-speed capability with reduced heat generation",
        "Precision manufacturing for smooth operation",
        "Increased load-bearing surface area",
        "Resistant to impact and deformation",
        "Ideal for gearboxes and heavy machinery"
      ]
    },
    "Spherical_Roller_Cage": {
      title: "Spherical Roller Cage",
      image: "/src/Images/Cage.png",
      description: "A high-performance cage for spherical roller bearings, designed for applications requiring self-aligning capability.",
      features: ["Self-aligning ability", "Supports both radial and axial loads", "Impact-resistant design"],
      specifications: {
        material: "Brass or steel",
        loadCapacity: "Handles heavy radial and axial loads",
        lubrication: "Oil/grease optimized",
        temperatureRange: "-25°C to 220°C",
        durability: "Long operational lifespan"
      },
      highlights: [
        "Designed for misalignment compensation",
        "Enhanced durability under tough conditions",
        "Reduces vibration and noise",
        "Ideal for industrial and mining applications",
        "Engineered for superior shock resistance"
      ]
    },
    'Brass_Cage': {
      title: "Brass Cage",
      image: "/src/Images/Cage.png",
      description: "A premium-quality brass cage offering superior durability and wear resistance for demanding applications.",
      features: ["High strength and toughness", "Excellent wear resistance", "Superior corrosion protection"],
      specifications: {
        material: "Brass",
        loadCapacity: "High-speed and heavy-load capability",
        lubrication: "Optimized for oil/grease",
        temperatureRange: "-20°C to 250°C",
        durability: "Exceptional service life"
      },
      highlights: [
        "Resists wear and fatigue over long-term use",
        "Non-magnetic and corrosion-resistant properties",
        "Ideal for high-speed and high-temperature environments",
        "Lightweight yet extremely strong",
        "Commonly used in aerospace and automotive industries"
      ]
    },
    "Plastic_Cage": {
      title: "Plastic Cage",
      image: "/src/Images/Cage.png",
      description: "A lightweight and low-friction cage designed for applications requiring high efficiency and minimal maintenance.",
      features: ["Lightweight construction", "Low-friction properties", "Corrosion-resistant material"],
      specifications: {
        material: "High-performance polymer",
        loadCapacity: "Optimized for low to medium loads",
        lubrication: "Self-lubricating capability",
        temperatureRange: "-40°C to 120°C",
        durability: "Long-lasting and maintenance-free"
      },
      highlights: [
        "Reduced weight for improved efficiency",
        "Low noise and friction operation",
        "Resistant to moisture and chemicals",
        "Extended service life with minimal maintenance",
        "Suitable for electrical insulation applications"
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