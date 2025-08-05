import Image from "next/image";

const UiuxProjects = [
  {
    title: "GreenCart – Grocery E-commerce Website",
    image: "/images/UIUX/E-com-Design-Post.png",
    description:
      "A complete e-commerce grocery website design that covers everything from product categories, best sellers, product details, cart management, and checkout. It includes user authentication, detailed product pages with related products, and a clean, accessible interface.",
    link: "https://www.figma.com/proto/i65qj5i2imycfqonfA0Z08/E-commerce-website-design-full?node-id=51-2&t=4zC2O47qnjPYUWyz-1",
    type: "Web Application, UI/UX Design",
  },
  {
    title: "FoodJet – Food Delivery App",
    image: "/images/UIUX/Food-Design-Post.png",
    description:
      "A modern, intuitive mobile food delivery app designed to enhance user experience with seamless onboarding, login/signup, restaurant listings, order tracking, and favorites management. Clean UI with bold CTAs and consistent component styling across screens",
    link: "https://www.figma.com/proto/SWKTSHUhECYvi5hG5kM462/Food-Delivery-Mobile-App?node-id=22-172&t=8RaKzv9djRO1ooov-1",
    type: "Mobile App, UI/UX Design",
  },
  {
    title: "StepUp – Shoe Shopping App",
    image: "/images/UIUX/Shoe-App-Project.png",
    description:
      "A sleek and stylish mobile app focused on shoe shopping. Features include onboarding, category filters, product variants, cart, checkout, and confirmation screens. The design emphasizes visual hierarchy and smooth user flow from browsing to purchase.",
    link: "https://www.figma.com/proto/huXwZOgC5caySvkSBGH4ko/Shoe-Shop-Application?node-id=1-3&t=db542DoKVKBZNr1I-1",
    type: "Mobile App, UI/UX Design",
  },
  {
    title: "GoRide – Ride Booking App (Uber Clone)",
    image: "/images/UIUX/Uber-App-Design.png",
    description:
      "A complete ride-booking app with location-based UI elements. Features include user onboarding, map integration, ride search, payment options, ride tracking, and rating system. The user interface emphasizes ease of use, real-time updates, and rider safety information.",
    link: "https://www.figma.com/proto/1TcMkGWBKgCa16M5XqA1Q9/Ride-shring-app--1-?node-id=46-678&t=KhwAtBgHwY6rsglx-1",
    type: "Mobile App, UI/UX Design",
  },
];

export default function UiuxWorkSection() {
  return (
    <section id="uiux" className="py-16 px-6 scroll-mt-28">
      <h2 className="text-4xl font-bold text-center mb-12">
        UI/UX
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          {" "}
          Work
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        {UiuxProjects.map((project, idx) => {
          const bgColorClass =
            idx === 0
              ? "bg-red-200"
              : idx === 1
              ? "bg-rose-300"
              : idx === 2
              ? "bg-orange-300"
              : "bg-sky-100";

          return (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-xl overflow-hidden p-6 transition-transform hover:scale-[1.02] border border-white/10 shadow-lg ${bgColorClass}`}
            >
              <div className="h-[400px] w-full relative mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{project.type}</p>
              <p className="text-gray-800 text-sm">{project.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
