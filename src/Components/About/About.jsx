const description = "I am a passionate computer poweruser. I am dedicated to honing my skills and exploring new opportunities in the ever-evolving world of software development.";

const skillsList = [
  "Web Developer",
  "Front End Development",
  "Back End Development",
  "Desktop App Development",
  "Game Developement",
];

const About = () => {
  return (
    <>
    <section className="about" id="about">
      <div>
        <h2>About Myself</h2>
        <p className="about-desc">{description}</p>
        <hr />
        <ul>
          {skillsList.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
    <style jsx>{`
      section.about div {
        width: 50%;
        margin: 50px auto;
        padding: 50px;
        border: 1px solid var(--bg-color);
        border-radius: 20px;
      }
      @media screen and (max-width: 990px) {
        section.about div {
          width: 70%;
        }
      }

      section.about h2 {
        font-size: 1.6rem;
        font-weight: 500;
      }

      .about-desc {
        font-weight: 400;
        margin-top: 50px;
        color: var(--sub-title-color-white-bg);
      }

      section.about ul {
        columns: 2;
        font-size: 1.1rem;
        margin: 30px 20px;
        gap: 20px;
      }
      @media screen and (max-width: 990px) {
        section.about ul {
          columns: 1;
        }
      }

      section.about li {
        line-height: 1.7;
      }
      section.about li::marker {
        color: var(--color);
      }
    `}</style>
    </>
  );
};

export default About;