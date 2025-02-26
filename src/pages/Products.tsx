import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Products() {
  const products = [
    {
      id: "Taper_Roller_Cage",
      image: "/Images/Cage.png",
      title: "Taper Roller Cage",
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
    {
      id: "Cylindrical_Roller_Cage",
      image: "/Images/Cage.png",
      title: "Cylindrical Roller Cage",
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
    {
      id: "Spherical_Roller_Cage",
      image: "/Images/Cage.png",
      title: "Spherical Roller Cage",
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
    {
      id: "Brass_Cage",
      image: "/Images/Cage.png",
      title: "Brass Cage",
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
    {
      id: "Plastic_Cage",
      image: "/Images/Cage.png",
      title: "Plastic Cage",
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
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-12">Our Product Line</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;