import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import Footer from "@/layout/footers/footer";
import Link from "next/link";
import Image from "next/image";

import featured_1 from '@assets/img/events/EdgarDegas.jpg';
import featured_2 from '@assets/img/events/CoffeeforCare.jpg';
import featured_3 from '@assets/img/events/GizebeTomoca.jpg';
import featured_4 from '@assets/img/events/SteamandStitch.jpg';
import HeaderFive from "@/layout/headers/header-5";

const events = [
  {
    id: 'coffee-culture',
    title: 'Coffee Culture',
    description: 'A cultural journey at Legehar Train Station with curated music, history, and the finest Tomoca coffee.',
    image: featured_1,
    
  },
  {
    id: 'piassa-stories',
    title: 'Piassa Stories',
    description: 'Jazz-filled nights and heritage tales from Addis’ iconic Piassa district.',
    image: featured_2,
    
  },
  {
    id: 'gizebetomoca',
    title: 'Coffee & Culture',
    description: 'Tomoca’s finest brews paired with poetry and music. A warm blend of aroma and artistry.',
    image: featured_3,
    
  },
  {
    id: 'steam-stitch',
    title: 'Steam & Stitch',
    description: 'Where espresso meets art—explore Ethiopia’s young creative minds in motion.',
    image: featured_4,
    
  },
];


export const metadata = {
  title: "Events | Tomoca",
  description: "Explore upcoming Tomoca events and RSVP your spot.",
};

export default function EventsPage() {
  return (
    <Wrapper>
      <HeaderFive />

      <section
        className="events-listing-page"
        style={{ padding: "60px 0", backgroundColor: "#fefefe" }}
      >
        <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" , marginTop: "120px" }}>Upcoming Events</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "65%",
                    backgroundColor: "#ccc",
                  }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                  />
                </div>
                <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                  <h3 style={{ marginBottom: "10px", color: "#C66335" }}>{event.title}</h3>
                  <p style={{ color: "#333", lineHeight: 1.6 }}>{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer style_3={true} />
    </Wrapper>
  );
}
