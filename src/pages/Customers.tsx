import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building2, Globe } from 'lucide-react';

function Customers() {
  const customers = [
    {
      name: "Global Motors Corporation",
      type: "Automotive Manufacturer",
      region: "North America",
      description: "Leading manufacturer of passenger vehicles and commercial trucks."
    },
    {
      name: "EcoTech Mobility",
      type: "Electric Vehicle Producer",
      region: "Europe",
      description: "Innovative producer of electric and hybrid vehicles."
    },
    {
      name: "Asia Motors Ltd",
      type: "Automotive Conglomerate",
      region: "Asia Pacific",
      description: "Major player in the Asian automotive market."
    },
    {
      name: "Premium Auto Group",
      type: "Luxury Vehicle Manufacturer",
      region: "Global",
      description: "Specialist in high-end luxury vehicles."
    },
    {
      name: "Commercial Fleet Solutions",
      type: "Commercial Vehicle Producer",
      region: "International",
      description: "Provider of commercial and industrial vehicles."
    },
    {
      name: "Future Mobility Tech",
      type: "Mobility Solutions Provider",
      region: "Global",
      description: "Developer of next-generation mobility solutions."
    },
    {
      name: "AutoTech Industries",
      type: "Automotive Technology",
      region: "Multiple Regions",
      description: "Supplier of advanced automotive technology systems."
    },
    {
      name: "Sustainable Transport Corp",
      type: "Green Technology",
      region: "Global",
      description: "Focus on sustainable transportation solutions."
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
        
        <h1 className="text-4xl font-bold mb-12">Our Trusted Customers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customers.map((customer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{customer.name}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {customer.type}
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      {customer.region}
                    </div>
                  </div>
                  <p className="text-gray-600">{customer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;