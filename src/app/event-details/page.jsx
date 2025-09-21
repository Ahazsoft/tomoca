import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import HeaderThree from "@/layout/headers/header-3";

import Footer from "@/layout/footers/footer";
import Image from "next/image";
import Link from "next/link";
import featured_4 from "@assets/img/product/featured/GizeBetomoca.jpg"; // replace with actual event image

export const metadata = {
  title: "Event Details | RSVP",
};


const events = {
  id: 1,
  title: 'ጊዜ በቶሞካ',
  description: `Nestled within the historic Legehar Train Station, ጊዜ በቶሞካ is an experience like no other. The sheer weight of history and culture greets you the moment you walk through the door and it only gets better from there. With curated musical experiences, a cup of Tomoca Coffee in hand, like-minded patrons, and unique themes at every event, ጊዜ በቶሞካ is designed to elevate your Tomoca experience to new heights.`,
  image: featured_4,
  buttonText: 'RSVP',
  date: 'Thursday, October 10, 2025',
  time: '5:00 PM to 7:00 PM',
  location: 'Addis Ababa, 4 Kilo, Next to Abrhot Library',
};

export default function EventPage() {
  return (
    <Wrapper>
      <HeaderThree />

      {/* Breadcrumb */}
      <section className="explore_shop__breadcrumb"
      style={{ backgroundColor: '#D57140' }} 
      >
        {/* <div className="container">
          <h2 className="explore_shop__breadcrumb__title">{events.title}</h2>
          <ul className="explore_shop__breadcrumb__list">
            <span><Link href="/">Home</Link> •</span>
            <span>Events</span>
          </ul>
        </div> */}
      </section>

      {/* Event Section */}
      <section className="event__section container">
        <div className="event__grid">
          {/* Left Side: Image */}
          <div className="event__img">
            <Image src={events.image} alt="Event" />
          </div>

          {/* Right Side: Info + Form */}
          <div className="event__info">
            <h1 className="event__title">{events.title}</h1>
            <h5 className="event__desc">
              {events.description}
            </h5>

            <ul className="event__details">
              <li>
                <strong>Date:</strong> {events.date}
              </li>
              <li>
                <strong>Time:</strong> {events.time}
              </li>
              <li>
                <strong>Location:</strong> 4Kilo Abrhot
              </li>
            </ul>

            {/* RSVP Form */}
            <div className="event__form">
              <h3>Reserve Your Spot</h3>
              <form>
                <div className="event__form__grid">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    name="first_name"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    name="last_name"
                  />
                </div>
                <div className="event__form__grid">
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    name="email"
                  />
                  <input type="tel" placeholder="Phone Number" name="phone" />
                </div>
                <input
                  type="number"
                  placeholder="How many people are you bringing?"
                  name="plus_one_count"
                />
                <button type="submit" className="btn__rsvp">
                  {events.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer primary_style={true} />
    </Wrapper>
  );
}
