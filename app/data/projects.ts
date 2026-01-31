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
import automatedFPL3 from "~/assets/images/automatedFPL/image(2).png";
import automatedFPL4 from "~/assets/images/automatedFPL/image(3).png";

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
    description: "Built an end-to-end machine learning system to predict Fantasy Premier League player performance and automate squad optimisation. The project combined time-series modelling, feature engineering, and optimisation techniques to support data-driven decision making under uncertainty.",
    highlights: [
      "Designed and evaluated predictive models using historical football data, benchmarked against baseline and official FPL metrics",
      "Developed multi-stream LSTM models using player-level and match-level time-series data",
      "Integrated the FPL API and scraped FBref to construct predictive feature sets",
      "Explored optimisation approaches including genetic algorithms and season-long simulation strategies",
    ],
    images: [automatedFPL1, automatedFPL2, automatedFPL3, automatedFPL4],
    tags: ["Machine Learning", "LSTM", "Optimisation", "Sports Analytics", "Python", "TensorFlow", "Data Engineering"],
    github: "https://github.com/ianvexler/AutomatedFPLPlayer"
  }
];

export const otherProjects: ProjectData[] = [
  {
    title: "Study Seed",
    description: "Developed a functional prototype and product concept for an AI-powered study planning application as part of a Google AI developer competition. The project explored the use of generative AI to deliver personalised study guidance by transforming students’ own notes and lecture content into tailored, on-demand study materials. Institutions would supply curated databases of notes and lectures, which the application would leverage to generate personalised learning resources for each student.",
    highlights: [
      "Designed the overall product concept and user experience flows",
      "Built a working demo to showcase core interactions and AI-driven features",
      "Created interface designs to showcase system behaviour and use cases",
      "Explored the use of generative AI for personalised study support",
      "Presented the project as part of a competitive developer submission"
    ],
    cardImage: studySeedBanner,
    images: [studySeedVideo, studySeed1, studySeed2, studySeed3],
    tags: ["Generative AI", "Google AI", "UX Design", "Prototyping"],
  },
  {
    title: "Swaya App",
    description: "Acted as the primary developer on a cross-platform mobile application for a multi-academy trust, used by thousands of students across multiple colleges. The project focused on allowing students to complete surveys and feedback forms, and for teachers to view the results to improve the student experience.",
    highlights: [
      "Developed most of the mobile application and contributed to backend services",
      "Built and shipped a cross-platform client alongside supporting APIs",
      "Implemented real-time surveys, feedback tools, and engagement features",
      "Collaborated closely with designers and stakeholders during requirement capture",
      "Deployed to iOS and Android, improving the student experience across colleges"
    ],
    cardImage: swayaBanner,
    images: [swaya1, swaya2, swaya3],
    tags: ["React Native", "Ruby on Rails", "Student Engagement", "Mobile", "Expo"],
  },
  {
    title: "Texmo Industries Application Hub",
    description: "Contributed to the development of an internal enterprise application suite for a multinational manufacturing group, supporting workflow management, task coordination, and organisational processes across multiple teams. The project focused on providing a centralised platform for managing and tracking tasks, projects, and other organisational processes replacing thrird-party software.",
    highlights: [
      "Worked on a multi-application system including workflow, task, and organisational tools",
      "Contributed across the full delivery cycle, from requirements gathering to deployment",
      "Built reusable front-end components to standardise UI patterns across applications",
      "Collaborated with stakeholders to translate operational needs into technical solutions",
      "Developed experience in scalable system design and enterprise product delivery"
    ],
    cardImage: texmoBanner,
    images: [texmo1, texmo2, texmo3],
    tags: ["React", ".NET", "C#", "Workflow", "Full-Stack"],
  },
  {
    title: "Technolog",
    description: "Contributed to a cross-platform mobile application used by field engineers to configure IoT water and gas monitoring devices in offline, industrial environments. The app enabled on-site device setup and interaction via Bluetooth.",
    highlights: [
      "Developed core features in a React Native codebase",
      "Implemented end-to-end device setup and sensor configuration workflows",
      "Built and tested Bluetooth communication layers for reliable on-site interaction",
      "Designed and refined UX for field-based technical users",
      "Worked closely with real-world hardware constraints in an industrial system"
    ],    
    cardImage: technologBanner,
    images: [technolog1, technolog2, technolog3],
    tags: ["React Native", "IoT", "Bluetooth", "Mobile", "Expo"],
  }
];
