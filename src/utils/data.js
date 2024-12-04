import rem from "../../src/assets/rem.webp"
import Tyrone from "../../src/assets/Tyrone.jpg"
import edp from "../../src/assets/edp.jpg"
import megumin from "../../src/assets/Megumin.webp"
import hina from "../../src/assets/hina.webp"
import horikita from "../../src/assets/horikita.jpeg"

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150",
  name: "April Bords Mahuyop Nerosa",
  tagline: `Predestined to defeat the malevolent forces that taint this realm`,
  jobTitle: "Animeologist",
  location: "Davao City Abreeza",
  yearsOfExperience: 999,
  skills: [
    "Python",
    "Django",
    "TypeScript",
    "Vue.js",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "AWS",
    "MongoDB",
    "Redis",
    "SQL",
    "CI/CD",
  ],
  email: "bordsNerosa@gmail.com",
  phone: "415-789-1234",
  website: "https://www.linkedin.com/in/kairodriguez/",
};

export const SKILLS = [
  {
    id: "01",
    image: Tyrone,
    title: "Tyrone",
    comment: `My first love!`,
  },
  {
    id: "02",
    image: edp,
    title: "EDP44",
    comment: `Best cupcake maker`,
  },
  {
    id: "03",
    image: megumin,
    title: "Megumin",
    comment: `Containerization is crucial for modern software deployment. I've implemented Docker solutions that streamline development workflows and ensure consistent environments.`,
  },
  {
    id: "04",
    image: rem,
    title: "Rem",
    comment: `Amazon Web Services is my go-to cloud platform. I've designed and deployed scalable cloud architectures, leveraging services like EC2, S3, and Lambda.`,
  },
  {
    id: "05",
    image: horikita,
    title: "Horikita",
    comment: `GraphQL has revolutionized how I approach API design. I've implemented efficient, flexible data querying solutions that improve overall system performance.`,
  },
  {
    id: "06",
    image: "https://via.placeholder.com/300",
    title: "CI/CD",
    comment: `Continuous Integration and Continuous Deployment are critical for modern software development. I've set up robust pipelines that automate testing and deployment processes.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "TechInnovate Solutions",
    position: "Senior Software Engineer",
    duration: "2021 - Present",
    description: "Leading a team of developers in creating enterprise-level web applications. Responsible for architecture design, code reviews, and implementing cutting-edge technologies."
  },
  {
    id: "02",
    company: "DataStream Analytics",
    position: "Backend Developer",
    duration: "2019 - 2021",
    description: "Developed scalable backend services using Python and Django. Implemented complex data processing pipelines and optimized database performance for large-scale data applications."
  },
  {
    id: "03",
    company: "StartUp Incubator",
    position: "Full Stack Developer",
    duration: "2017 - 2019",
    description: "Worked on multiple startup projects, creating MVPs and helping early-stage companies bring their technological visions to life. Gained extensive experience in rapid prototyping and agile development."
  },
];

export const ABOUT_ME_DATA = {
  introduction: "Hello! I'm Kai Rodriguez, a versatile software engineer with a passion for solving complex technological challenges and creating innovative digital solutions.",
  background: "With a Master's degree in Computer Science from Stanford University, I've developed a strong foundation in software engineering principles and emerging technologies.",
  skills: "My technical expertise spans full-stack development, cloud computing, and advanced programming paradigms. I specialize in creating scalable, efficient, and user-friendly software solutions.",
  projects: "Notable projects include a machine learning-powered recommendation system, a real-time collaboration platform, and a distributed data processing framework that improved system efficiency by 40%.",
  interests: "Beyond coding, I'm an avid rock climber, amateur photographer, and enjoy exploring the intersection of technology and sustainable design. I'm also passionate about mentoring young developers.",
  careerGoals: "My objective is to continue pushing the boundaries of software engineering, contribute to meaningful technological innovations, and make a positive impact through technology.",

  stats: {
    yearsOfExperience: '6+',
    numberOfProjects: 15,
    certificationsEarned: 6,
  },
};