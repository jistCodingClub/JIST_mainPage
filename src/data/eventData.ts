// data/eventData.ts
export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Retro Coding Jam",
    date: "20 Aug 2025",
    description: "A funky night of coding, pizza & synthwave vibes!",
    location: "Room no. 7",
  },
  {
    id: 2,
    title: "Hack & Chill",
    date: "05 Sep 2025",
    description: "Build fun projects, retro games & creative hacks.",
    location: "Tech Hub Arena",
  },
  
];
