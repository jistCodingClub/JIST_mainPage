import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Leading the coding club with a focus on innovation, mentorship, and building a vibrant community of tech enthusiasts.",
      name: "Kankan Ray",
      designation: "Lead",
      src: "/image/lead.jpg",
    },
    {
      quote:
      " Supporting leadership and collaboration within the coding club, while fostering learning and driving technical initiatives.",
      name: "Ezaz Ahmed Khan",
      designation: "Co Lead",
      src: "/image/colead.jpg",
    },
    {
      quote:
      "Overseeing coding club projects from planning to execution, ensuring smooth collaboration and timely delivery.",
      name: "Saptarshi borkataky",
      designation: "Project Coordinator",
      src: "/image/sapt.jpg",
    },
    {
      quote:
      "Managing and developing the coding club’s digital presence through intuitive, responsive, and engaging web experiences.",
      name: "Jyotishman Pathak",
      designation: "Web Lead",
      src: "/image/weblead.jpg",
    },
    {
      quote:
      "Leading the design and development of innovative mobile solutions that enhance the coding club’s impact and accessibility.",
      name: "Ezaz Ahmed Khan",
      designation: "App Lead",
      src: "/image/colead.jpg",
    },
    {
      quote:
      "Driving AI and machine learning initiatives within the coding club, from model development to real-world applications.",
      name: "Sourav Dutta",
      designation: "AI/Ml Lead",
      src: "/image/mllead.jpg",
    },
    {
      quote:
      "Creating impactful posters and visual content that capture the spirit of the coding club and boost engagement.",
      name: "Hridayam Gogoi",
      designation: "Design Lead",
      src: "/image/design.jpg",
    },
    {
      quote:
      " Designing seamless and user-centric interfaces that enhance the functionality and appeal of the coding club’s digital products. Want to mention prototyping tools or user researc",
      name: "Kankan Ray",
      designation: "UI/UX Lead",
      src: "/image/lead.jpg",
    },
    {
      quote:
      "Curating visual content and aesthetics that amplify the coding club’s identity across platforms and events. Want to highlight photogra",
      name: "Isha Mahanta",
      designation: "Visual Lead",
      src: "/image/visual.jpg",
    },
    {
      quote:
      " Managing the coding club’s finances with transparency and efficiency, ensuring smooth budgeting for events and initiatives.",
      name: "Abhinav Kaman",
      designation: "Treasurer",
      src: "/image/kaman.jpg",
    },
    {
      quote:
      "Planning and executing engaging events that foster learning, collaboration, and community within the coding club.",
      name: "Abhisekh kumar Sharma",
      designation: "Event Lead",
      src: "/image/abhi.jpg",
    },
    {
      quote:
      "Driving the coding club’s online presence through creative content, timely updates, and community engagement across platforms.",
      name: "Chandreyi Kataki",
      designation: "Social Media Lead",
      src: "/image/social.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
