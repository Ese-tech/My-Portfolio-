
export const skillsRow1 = [
  { name: "HTML", icon: "/assets/icons/htmlicon.svg", color: "#F1662A" },
  { name: "CSS", icon: "/assets/icons/cssicon.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/assets/icons/javascripticon.svg", color: "#F7DF1E" },
  { name: "React", icon: "/assets/icons/reacticon.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "/assets/icons/nodejsicon.svg", color: "#339933" },
  { name: "Git", icon: "/assets/icons/Git-Icon-1788C.svg", color: "#F05032" },
  { name: "GitHub", icon: "/assets/icons/github-color.svg", color: "#181717" },
  { name: "SASS", icon: "/assets/icons/sassicon.svg", color: "#CC6699" },
];

export const skillsRow2 = [
  { name: "Responsive", icon: "/assets/image/responsive-design.png", color: "#38B2AC" },
  { name: "Terminal", icon: "/assets/icons/terminal-svgrepo-com.svg", color: "#000000" },
  { name: "Tailwind", icon: "/assets/icons/tailwindicon.svg", color: "#38B2AC" },
];

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: "public/assets/icons/htmlicon.svg",
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: "public/assets/icons/cssicon.svg",
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: "public/assets/icons/javascripticon.svg",
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: "public/assets/icons/typescripticon.svg",
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: "public/assets/icons/reacticon.svg",
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: "public/assets/icons/nodejsicon.svg",
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: "/assets/icons/tailwindicon.svg",
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: "public/assets/icons/sassicon.svg",
        color: "#CC6699",
      },
    ],
  },
] as const;

export const reposdata =[
 {
    name: "Color-Changer",
    description: "A simple color changer app",
    image: "",
    technologiesTags: ["Typescript","Tailwind CSS","Bun"],
    links: {
        githubUrl: "https://github.com/Ese-tech/Color-Changer",
        vercelUrl: "https://color-changer-three-blue.vercel.app/"
    }
 },
 {
    name: "Todo-App",
    description: "A simple todo app",
    image: "",
    technologiesTags: ["Typescript","Tailwind CSS","Bun"],
    links: {
        githubUrl: "https://github.com/Ese-tech/Todo-app",
        vercelUrl: "https://todo-app-sable-tau.vercel.app/"
    }
 }

]