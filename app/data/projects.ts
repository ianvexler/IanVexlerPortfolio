import studySeedBanner from "~/assets/images/studySeed/StudySeedBanner.jpg";
import studySeed1 from "~/assets/images/studySeed/Dashboard.png";
import studySeed2 from "~/assets/images/studySeed/Al and Gemini.png";
import studySeed3 from "~/assets/images/studySeed/8 mon.png";
import studySeedVideo from "~/assets/videos/studyseed.mp4";

import swayaBanner from "~/assets/images/swaya/SwayaBanner.png";
import swaya1 from "~/assets/images/swaya/swaya1.jpg";
import swaya2 from "~/assets/images/swaya/swaya2.jpg";
import swaya3 from "~/assets/images/swaya/swaya3.jpg";

import texmoBanner from "~/assets/images/texmo/TexmoBanner.jpg";
import texmo1 from "~/assets/images/texmo/unknown.png";
import texmo2 from "~/assets/images/texmo/unknown(1).png";
import texmo3 from "~/assets/images/texmo/unknown(2).png";

import technologBanner from "~/assets/images/technolog/TechnologBanner.jpg";
import technolog1 from "~/assets/images/technolog/technolog1.jpg";
import technolog2 from "~/assets/images/technolog/technolog2.jpg";
import technolog3 from "~/assets/images/technolog/technolog3.jpg";

import automatedFPL1 from "~/assets/images/automatedFPL/image.png";
import automatedFPL2 from "~/assets/images/automatedFPL/image(1).png";
import automatedFPL4 from "~/assets/images/automatedFPL/Pasted Graphic 5.png";

import wootBanner from "~/assets/images/woot/WootBanner.jpg";
import woot1 from "~/assets/images/woot/Join at woot.com.png";
import woot2 from "~/assets/images/woot/Main's Quizzes E.png";
import woot3 from "~/assets/images/woot/2. Which one is not part of the Deathly Hallows.png";
import woot5 from "~/assets/images/woot/Quiz Session Code.png";
import woot6 from "~/assets/images/woot/Welcome to WOOT, Main Academic! ©.png";
import woot9 from "~/assets/images/woot/Pasted Graphic 14.png";

export interface ProjectData {
  title: string;
  description: string;
  highlights: string[];
  images: string[];
  tags: string[];
  cardImage?: string;
  link?: string;
  github?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    title: "Automated Fantasy Premier League",
    description: "Built an machine learning system to predict Fantasy Premier League player performance and automate squad optimisation. The project combined time-series modelling, feature engineering and optimisation techniques to support data-driven decision making under uncertainty.",
    highlights: [
      "Designed and evaluated predictive models using historical football data, benchmarked against baseline and official FPL metrics",
      "Developed multi-stream LSTM models using player, team and match time-series data",
      "Integrated the FPL API and scraped FBref to leverage on extensive and detailed datasets",
      "Explored optimisation approaches including genetic algorithms and season-long simulation strategies inspired by top FPL managerial trends",
      "Currently developing a web interface to allow users to interact with the model and optimise their squads on demand"
    ],
    images: [automatedFPL1, automatedFPL2, automatedFPL4],
    tags: ["Python", "TensorFlow", "LSTM", "Sports Analytics", "Optimisation"],
    github: "https://github.com/ianvexler/AutomatedFPLPlayer"
  }
];

export const otherProjects: ProjectData[] = [
  {
    title: "Study Seed",
    description: "Developed a functional prototype and product concept for an AI-powered study planning application as part of a Google AI developer competition. The project explored the use of generative AI to deliver personalised study plans by transforming sample questions and lecture contents into study materials. Institutions would supply their own material, which the application would leverage to generate personalised learning resources for each student.",
    highlights: [
      "Designed the overall product concept and user experience flows",
      "Built a working demo to showcase core interactions and AI-driven features",
      "Created interface designs to showcase system behaviour and use cases",
      "Explored the use of generative AI for personalised study support",
      "Presented the project as part of a competitive developer submission"
    ],
    cardImage: studySeedBanner,
    images: [studySeedVideo, studySeed1, studySeed2, studySeed3],
    tags: ["Gemini AI", "Full-Stack", "React", "Hackathon", "Ruby on Rails"],
  },
  {
    title: "Swaya App",
    description: "Contributed significantly to the implementation of a cross-platform mobile application for a multi-academy trust, used by thousands of students across multiple colleges. The project focused on allowing students to complete surveys and feedback forms, allowing teachers to view the results to improve the student experience.",
    highlights: [
      "Developed most of the mobile application and contributed to backend services",
      "Built and shipped a cross-platform client alongside supporting APIs",
      "Implemented real-time surveys, feedback tools and engagement features",
      "Collaborated closely with designers and stakeholders to deliver the best possible user experience",
    ],
    cardImage: swayaBanner,
    images: [swaya1, swaya2, swaya3],
    tags: ["React Native", "Ruby on Rails", "Full-Stack", "Expo", "Cross-Platform", "Student Engagement"],
  },
  {
    title: "Texmo Industries Application Hub",
    description: "Participated in the development of an internal enterprise application suite for a multinational manufacturing group, supporting workflow management, task coordination and organisational processes. The project focused on replacing thrird-party software, offering a centralised and personalised solution for the organisation.",
    highlights: [
      "Contributed across the full delivery cycle, from requirements gathering to deployment",
      "Developed and maintained features across a multi-application enterprise system",
      "Worked under strict deadlines to replace expiring third-party systems before subscription end dates",
      "Designed and implemented a reusable front-end component library shared across applications",
    ],
    cardImage: texmoBanner,
    images: [texmo1, texmo2, texmo3],
    tags: ["React", "ASP.NET", "C#", "Enterprise", "Bespoke Software"],
  },
  {
    title: "WOOT",
    description: "Developed a real-time quiz platform inspired by Kahoot, built for educational use. Teachers create and manage quizzes while students join live sessions instantly using a game code, creating a smooth live experience for students.",
    highlights: [
      "Implemented real-time synchronisation using Server-Sent Events (SSE)",
      "Built quiz creation, folder organisation, and live session management features",
      "Designed a frictionless student experience with code-based joining and no sign-up required",
      "Recognised with the Software Hut Prize for outstanding real-world software development"
    ],
    cardImage: wootBanner,
    images: [woot1, woot2, woot3, woot5, woot6, woot9],
    tags: ["Ruby on Rails", "SSE", "PostgreSQL", "Award-Winning", "University of Sheffield"],
    github: "https://github.com/ianvexler/WOOT",
  },
  // {
  //   title: "Technolog Cello XT Configuration App",
  //   description: "Contributed to a cross-platform mobile application used by field engineers to configure IoT water and gas monitoring devices in offline, industrial environments. The app enabled device setup and interaction via Bluetooth through packet communication.",
  //   highlights: [
  //     "Developed core features and initial architecture of a React Native application",
  //     "Translated extensive custom packet and protocol documentation into robust Bluetooth communication logic",
  //     "Implemented end-to-end device setup and sensor configuration workflows",
  //     "Migrated core functionality from a legacy mobile application to a modern cross-platform solution",
  //     "Designed and refined UX for technical users operating in industrial environments"
  //   ],
  //   cardImage: technologBanner,
  //   images: [technolog1, technolog2, technolog3],
  //   tags: ["React Native", "Expo", "Bluetooth", "IoT", "Offline-First"],
  // }
];
