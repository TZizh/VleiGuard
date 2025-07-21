import React, { useState } from "react";
import { HandClick } from "lucide-react"; // lucide-react for icons

const wetlandImages = [
  {
    src: "/wetland_photo_1.jpg",
    caption: "A thriving vlei in the rainy season, home to rare birds and frogs.",
  },
  {
    src: "/wetland_photo_2.jpg",
    caption: "Community members restoring natural grasses to prevent erosion.",
  },
  {
    src: "/wetland_photo_3.jpg",
    caption: "A threatened wetland encroached by farming—urgent for protection.",
  },
];

export default function WetlandsSection() {
  return (
    <section className="w-full min-h-[65vh] flex flex-col md:flex-row items-center justify-center px-8 py-20 bg-white">
      {/* Carousel + fun icon */}
      <div className="md:w-2/3 flex flex-col items-center justify-center mb-12 md:mb-0">
        <WetlandCarousel images={wetlandImages} />
      </div>
      {/* Explanatory text */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#234445] mb-4">
          What Are Wetlands?
        </h2>
        <p className="text-lg md:text-xl text-[#234445] max-w-lg mb-4">
          Zimbabwe’s vleis and mapani are more than just swamps—they’re vibrant ecosystems vital for clean water, wildlife, and local communities.
        </p>
        <p className="text-md md:text-lg text-[#234445]/80">
          Explore some of the unique and threatened wetlands we’re working to protect. <span className="inline-flex items-center font-bold text-green-700"><HandClick className="ml-1 animate-pulse" size={22} /> Click the photos!</span>
        </p>
      </div>
    </section>
  );
}

// Image carousel with click-to-flip
function WetlandCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prevImg = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative flex flex-col items-center w-full max-w-xl">
      {/* Carousel Image */}
      <div
        className="group relative rounded-3xl shadow-2xl overflow-hidden bg-[#e9f7db] w-[350px] h-[260px] md:w-[480px] md:h-[350px] flex items-center justify-center cursor-pointer transition-all"
        onClick={nextImg}
        tabIndex={0}
        aria-label="Next Image"
        style={{ minWidth: 0 }}
      >
        <img
          src={images[index].src}
          alt={images[index].caption}
          className="object-cover w-full h-full transition-transform duration-300 group-active:scale-95"
        />
        {/* “Click me!” Icon */}
        <div className="absolute top-4 right-4 bg-white/80 rounded-full px-3 py-1 flex items-center shadow animate-bounce z-10">
          <HandClick className="text-green-700 mr-1" size={20} />
          <span className="font-semibold text-green-700 text-sm">Click me!</span>
        </div>
        {/* Stacked effect */}
        <div className="absolute -z-10 left-4 top-4 w-[93%] h-[90%] rounded-3xl bg-[#c8ec7e] blur-[2px]" />
      </div>

      {/* Caption */}
      <div className="mt-4 text-center text-[#234445] font-medium bg-white/90 rounded-xl p-3 shadow max-w-[420px] text-base md:text-lg">
        {images[index].caption}
      </div>
      {/* Prev/Next buttons for accessibility */}
      <div className="mt-2 flex gap-4 items-center">
        <button
          className="rounded-full bg-green-200 hover:bg-green-400 p-2 transition shadow text-green-900 font-bold"
          onClick={prevImg}
          aria-label="Previous Image"
        >
          &#8592;
        </button>
        <button
          className="rounded-full bg-green-200 hover:bg-green-400 p-2 transition shadow text-green-900 font-bold"
          onClick={nextImg}
          aria-label="Next Image"
        >
          &#8594;
        </button>
      </div>
      {/* Dot indicators */}
      <div className="flex gap-2 mt-3">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-green-700" : "bg-green-300"} inline-block`}
          />
        ))}
      </div>
    </div>
  );
}
