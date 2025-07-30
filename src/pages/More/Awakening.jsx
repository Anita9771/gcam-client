import React from "react";
import { Link } from "react-router-dom";

const Awakening = () => {
  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-6 pb-16">
      <section className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Innsbruck Spiritual Awakening</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Vision Statement</h2>
          <p>
            To ignite a city-wide movement of transformed lives through the power of the Gospel,
            uniting thousands in worship and hope.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Mission Statement</h2>
          <p>
            To mobilize 1,000-5,000 people across Innsbruck, Tyrol, for a catalytic gathering of worship,
            prayer, and Gospel proclamation—inviting all to encounter Jesus Christ.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Key Elements & Why They Work</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gospel programs empowering a city-wide movement</li>
            <li>“Ignite a city-wide movement” implies a lasting impact beyond the event</li>
            <li>“Transformed lives” focuses on discipleship and spiritual renewal</li>
            <li>“Inviting thousands” strengthens and encourages believers in the community</li>
            <li>“Worship & hope” communicates the uplifting and healing result of the Gospel</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Call to Action</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Join our prayer team</li>
            <li>Join planners board conferences</li>
            <li>Register to volunteer</li>
            <li>Join our praise and worship team</li>
            <li>Invite 5 friends</li>
            <li> <Link to="/giving/payment" className="">Donate here</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Empower Volunteers</h2>
          <p>
            Frame volunteer roles as directly contributing to achieving the above mission and vision.
            These statements provide a clear, compelling “Why” (vision) and “What/Who” (mission)
            that will resonate with volunteers, partner churches, and attendees.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Goals: Great Commission Focused</h2>
          <p>
            “Fulfill Christ's command”: make disciples of all nations, baptizing and teaching them
            in Jesus’ name (Matthew 28:19–20).
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Mobilize 1,000–5,000 people</li>
            <li>Target: Innsbruck, Tyrol, Austria, and Europe</li>
            <li>Catalytic gatherings: Spark a spiritual awakening</li>
            <li>
              Worship, prayer, and Gospel: Empowerment, healing, deliverance & salvation through Christ
            </li>
            <li>
              Evangelical outreach via seminars, training, and fellowship to invite all to Jesus Christ
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Tips for Using These Statements</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>“1,000–5,000 people” aligns with the theme: <strong>Light up Innsbruck for Jesus</strong></li>
            <li>
              Use mobilization tools: Flyers, volunteer forms, T-shirts, websites, social media,
              radio, WhatsApp groups, etc.
            </li>
            <li>
              <strong>Light up Innsbruck for Jesus</strong> is powered by Glorious Christ Ambassadors Ministries International Austria,
              located at Kaplanstraße 2. Top 1, 6063, Neu-Rum. Contact: 069911084419.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">How We Will Achieve This Mission</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Through dedicated prayer teams</li>
            <li>Church partnerships</li>
            <li>Outreach training and discipleship</li>
            <li>Seminars and fellowship gatherings</li>
            <li>Event logistics and operations</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">
            Want to be part of this move?
          </p>   
          <div className="mt-4">
          <Link to="/join-us/register/program-attendance" className="bg-[#B0A8B9] text-[#800020] font-semibold mt-16 px-4 py-2 rounded-md hover:bg-[#a296aa] transition">Register Now</Link>
    
          </div>
        </div>
      </section>
   </div>
  );
};

export default Awakening;
