import img1 from "../../images/projects/career-carrier.webp";
import img2 from "../../images/projects/iris.webp";

const projectList = [
  {
    title: "Career Carrier",
    description: "Choose career based on your skills, personality and interests.",
    img: img1,
    url: "https://github.com/krishnav0110/career-carrier",
  },
  {
    title: "IRIS SFIT 2023",
    description: "The landing page for the IRIS SFIT 2023 event.",
    img: img2,
    url: "https://github.com/krishnav0110/iris-sfit",
  },
  {
    title: "3D software renderer",
    description: "3D software renderer using C and Windows GDI.",
    url: "https://github.com/krishnav0110/3d-software-renderer",
  },
];

const Portfolio = () => {
  return (
    <>
    <section className="portfolio" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            {project.img && <img src={project.img} alt="" loading="lazy" />}
            <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} className="portfolio-link" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        ))}
      </div>
    </section>

    <style jsx>{`
      .portfolio {
        margin: 20px 0;
        padding: 40px 0;
        background: var(--bg-color);
      }
      .portfolio h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: var(--color);
      }
      .portfolio .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        margin: 40px 0 80px;
      }
      .portfolio .box {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        padding: 24px 16px;
        background: white;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 10px;
      }
      .portfolio img {
        margin-bottom: 30px;
      }
      .portfolio p {
        font-size: 0.9rem;
        font-weight: 400;
        color: var(--sub-title-color-white-bg);
        margin-top: 10px;
      }
      .portfolio-link {
        font-size: 0.9rem;
        font-weight: 600;
        width: fit-content;
        margin-top: 20px;
        padding: 10px 20px;
        border: 1px solid black;
        border-radius: 20px;
      }
    `}</style>
    </>
  );
};

export default Portfolio;