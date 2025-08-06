import React from "react";
import {
  ChildrenMinistry,
  ChildrenMinistry2,
  Together3,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image6,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image30,
} from "../../images";

const Gallery = () => {
  const images = [
    { src: ChildrenMinistry, caption: "Youth Fellowship Gathering" },
    { src: Image1, caption: "Youth Fellowship Gathering" },
    { src: Together3, caption: "Community Outreach Program" },
    { src: Image2, caption: "Church Anniversary Celebration" },
    // { src: Image3, caption: "Worship Team in Action" },
    // { src: Image4, caption: "Baptism Ceremony" },
    { src: Image5, caption: "Prayer Session" },
    { src: ChildrenMinistry2, caption: "Children’s Ministry Time" },
    { src: Image6, caption: "Community Service Event" },
    { src: Image7, caption: "Youth Fellowship Gathering" },
    { src: Image8, caption: "Church Anniversary Celebration" },
    { src: Image9, caption: "Worship Team in Action" },
    { src: Image10, caption: "Baptism Ceremony" },
    { src: Image11, caption: "Prayer Session" },
    { src: Image12, caption: "Community Service Event" },
    { src: Image13, caption: "Youth Fellowship Gathering" },
    { src: Image14, caption: "Church Anniversary Celebration" },
    { src: Image15, caption: "Worship Team in Action" },
    { src: Image16, caption: "Baptism Ceremony" },
    { src: Image17, caption: "Prayer Session" },
    { src: Image18, caption: "Community Service Event" },
    { src: Image19, caption: "Youth Fellowship Gathering" },
    { src: Image20, caption: "Church Anniversary Celebration" },
    { src: Image21, caption: "Worship Team in Action" },
    { src: Image22, caption: "Baptism Ceremony" },
    { src: Image23, caption: "Prayer Session" },
    { src: Image24, caption: "Community Service Event" },
    { src: Image25, caption: "Youth Fellowship Gathering" },
    { src: Image26, caption: "Church Anniversary Celebration" },
    { src: Image27, caption: "Worship Team in Action" },
    { src: Image28, caption: "Baptism Ceremony" },
    { src: Image29, caption: "Prayer Session" },
    { src: Image30, caption: "Community Service Event" },
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
              {/* <p className="text-center text-[#FFF5E1] font-medium text-sm sm:text-base">
                {item.caption}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
