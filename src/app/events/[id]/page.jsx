// app/events/[id]/page.jsx

import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import Footer from "@/layout/footers/footer";
import Image from "next/image";
import { notFound } from "next/navigation";

import featured_1 from '@assets/img/events/EdgarDegas.jpg';
import featured_2 from '@assets/img/events/CoffeeforCare.jpg';
import featured_3 from '@assets/img/events/GizebeTomoca.jpg';
import featured_4 from '@assets/img/events/SteamandStitch.jpg';

const allEvents = [
  {
    id: "gizebetomoca",
    title: "ጊዜ በቶሞካ",
    image: featured_3,
    description: `Nestled within the historic Legehar Train Station, ጊዜ በቶሞካ is an experience like no other...`,
    date: "Thursday, October 10, 2025",
    time: "5:00 PM to 7:00 PM",
    location: "Addis Ababa, 4 Kilo, Next to Abrhot Library",
    buttonText: "RSVP",
  },
  {
    id: "piassa-stories",
    title: "Coffee for Care",
    image: featured_2,
    description: `An evening that blends coffee, community, and compassion...`,
    date: "Saturday, November 2, 2025",
    time: "4:00 PM to 6:30 PM",
    location: "Tomoca HQ, Piassa, Addis Ababa",
    buttonText: "RSVP",
  },
  {
    id: "coffee-culture",
    title: "Degas & Beans",
    image: featured_1,
    description: `Immerse yourself in an evening of art and aroma as we honor Edgar Degas...`,
    date: "Sunday, December 15, 2025",
    time: "2:00 PM to 5:00 PM",
    location: "Alliance Française, Addis Ababa",
    buttonText: "Reserve",
  },
  {
    id: "steam-stitch",
    title: "Steam & Stitch",
    image: featured_4,
    description: `Creative stitching meets rich brews in this hands-on textile & coffee fusion workshop.`,
    date: "Friday, October 18, 2025",
    time: "3:00 PM to 6:00 PM",
    location: "Tomoca Workshop Studio, Bole",
    buttonText: "Sign Up",
  },
];

// Metadata
export async function generateMetadata(props) {
  const awaited = await props.params;
  const { id } = awaited;

  const event = allEvents.find(e => e.id === id);

  return {
    title: event ? `${event.title} | RSVP` : "Event Not Found",
  };
}

export default async function EventDetailsPage(props) {
  const awaited = await props.params;
  const { id } = awaited;

  const event = allEvents.find(e => e.id === id);

  if (!event) {
    return notFound();
  }

  return (
    <Wrapper>
      <HeaderThree />

      <section
        className="explore_shop__breadcrumb"
        style={{ backgroundColor: "#D57140", height: "60px" }}
      />

      <section className="event__section container">
        <div className="event__grid">
          <div className="event__img">
            <Image src={event.image} alt={event.title} />
          </div>

          <div className="event__info">
            <h1 className="event__title">{event.title}</h1>
            <h5 className="event__desc">{event.description}</h5>

            <ul className="event__details">
              <li><strong>Date:</strong> {event.date}</li>
              <li><strong>Time:</strong> {event.time}</li>
              <li><strong>Location:</strong> {event.location}</li>
            </ul>

            <div className="event__form">
              <h3>Reserve Your Spot</h3>
              <form>
                <div className="event__form__grid">
                  <input type="text" placeholder="First Name *" required name="first_name" />
                  <input type="text" placeholder="Last Name *" required name="last_name" />
                </div>
                <div className="event__form__grid">
                  <input type="email" placeholder="Email *" required name="email" />
                  <input type="tel" placeholder="Phone Number" name="phone" />
                </div>
                <input
                  type="number"
                  placeholder="How many people are you bringing?"
                  name="plus_one_count"
                />
                <button type="submit" className="btn__rsvp">
                  {event.buttonText}
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
