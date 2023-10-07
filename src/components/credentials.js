import gallery_dnd from "../assets/gallery_DnD.webp";
import moviebox from "../assets/moviebox.webp";
import todo from "../assets/todo.webp";
import timer from "../assets/timer.webp";
import MapPin from "../assets/map-pin.svg";
import Briefcase from "../assets/briefcase.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Mail from "../assets/mail.svg";

export const education = [
  {
    id: 1,
    title: "Software Engineering",
    duration: "2023 - present",
    school: "AltSchool",
  },
  {
    id: 2,
    title: "FullStack Development",
    duration: "2022 - 2022",
    school: "ZurixI4G",
  },
  {
    id: 3,
    title: "Computer Science",
    duration: "2018 - 2022",
    school: "Coal City University",
  },
];

export const experience = [
  {
    id: 1,
    position: "Web Developer",
    duration: "2023",
    company: "Hausba",
  },
  {
    id: 2,
    position: "Web Developer/Tutor",
    duration: "2023",
    company: "Code Campus",
  },
  {
    id: 3,
    position: "FullStack Developer",
    duration: "2022",
    company: "Zuri",
  },
  {
    id: 4,
    position: "Web Developer",
    duration: "2022 - Present",
    company: "Freelance",
  },
];

export const project = [
  {
    id: 1,
    name: "Moviebox",
    src: moviebox,
    link: "https://hngx-201-moviebox.vercel.app/",
    description:
      "Moviebox is a movie review website where users can view movies and their details and also the ratings. ",
  },
  {
    id: 2,
    name: "Gallery DnD",
    src: gallery_dnd,
    link: "https://hngx-301-gallery-dnd.vercel.app/",
    description:
      "The Gallery DnD is a website that allows users to view images and their tags. Users can also drag and drop images to their preferred location.",
  },
  {
    id: 3,
    name: "Todo List",
    src: todo,
    link: "https://to-do-list-fawn-eight.vercel.app/",
    description:
      "A simple to do list app to manage your tasks. Stay organized and ensure that you don't forget important things you need to do.",
  },
  {
    id: 4,
    name: "Ignite Timer",
    src: timer,
    link: "https://ignite-timer-blue-rho.vercel.app/",
    description:
      "Pomodoro application for study and work. The user can set a custom timer that he wants to stay focused and check all his cycle history.",
  },
];

export const socials = [
  {
    id: 0,
    src: MapPin,
    test: "Nigeria",
  },
  // {
  //   id: 1,
  //   src: Briefcase,
  //   link: "https://www.hausba.com",
  //   text: "Hausba",
  // },
  {
    id: 2,
    src: Github,
    link: "https://www.github.com/codabytez",
    text: "codabytez",
  },
  {
    id: 3,
    src: Linkedin,
    link: "https://www.linkedin.com/in/codabytez/",
    text: "codabytez",
  },
  {
    id: 4,
    src: Twitter,
    link: "https://www.twitter.com/codabytez",
    text: "codabytez",
  },

  {
    id: 5,
    src: Mail,
    link: "mailto:chidiobinna0001@gmail.com",
    text: "chidiobinna0001@gmail.com",
  },
  // {
  //   id: 6,
  //   src: "https://www.instagram.com/chizzi01",
  //   link: "https://www.instagram.com/chiizi01",
  //   text: "chizzi01",
  // },
];

export const repoName = [
  "ToDo_List",
  "hngx-201.moviebox",
  "netflix-clone",
  "home-rentals-agency",
];
