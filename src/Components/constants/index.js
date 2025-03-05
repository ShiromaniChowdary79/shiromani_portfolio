import project1 from "../../assets/projects/project-1.png";
import project2 from "../../assets/projects/project-2.png";
import project3 from "../../assets/projects/project-3.png";
import project4 from "../../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hi there! I'm Shiromani, a Software Development Engineer with 1.8 years of experience in designing, developing, and deploying scalable web applications and microservices. I specialize in Java, Python, JavaScript (ES6+), TypeScript, React.js, Node.js, and AWS.

Throughout my career, I have developed modular microservices architectures, built high-performance RESTful APIs, and designed CI/CD pipelines to enhance software efficiency. My experience includes working on large-scale applications, improving front-end user engagement, and optimizing cloud infrastructure for better scalability and cost reduction.

I've contributed to projects like TOMS, an e-commerce platform with advanced filtering, cart tracking, and performance monitoring, as well as IDAA, an order entry system streamlining patient data management. My expertise spans front-end and back-end development, version control, and agile collaboration.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Development Engineer-1",
    company: "TECHSOFT SOLUTIONS",
    description: `Developed a modular microservices architecture for a large-scale application, enhancing scalability and maintainability, resulting 
in a 30% increase in development efficiency and seamless integration with existing systems.Engineered robust RESTful APIs, increasing system interoperability by 25% and reducing data retrieval times by 30%, using 
Node.js and Express frameworks to support high-performance applications.`,
    technologies: [
      "React.js","React Hooks","JavaScript","Java","NodeJS","ExpressJS","SQL","Python","AWS"
    ],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone",
    image: project1,
    description:
      "Developed a Netflix Clone using React.js, replicating the core features and user interface of the popular streaming platform. The project includes responsive design, user authentication, and the ability to browse and play movie trailers.",
    technologies: ["HTML", "CSS", "React", "Material UI"],
    githubLink: "https://shiromanichowdary79.github.io/Netflix-Clone/",
  },
  {
    title: "Restaurant Billing System with GST Calculation",
    image: project2,
    description:
      "Developed a Restaurant Billing System that accurately calculates GST on customer bills. The project includes features for itemized billing, automatic GST calculation based on current tax rates, and a user-friendly interface that ensures a seamless checkout experience.",
    technologies: ["HTML", "CSS", "React", "Material UI"],
    githubLink: "https://shiromanichowdary79.github.io/GST-Billling/",
  },
  {
    title: "Currency Converter",
    image: project3,
    description:
      "Developed a responsive Currency Converter application that allows users to seamlessly convert between multiple currencies in real-time. The app fetches the latest exchange rates from an API and features a clean, user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: " https://shiromanichowdary79.github.io/Currency-Converter/",
  },
  {
    title: "Ugadi Festival Project at IISER Pune",
    image: project4,
    description:
      "Collaborated with IISER Pune to design and develop a responsive website for their Ugadi festival. The project involved creating an engaging user interface that captured the essence of the festival while ensuring a seamless user experience.",
    technologies: ["HTML", "CSS", "React"],
    githubLink: "https://shiromanichowdary79.github.io/ugadi-project/",
  },
];


