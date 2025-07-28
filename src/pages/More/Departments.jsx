import React from "react";

const departments = [
  {
    name: "Choir",
    description:
      "The choir leads the congregation in worship through music and prepares the atmosphere for God’s presence. They rehearse weekly and minister during services and special programs.",
    image: "/images/departments/choir.jpg",
    leader: "Sister Angela Okoro",
  },
  {
    name: "Ushering",
    description:
      "The ushering department ensures order during services by welcoming guests, guiding members to their seats, and assisting with offerings and other logistical needs.",
    image: "/images/departments/ushering.jpg",
    leader: "Brother Matthew Ibeh",
  },
  {
    name: "Sanitation",
    description:
      "This department maintains the cleanliness of the church environment before, during, and after services and events.",
    image: "/images/departments/sanitation.jpg",
    leader: "Sister Blessing Eze",
  },
  {
    name: "Media & Technical",
    description:
      "Handles sound, projection, live streaming, and media coverage of services. They ensure that all audio-visual needs are met.",
    image: "/images/departments/media.jpg",
    leader: "Brother Chinedu Nwosu",
  },
  {
    name: "Prayer Team",
    description:
      "Intercedes on behalf of the church and its members. They lead weekly prayer meetings and spiritual retreats.",
    image: "/images/departments/prayer.jpg",
    leader: "Pastor Joy Uche",
  },
  {
    name: "Children Ministry",
    description:
      "Trains and nurtures children in the way of the Lord through engaging Bible stories, worship, and activities.",
    image: "/images/departments/children.jpg",
    leader: "Sister Miriam Udo",
  },
  {
    name: "Follow-up Team",
    description:
      "Follows up with first-time visitors, new believers, and members who need care or support.",
    image: "/images/departments/followup.jpg",
    leader: "Brother David Akpan",
  },
  {
    name: "Evangelism",
    description:
      "Organizes outreach events, soul-winning campaigns, and community evangelism.",
    image: "/images/departments/evangelism.jpg",
    leader: "Sister Faith Amadi",
  },
  {
    name: "Welfare",
    description:
      "Provides support and assistance to members in need including food, clothing, and shelter aid.",
    image: "/images/departments/welfare.jpg",
    leader: "Brother Johnson Obi",
  },
  {
    name: "Protocol & Security",
    description:
      "Ensures safety and smooth coordination of special guests and events. Also responsible for order within the premises.",
    image: "/images/departments/security.jpg",
    leader: "Brother Emmanuel Ajaero",
  },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Church Departments</h1>
        <p className="text-lg italic text-[#FFF5E1]/80 max-w-2xl mx-auto">
          "There are different kinds of service, but the same Lord." – 1
          Corinthians 12:5
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-[#FFF5E1]/10 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={dept.image}
              alt={dept.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-1 text-[#FFF5E1]">
              {dept.name}
            </h3>
            <p className="text-sm text-[#FFF5E1]/90 mb-2">
              Led by: <span className="font-medium">{dept.leader}</span>
            </p>
            <p className="text-[#FFF5E1]/80 text-sm">{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
