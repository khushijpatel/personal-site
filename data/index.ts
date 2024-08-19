export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Inspirational Quotes", link: "#quotes" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Currently looking for SWE Full-Time Roles starting in Summer 2025 and Internship Now-Jun 2025  ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adapt, Collaborate, Flexible, Be Open",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-40",
    imgClassName: "",
    titleClassName: "justify-start z-40",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Exploring, Learning, Growing ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Finance Tracker",
    des: "Developed an interactive full-stack finance tracker web application with HTML, CSS, JavaScript, React, Node.js, MongoDB.",
    img: "/p1.svg",
    iconLists: ["/re.svg"],
    link: "https://github.com/acmucsd/hackschool-fa22",
  },
  {
    id: 2,
    title: "HackRacer",
    des: "A fun typing game full-stack web app using HTML, CSS, JavaScript, React, Node.js, MongoDB, and Next.js",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg"],
    link: "https://hackschool-fa23.vercel.app/",
  },
];

export const quotes = [
  {
    quote: "Always make a total effort, even when the odds are against you.",
    name: "Arnold Palmer",
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    name: "H. Jackson Brown, Jr.",
  },
  {
    quote: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt",
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    name: "Maya Angelou",
  },
  {
    quote:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    name: "Buddha",
  },
  {
    quote: "Intelligence is the ability to adapt to change.",
    name: "Stephen Hawking",
  },
  {
    quote: "We are all now connected by the Internet, like neurons in a giant brain.",
    name: "Stephen Hawking",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    dates: "June 2024 - August 2024",
    desc: "Lead upgrades to COTS packages from Angular 9 to Angular 17. Research node packages and dependencies to port over libraries to upgrade. Resolve dependency issues and compiler errors",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    dates: "June 2023 - August 2023",
    desc: "Developed algorithm for update functionality, user accessibilities, testing, icon changes and more in Java, C++ using Linux and Windows VMs for 4 applications. Implemented frontend changes to plot views in application and retrieved classification level for the user from Oracle Database for plot title. Update scripts for the development environments in the VMs",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    dates: "June 2022 - September 2022",
    desc: "Redesign and implement user interfaces on applications in Java used for telemetry, control, and cryptographic keys planning using JBoss, Atlassian Suite, Linux and Windows VMs to provide secure satellite communication. Address 120+ security vulnerabilities from Fortify findings to secure program. Performed and fixed 50+ critical and major code quality bugs and maintenance issues reported on SonarQube",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Instructional Assistant",
    dates: "September 2023 - June 2024",
    desc: "CSE 190: Host weekly tutor hours to help 50 students work on projects in the open source code IdleLib, using LLMs like Github CoPilot, and answer conceptual or technical questions related to course content. Create grading rubrics and grade students’ project submissions on GitHub in a PR, providing critical feedback and reviewing changes similar to an industry code review setting. CSE 11: Host weekly tutor hours to help 600+ students debug Java code and answer conceptual questions, grade exams, worksheets and programming assignments",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Student Researcher",
    dates: "September 2022 - June 2023",
    desc: "Conducting research in computer vision for indoor scenes focused on material, geometry, and lighting under advisement of Professor Manmohan Chandraker, Yu-Ying Yeh, and Rui Zhu at UC San Diego. Improving existing model for an indoor scene inverse rendering framework, PhotoScene, for a higher-quality geometric reconstruction on a given indoor scene from SUN-RGBD dataset by adapting from InstPIFu. Developed pre and post image processing scripts using Python and PyTorch while using Kubernetes and Docker for remote access to cluster resources on a Linux development environment",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 6,
    title: "Technical Event Director",
    dates: "September 2021 - August 2023",
    desc: "Designed and hosted 20+ workshops on various topics in software engineering and web development using technologies and languages such as introducing Git, HTML, CSS, JavaScript, React.js, Python, Agile, Clean Coding, and more. Developed an interactive full-stack finance tracker web application with HTML, CSS, JavaScript, React.js, Node.js, MongoDB reaching 3,000+ students. Mentored 4 projects teams of 6 developers to develop a full-stack web application using the MERN stack in 10 weeks",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/khushijpatel",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://linkedin.com/in/pateljkhushi",
  },
];