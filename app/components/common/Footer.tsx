const Footer = () => {
  return (
    <footer className="w-100 d-flex justify-content-center flex-column align-items-center py-4">
      <h4>Ian Vexler Galarza</h4>

      <div className="my-2 text-center">
        <h6>BEng Software Engineering - University of Sheffield</h6>
        <h6>Software Engineer - The Curve</h6>
      </div>

      <div className="d-flex align-items-center">
        <div className="mx-2 d-flex">
          <i className="bi bi-github" />
          <a 
            href="https://github.com/ianvexler" 
            target="_blank"
            className="mx-2"
          >
            Github
          </a>
        </div>

        <div className="mx-2 d-flex">
          <i className="bi bi-linkedin" />
          <a 
            href="https://www.linkedin.com/in/ian-vexler-73b9291b5/" 
            target="_blank"
            className="mx-2"
          >
            LinkedIn
          </a>
        </div>

        <div className="mx-2 d-flex">
          <i className="bi bi-envelope" />
          <a 
            href="mailto:ianvexler@gmail.com"
            className="mb-0 mx-2"
          >
            ianvexler@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;