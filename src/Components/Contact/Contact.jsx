import PropTypes from "prop-types";

import envelopeIcon from "../../images/envelope.svg";
import gitHubIcon from "../../images/github.svg";
import linkedInIcon from "../../images/linkedin.svg";

const Contact = (props) => {
  const {
    email,
    gitHub,
    linkedIn,
  } = props;

  return (
    <>
    <section className="contact" id="contact">
      <div>
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
        <div>
          {email && (
            <a href={`mailto:${email}`}>
              <img src={envelopeIcon} alt="email" className="socialIcon" />
            </a>
          )}
          {gitHub && (
            <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          {linkedIn && (
            <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
            </a>
          )}
        </div>
      </div>
    </section>
    <style jsx>{`
      section.contact {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0;
      }
      .contact p {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--sub-title-color-white-bg);
      }
      .contact h2 {
        font-size: 2.6rem;
        font-weight: 500;
      }
      .contact div div {
        display: flex;
        width: fit-content;
        margin: 50px auto;
        padding: 0 40px;
        border: 1px solid black;
        border-radius: 20px;
      }
      .contact img {
        background: var(--bg-color);
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
      }
    `}</style>
    </>
  );
};

Contact.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default Contact;