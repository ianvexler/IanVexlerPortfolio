import type { MetaFunction } from "@remix-run/node";
import { Badge, Button } from "react-bootstrap";
import ExperienceCard from "~/components/home/ExperienceCard";
import MyJourney from "~/components/home/MyJourney";
import QuickLinks from "~/components/home/QuickLinks";

export const meta: MetaFunction = () => {
  return [
    { title: "Ian Vexler" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const skills = ['React', 'Typescript', 'Node.js', 'Python', 'Ruby on Rails', '.NET', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'];

  return (
    <div>
      <section className="intro min-vh-50 d-flex align-items-center justify-content-center px-3 position-relative">
        <div className="text-center position-relative z-1">
          <span className="greeting d-block text-uppercase fw-light text-white-50 mb-3">
            Hello, I'm
          </span>
          <h1 className="name display-3 fw-semibold mb-4">
            <span className="first-name">Ian</span> <span className="last-name">Vexler</span>
          </h1>
          <div className="title-row d-flex align-items-center justify-content-center gap-3 gap-md-4">
            <span className="line" />
            <span className="fs-5 text-white-50">Full-Stack Software Engineer</span>
            <span className="line" />
          </div>
        </div>
      </section>

      <QuickLinks />

      <div className="d-flex justify-content-center mt-4">
        <div className="skills-list d-flex flex-wrap justify-content-center gap-2">
          {skills.map((skill) => (
            <Badge key={skill} className="skill-tag px-3 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="w-100 bg-secondary px-4 d-flex mt-5 position-relative">
        <div className='w-25 position-absolute about-me-img bg-warning' />

        <div className="w-75 py-4" style={{ marginLeft: '25%' }}>
          <div className="mx-5">
            <h3>About me</h3>

            <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <MyJourney />
    </div>
  );
}
