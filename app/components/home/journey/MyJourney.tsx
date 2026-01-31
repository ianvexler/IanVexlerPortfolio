import ExperienceCard from "./ExperienceCard";

import img1 from "~/assets/images/IMG_4309.jpg";
import img2 from "~/assets/images/1718273049513.jpg";
import img3 from "~/assets/images/IMG_3464.jpg";
import img4 from "~/assets/images/9d749a57-e454-4c0e-b2ce-a4ff82af1801.JPG";
import img5 from "~/assets/images/IMG_1363.jpg";
import img6 from "~/assets/images/IMG_0654.JPG";
import img7 from "~/assets/images/A74FF877-8CBC-47D8-BA7D-95D66C991128_1_105_c.jpeg";
import img8 from "~/assets/images/2867640e-c7b1-4b1d-9194-086f33f5d1c2.JPG";

const MyJourney = () => {
  return (
    <section id="my-journey" className="journey-section py-5">
      <div className="container">
        <h2 className="journey-title mb-5 text-center">My Journey</h2>
        
        <div className="row align-items-start">
          {/* Timeline column */}
          <div className="col-lg-7 col-md-7 pe-5">
            <div className="journey-group mb-5">
              <h3 className="journey-subtitle mb-4">
                <i className="bi bi-briefcase me-2" />
                Experience
              </h3>
              
              <div className="timeline">
                <ExperienceCard 
                  title="The Curve Consulting" 
                  subtitle="Software Engineer"
                  date="2025 - now"
                  className="mb-4"
                >
                  <p className="text-white-50 mb-0">
                    Returned to the company in a permanent role after a successful internship. 
                    Currently working on software projects across healthcare, education, and industrial 
                    technology sectors, collaborating closely with teams and clients to deliver quality solutions.
                  </p>
                </ExperienceCard>

                <ExperienceCard 
                  title="The Curve Consulting" 
                  subtitle="Junior Software Engineer"
                  date="2023 - 2024"
                >
                  <p className="text-white-50 mb-0">
                    Completed a year in industry, supporting multi-sector client projects and gaining 
                    hands-on experience in agile delivery and software development. Worked across six projects, 
                    engaging closely with clients and contributing to bespoke software solutions.
                  </p>
                </ExperienceCard>
              </div>
            </div>

            <div className="journey-group">
              <h3 className="journey-subtitle mb-4">
                <i className="bi bi-mortarboard me-2" />
                Education
              </h3>
              
              <div className="timeline">
                <ExperienceCard 
                  title="University of Sheffield" 
                  subtitle="BEng Software Engineering w/ Year In Industry"
                  date="2021 - 2025"
                  className="mb-4"
                >
                  <p className="mb-2"><strong>1st Class Honours</strong></p>
                  <p className="mb-2">
                    <span className="text-white-50">Award: </span>
                    Software Hut Prize — Recognized for outstanding software development for a real-world client.
                  </p>
                  <p className="text-white-50 mb-0">
                    Gained a strong foundation in core software engineering principles, programming and machine 
                    learning through coursework and practical academic projects.
                  </p>
                </ExperienceCard>

                <ExperienceCard 
                  title="NCUK" 
                  subtitle="International Foundation Year Programme"
                  date="2020"
                >
                  <p className="mb-2"><strong>Chemistry (B), Mathematics (A*), Physics (A)</strong></p>
                  <p className="text-white-50 mb-0">
                    Completed an engineering foundation programme equivalent to A-Levels, developing core knowledge 
                    in engineering and mathematics to prepare for university study.
                  </p>
                </ExperienceCard>
              </div>
            </div>
          </div>

          {/* Photo collage */}
          <div className="col-lg-5 col-md-5 d-none d-md-block px-5 mt-5">
            <div className="chaos-collage">
              <div className="chaos-photo chaos-1">
                <img src={img1} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-2">
                <img src={img2} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-3">
                <img src={img3} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-4">
                <img src={img4} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-5">
                <img src={img5} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-6">
                <img src={img6} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-7">
                <img src={img7} alt="Journey photo" className="chaos-img" />
              </div>
              <div className="chaos-photo chaos-8">
                <img src={img8} alt="Journey photo" className="chaos-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
