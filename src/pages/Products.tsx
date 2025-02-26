import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Products() {
  const products = [
    {
      id: "luxury-sedans",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&q=80",
      title: "Luxury Sedans",
      description: "Experience unparalleled comfort and sophistication with our range of luxury sedans. Each model is crafted with meticulous attention to detail and features the latest in automotive technology.",
      features: ["Premium leather interior", "Advanced driver assistance", "Premium sound system"]
    },
    {
      id: "electric-vehicles",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80",
      title: "Electric Vehicles",
      description: "Our electric vehicles represent the future of sustainable transportation. Combining impressive range with cutting-edge technology, these vehicles deliver both performance and environmental consciousness.",
      features: ["Long-range battery", "Fast charging capability", "Zero emissions"]
    },
    {
      id: "suvs",
      image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&q=80",
      title: "SUVs",
      description: "Our SUV lineup offers versatility without compromise. Perfect for both urban adventures and off-road excursions, these vehicles provide space, comfort, and capability.",
      features: ["Spacious interior", "All-wheel drive", "Advanced safety features"]
    },
    {
      id: "sports-cars",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
      title: "Sports Cars",
      description: "Designed for driving enthusiasts, our sports cars deliver exhilarating performance and precise handling. Each model represents the perfect blend of power and aerodynamic efficiency.",
      features: ["High-performance engine", "Aerodynamic design", "Sport-tuned suspension"]
    },
    {
      id: "hybrid-vehicles",
      image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80",
      title: "Hybrid Vehicles",
      description: "Our hybrid vehicles offer the perfect balance of efficiency and performance. Enjoy reduced emissions and improved fuel economy without sacrificing the driving experience.",
      features: ["Fuel efficiency", "Regenerative braking", "ECO driving mode"]
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