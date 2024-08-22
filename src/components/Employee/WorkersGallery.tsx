import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { API_URL } from "../../env";

export function WorkersGallery({ data }: any) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  // Ouvrir le slider
  const openSlider = (index: any) => {
    setSelectedImageIndex(index);
    setIsSliderOpen(true);
  };

  // Fermer le slider
  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  // Aller à l'image précédente
  const prevImage = () => {
    setSelectedImageIndex((prevIndex: any) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Aller à l'image suivante
  const nextImage = () => {
    setSelectedImageIndex((prevIndex: any) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      {/* Galerie d'images */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {data.map((item: any, index: any) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={`${API_URL}/resources/${item.image}`}
              alt={`gallery-photo-${index}`}
              onClick={() => openSlider(index)} // Ouvre le slider lors du clic
            />
          </div>
        ))}
      </div>

      {/* Slider/Modal */}
      {isSliderOpen && (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-[50%] flex items-center justify-center">
            <button
              onClick={closeSlider}
              className="absolute top-5 right-5 text-white"
            >
              <IoIosClose size={25} />
            </button>
            <div className="relative">
              <img
                className="max-w-full max-h-full"
                src={`${API_URL}/resources/${data[selectedImageIndex]?.image}`}
                alt={`slider-image-${selectedImageIndex}`}
              />
              <button
                onClick={prevImage}
                className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white text-3xl px-4"
              >
                <MdArrowBackIosNew size={25} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-white text-3xl px-4"
              >
                <MdArrowForwardIos size={25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
