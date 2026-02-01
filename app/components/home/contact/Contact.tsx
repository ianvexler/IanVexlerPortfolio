import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqebrnro");

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <h2 className="contact-title mb-4">Get in Touch</h2>
                
                <a 
                  href="https://www.linkedin.com/in/ian-vexler-73b9291b5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <i className="bi bi-linkedin" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              <div className="col-lg-6 offset-lg-1">
                {state.succeeded ? (
                  <div className="success-message text-center py-5">
                    <i className="bi bi-check-circle fs-1 text-success mb-3 d-block" />
                    <h4 className="mb-2">Message Sent!</h4>
                    <p className="text-white-50 mb-0">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="form-control contact-input"
                        required
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-danger mt-1 small"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="form-control contact-input"
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-danger mt-1 small"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="form-control contact-input contact-textarea"
                        rows={5}
                        required
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-danger mt-1 small"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit" 
                        disabled={state.submitting}
                        className="btn-contact d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill fw-medium"
                      >
                        <i className={`bi ${state.submitting ? 'bi-hourglass-split' : 'bi-send'}`} />
                        {state.submitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
