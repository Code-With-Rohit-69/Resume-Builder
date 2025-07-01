import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.png";
import TEMPLATE_THREE_IMG from "../assets/template-three.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#C8D5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#A8D2F4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "https://example.com/profile.jpg",
    fullName: "John Doe",
    designation: "Software Engineer",
    summary:
      "A motivated developer with experience in building scalable web applications using modern technologies.",
  },
  contactInfo: {
    email: "johndoe@example.com",
    phone: "9876543210",
    location: "New York, USA",
    linkdin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://johndoe.dev",
  },
  workExperience: [
    {
      company: "Tech Solutions Inc.",
      role: "Frontend Developer",
      startDate: "2021-01",
      endDate: "2023-05",
      description:
        "Built reusable UI components using React.js and improved performance by 30%.",
    },
    {
      company: "Webify Corp.",
      role: "UI Engineer",
      startDate: "2019-05",
      endDate: "2020-12",
      description:
        "Worked closely with UX teams to develop responsive interfaces using HTML, CSS, and JS.",
    },
    {
      company: "Coding Dev",
      role: "Full Stack Developer",
      startDate: "2019-05",
      endDate: "2020-12",
      description:
        "Worked closely with UX teams to develop responsive interfaces using HTML, CSS, and JS.",
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      institution: "State University",
      startDate: "2017-08",
      endDate: "2020-05",
    },
    {
      degree: "High School Diploma",
      institution: "City High School",
      startDate: "2015-06",
      endDate: "2017-04",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      progress: 90,
    },
    {
      name: "React",
      progress: 85,
    },
    {
      name: "Node.js",
      progress: 75,
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio to showcase projects and contact information.",
      github: "https://github.com/johndoe/portfolio",
      liveDemo: "https://johndoe.dev",
    },
    {
      title: "Task Manager App",
      description:
        "A full-stack task management app with authentication and CRUD operations.",
      github: "https://github.com/johndoe/task-manager",
      liveDemo: "https://tasks.example.com",
    },
  ],
  certifications: [
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera",
      year: "2021",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2020",
    },
  ],
  languages: [
    {
      name: "English",
      progress: 100,
    },
    {
      name: "Spanish",
      progress: 70,
    },
  ],
  interests: ["Reading", "Gaming", "Traveling"],
};
