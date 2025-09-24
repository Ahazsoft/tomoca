// app/events/data.js
'use client';

import featured_1 from '@assets/img/events/EdgarDegas.jpg';
import featured_2 from '@assets/img/events/CoffeeforCare.jpg';
import featured_3 from '@assets/img/events/GizebeTomoca.jpg';
import featured_4 from '@assets/img/events/SteamandStitch.jpg';

export const eventData = [
  {
    id: 'gizebetomoca',
    title: 'ጊዜ በቶሞካ',
    description: `Nestled within the historic Legehar Train Station, ጊዜ በቶሞካ is an experience like no other...`,
    image: featured_3,
    buttonText: 'RSVP',
    date: 'Thursday, October 10, 2025',
    time: '5:00 PM to 7:00 PM',
    location: 'Addis Ababa, 4 Kilo, Next to Abrhot Library',
  },
  {
    id: 'piassa-stories',
    title: 'Piassa Stories',
    description: `Jazz-filled nights and heritage tales from Addis’ iconic Piassa district.`,
    image: featured_2,
    buttonText: 'RSVP',
    date: 'Friday, October 17, 2025',
    time: '6:30 PM to 9:00 PM',
    location: 'Tomoca Piassa Branch',
  },
  {
    id: 'coffee-culture',
    title: 'Coffee & Culture',
    description: `Tomoca’s finest brews paired with poetry and music. A warm blend of aroma and artistry.`,
    image: featured_1,
    buttonText: 'RSVP',
    date: 'Saturday, October 25, 2025',
    time: '4:00 PM to 6:00 PM',
    location: 'Tomoca, Kazanchis Branch',
  },
  {
    id: 'steam-stitch',
    title: 'Steam & Stitch',
    description: `Where espresso meets art—explore Ethiopia’s young creative minds in motion.`,
    image: featured_4,
    buttonText: 'RSVP',
    date: 'Wednesday, November 5, 2025',
    time: '5:00 PM to 8:00 PM',
    location: 'Addis Ababa, Design Week Tent',
  },
];
