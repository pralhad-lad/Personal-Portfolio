import Image from "next/image";

const projects = [
  {
    title: "Netflix Clone",
    image: "/images/netflix.png",
    description:
      "Netflix Clone is a fully responsive movie streaming web app built with React, HTML, CSS, JavaScript, and Firebase. It replicates core Netflix functionality including login, browsing movies by genre, viewing trailers, and personalized suggestions.",
    bullets: [
      "Built using React, HTML, CSS, JavaScript, and Firebase.",
      "Users can log in or sign out securely with Firebase Authentication.",
      "Movies are categorized into Trending, Action, Top Rated, Comedy, etc.",
      "On selecting a movie, trailer plays via YouTube embed.",
      "Shows similar movie recommendations based on selected genre.",
      "Fully responsive UI with custom styling mimicking Netflix.",
    ],
    github: "https://github.com/pralhad-lad/Netflix-Clone.git",
    demo: "netflix-clone-zeta-one-36.vercel.app",
  },
  {
    title: "Grocery App",
    image: "/images/grocerry.png",
    description:
      "Grocery App is a user-friendly e-commerce platform where users can browse groceries by category, view product details, and manage their shopping cart. It also includes a seller dashboard for inventory management and stock tracking.",
    bullets: [
      "Created using HTML, CSS, JavaScript, React, and Tailwind CSS.",
      "Displays 30+ grocery items grouped by categories like Vegetables, Dairy, etc.",
      "Users can view detailed product pages and add items to a cart.",
      "Cart supports add/remove functionality with automatic price calculation.",
      "Includes address form for users to input delivery details.",
      "Seller Dashboard enables product creation and stock status management.",
      "Fully responsive design suitable for all screen sizes.",
    ],
    github: "https://github.com/pralhad-lad/Grocerry-App.git",
    demo: "https://github.com",
  },
  {
    title: "News App",
    image: "/images/news.png",
    description:
      "News App delivers real-time news updates by fetching data from a public news API. Users can read articles by categories such as Top Headlines, Tech, and Business. Each article includes a summary and a link to the full content.",
    bullets: [
      "Developed using React, Tailwind CSS, HTML, CSS, and JavaScript.",
      "Fetches live news using public APIs and organizes them by category.",
      "Articles show title, image, summary, and a 'Read More' link.",
      "Includes categories like Business, Technology, Sports, etc.",
      "Works seamlessly across mobile, tablet, and desktop.",
    ],
    github: "https://github.com/pralhad-lad/News-App.git",
    demo: "",
  },
  {
    title: "Blog App",
    image: "/images/blog.png",
    description: "A full-stack blogging platform with an integrated admin panel for content management, user engagement, and dynamic blog display. Designed for SEO optimization, responsive design, and secure operations with a smooth reading and publishing experience.",
    bullets: [
      "Admin Panel for Content Management – Add, edit, and manage blogs with images, titles, descriptions, and category selection; supports <p>, <h1>, <h2>, <h3> tags for rich formatting.",
      "Dynamic Blog Pages – Displays blog title, featured image, author photo, author name, and complete blog content with responsive layout.",
      "Email Subscription Management – Admin can view and manage the email subscription list to engage readers directly.",
      "Full-Stack Implementation – Built with Next.js, Node.js, Express.js, and MongoDB; includes secure authentication, optimized images, and SEO-friendly rendering."
    ],
    github: "https://github.com/pralhad-lad/Blog-App.git",
    demo: "",
  },
  {
    title: "CarRental App",
    image: "/images/car.png",
    description: "The Car Rental System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables users to rent cars and manage their listings from a personalized dashboard. Once logged in, users can view a detailed dashboard displaying key metrics such as total cars, total bookings, pending and confirmed bookings, recent booking data, and monthly revenue.",
    bullets: [
      "Interactive User Dashboard – Displays total cars, total bookings, pending and confirmed bookings, recent booking history, and monthly revenue insights in clean, informative boxes.",
      "Car Management Module – Allows users to add new cars with brand, model, year, daily price, fuel type, description, and image; supports edit and delete operations for uploaded cars.",
      "Booking Management – Users can view all booking requests and update their status from Pending to Confirmed, ensuring complete control over rental operations.",
      "Dynamic Data Visualization – Real-time dashboard updates using MongoDB data for bookings, cars, and earnings overview.",
      "Role-Based Access – Secure login system ensures only authenticated users can post cars, view dashboards, or manage bookings.",
      "Full-Stack Integration – Built using React.js, Node.js, Express.js, and MongoDB with responsive Tailwind CSS UI and protected RESTful APIs."
    ],
      github: "https://github.com/pralhad-lad/Blog-App.git",
    demo: "",
  },
   {
  title: "Imagify – AI Image Generator",
  image: "/images/imagify.png",
  description:
    "Imagify is a full-stack AI image generation platform that allows users to create high-quality images based on text prompts. Built using the MERN stack and integrated with AI APIs, it allows users to securely generate, download, and manage their AI-generated images. Users can access their prompt history, manage credits, and explore responsive UI components for a smooth creative workflow.",
  bullets: [
    "AI-Powered Image Generation – Users generate stunning images by entering text prompts, powered by AI APIs.",
    "User Authentication – Secure login system enabling only registered users to generate images and manage profiles.",
    "Credit-Based System – Every user gets credits; generating an image reduces credit count, with a Buy Credits button to purchase more.",
    "Download Image Support – Users can directly download generated images to their device.",
    "Responsive UI – Fully responsive interface with modern components ensuring smooth usage on any device.",
    "Backend APIs – RESTful server handles prompt generation requests, authentication, credit deductions, and user data.",
    "Modern Tech Stack – Built using React.js, Node.js, Express.js, MongoDB with Tailwind CSS for elegant UI."
  ],

  github: "https://github.com/pralhad-lad/Text-to-Image.git",
  demo: "",
}

];

export default function Projects() {
  return (
    <section className=" text-white py-16 px-6 scroll-mt-28" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Proj
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">ects</span>
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-teal-400">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                {project.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-4 py-2 rounded text-sm"
                >
                  Get Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
