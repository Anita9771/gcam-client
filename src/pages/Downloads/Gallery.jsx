import React from "react";

const Gallery = () => {
  const images = [
    { src: "/images/gallery1.jpg", caption: "Sunday Worship Service" },
    { src: "/images/gallery2.jpg", caption: "Youth Fellowship Gathering" },
    { src: "/images/gallery3.jpg", caption: "Community Outreach Program" },
    { src: "/images/gallery4.jpg", caption: "Church Anniversary Celebration" },
    { src: "/images/gallery5.jpg", caption: "Worship Team in Action" },
    { src: "/images/gallery6.jpg", caption: "Baptism Ceremony" },
    { src: "/images/gallery7.jpg", caption: "Prayer Session" },
    { src: "/images/gallery8.jpg", caption: "Children’s Ministry Time" },
  ];

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        <p className="text-lg italic text-[#FFF5E1]/80 max-w-2xl mx-auto">
          "One thing I ask from the Lord, this only do I seek: that I may dwell
          in the house of the Lord all the days of my life, to gaze on the
          beauty of the Lord and to seek him in his temple." – Psalm 27:4
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-center text-[#FFF5E1] font-medium text-sm sm:text-base">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
