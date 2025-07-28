import { Star, X } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between p-6 mb-0">
            <h2 className="text-3xl font-bold text-blue-900">{product.name}</h2>
            <button
                onClick={onClose}
                className="p-2 bg-gray-100 rounded-full"
            >
                <X size={24} className="text-gray-900" />
            </button>
            </div>

            <div className="p-6 pt-0">
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

export default ProductModal;