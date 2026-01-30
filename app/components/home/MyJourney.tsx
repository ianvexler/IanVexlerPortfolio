import ExperienceCard from "./ExperienceCard";

const MyJourney = () => {
  return (
    <div
      id='my-journey'
      className="d-flex my-5 mx-3 flex-wrap px-4 flex-column experience-container"
    >
      <h1 className="mb-5">My Journey</h1>
      
      <h2 className="mb-3">Education</h2>
      <ExperienceCard 
        title="University of Sheffield" 
        icon="mortarboard"
        className="mb-4"
      >
        BEng Software Engineering - 2021-2025<br/>Overall grade: 1st (71%)

        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ExperienceCard>

      <ExperienceCard 
        title="NCUK" 
        icon="mortarboard"
        className="mb-4"
      >
        International Foundation Year Programme (Comparable to A Level) - 2021

        <p className="mt-2">
          Chemistry (B), Mathematics (A*), Physics (A), *EAPPU (B)<br/>
          *EAPPU - English for Academic Purposes for Proficient Users (comparable to IELTS)
        </p>
      </ExperienceCard>

      <h2 className="my-3">Experience</h2>
      <ExperienceCard title="The Curve Consulting" icon="building">
        Junior Software Engineer - 2023-2024
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ExperienceCard>
    </div>
  )
}

export default MyJourney;