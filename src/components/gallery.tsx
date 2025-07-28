import { X } from 'lucide-react';

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

export default GalleryModal;