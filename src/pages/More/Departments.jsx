import React from "react";
import {
  ChoirMaster,
  ChoirMistress,
  MediaHead,
  MenLeader,
  BuildingCoordinator,
  ChurchCoordinator,
  UsherHN,
  NigP,
  RecordsH,
  TechH,
  FinancialS,
  ChildrenH,
  PapaP,
  Asst2,
  MamaN,
  BennoW
} from "../../images";

const departments = [

  {
    name: "Prayer Team",
    description:
      "Intercedes on behalf of the church and its members. They lead weekly prayer meetings and spiritual retreats.",
    image: PapaP,
    leader: "Rev Austin Nwaka",
  },
  {
    name: "Follow-up and Counselling Team",
    description:
      "Follows up with first-time visitors, new believers, and members who need care or support.",
    image: MamaN,
    leader: "Prophetess Blessing Nwaka",
  },
  {
    name: "Sunday School Department",
    description:
      "Conducts Sunday School classes for all age groups, teaching biblical principles and fostering spiritual growth.",  
    image: Asst2,
    leader: "Pastor Michael Atane",
  },
  {
    name: "Mountain of Prayer Camp City ",
    description:
      "The head pastor oversees all church activities in Nigeria, providing spiritual leadership, teaching, and guidance to the congregation.",
    image: NigP,
    leader: "Pastor Egwuonwu Chukwunulu Christopher",
  },
  {
    name: "Men Ministry",
    description:
      "Trains and nurtures children in the way of the Lord through engaging Bible stories, worship, and activities.",
    image: MenLeader,
    leader: "Deacon Best Tabe Upan",
  },
  {
    name: "Records & Documentation (Church Secretary)",
    description:
      "Responsible for maintaining church records, including membership, attendance, and event documentation. They ensure that all records are accurate and up-to-date.",
    image: RecordsH,
    leader: "Pastor Mrs Betty Atane",
  },
  {
      name: "Protocol & Security",
      description:
        "Ensures safety and smooth coordination of special guests and events. Also responsible for order within the premises.",
      image: BennoW,
      leader: "ELder Benno Witting",
    },
  {
    name: "Financial Department",
    description:
      "Manages the church's finances, including budgeting, accounting, and financial reporting. They ensure transparency and accountability in all financial matters.",
    image: FinancialS,
    leader: "Deaconess Clementina Ali",
  },
  {
    name: "Music Director",
    description:
      "The choir leads the congregation in worship through music and prepares the atmosphere for God’s presence. They rehearse weekly and minister during services and special programs.",
    image: ChoirMaster,
    leader: "Deacon Manly Ali",
  },
  {
    name: "Choir Mistress",
    description:
      "The choir leads the congregation in worship through music and prepares the atmosphere for God’s presence. They rehearse weekly and minister during services and special programs.",
    image: ChoirMistress,
    leader: "Deaconess Jennifer Best Upan Tabe",
  },
  {
    name: "Ushering",
    description:
      "The ushering department ensures order during services by welcoming guests, guiding members to their seats, and assisting with offerings and other logistical needs.",
    image: UsherHN,
    leader: "Mrs Jennifer Maduka",
  },
  {
    name: "Media, Sound & Technical",
    description:
      "Handles sound, projection, live streaming, and media coverage of services. They ensure that all audio-visual needs are met.",
    image: TechH,
    leader: "Brother Joseph Michael",
  },
  {
    name: "Media & Technical Support",
    description:
      "Handles sound, projection, live streaming, and media coverage of services. They ensure that all audio-visual needs are met.",
    image: MediaHead,
    leader: "Sister Serena Nwaka",
  },
  {
    name: "Church Coordination",
    description:
      "Coordinates church activities, events, and logistics. They ensure that all departments work together effectively.",
    image: ChurchCoordinator,
    leader: "Deacon Charles Maduka",
  },
  {
    name: "Building Committee",
    description:
      "Oversees the maintenance and development of church properties. They ensure that the church facilities are safe and conducive for worship.",
    image: BuildingCoordinator,
    leader: "Deacon Effiong Effiye",
  },
  {
    name: "Children Ministry",
    description:
      "Trains and nurtures children in the way of the Lord through engaging Bible stories, worship, and activities.",
    image: ChildrenH,
    leader: "Sister Michelle Nwaka",
  },
  // {
  //   name: "Sanitation",
  //   description:
  //     "This department maintains the cleanliness of the church environment before, during, and after services and events.",
  //   image: "/images/departments/sanitation.jpg",
  //   leader: "Sister Blessing Eze",
  // },
  // {
  //   name: "Evangelism",
  //   description:
  //     "Organizes outreach events, soul-winning campaigns, and community evangelism.",
  //   image: "/images/departments/evangelism.jpg",
  //   leader: "Sister Faith Amadi",
  // },
  // {
  //   name: "Welfare",
  //   description:
  //     "Provides support and assistance to members in need including food, clothing, and shelter aid.",
  //   image: "/images/departments/welfare.jpg",
  //   leader: "Brother Johnson Obi",
  // },
  // 
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
              className="w-full h-[40rem] object-cover rounded-md mb-4"
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
