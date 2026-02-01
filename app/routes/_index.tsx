import type { MetaFunction } from "@remix-run/node";
import { Badge } from "react-bootstrap";
import { Contact } from "~/components/home/contact";
import { QuickLinks } from "~/components/home/intro";
import { MyJourney } from "~/components/home/journey";
import meImage from "~/assets/images/me.jpg";
import { Projects } from "../components/home/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Ian Vexler" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const skills = ['Full-Stack', 'Mobile', 'Python', 'C#', 
    'TypeScript', 'React', 'React Native', 'ASP.NET', 'Ruby on Rails',
    'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'API Integration',
    'Machine Learning', 'Optimisation', 'Bluetooth', 'Agile Development', 'GitHub',
    'Cross-Platform', 'Ubuntu'
  ];

  return (
    <div>
      <section id="home">
        <div className="intro min-vh-50 d-flex align-items-center justify-content-center px-3 position-relative">
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
        </div>

        <QuickLinks />

        <div className="d-flex justify-content-center mt-4">
          <div className="skills-list d-flex flex-wrap justify-content-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} className="project-tag px-2 py-1 fw-normal rounded-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="about-section py-5 mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-11">
                <div className="about-card p-4 p-md-5 rounded-4">
                  <div className="row align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                      <img 
                        src={meImage} 
                        alt="Ian Vexler" 
                        className="about-image rounded-4"
                        style={{ maxWidth: '200px', width: '100%' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <h2 className="about-title mb-4">
                        About Me
                      </h2>
                      <p className="about-text mb-4">
                        I'm a software engineer with a background in building bespoke solutions across healthcare, education and industrial technology. I enjoy working end-to-end on products, from understanding real user requirements to designing and developing systems tailored for their needs. My day-to-day work includes full-stack development in close collaboration with clients and cross-functional teams.
                      </p>
                      <p className="about-text mb-0">
                        Alongside industry experience, I have a strong academic interest in data-driven systems and machine learning. During my degree, I focused on applying predictive models and optimisation techniques to real problems, particularly in the context of sports analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyJourney />

      <Projects />

      <Contact />
    </div>
  );
}
