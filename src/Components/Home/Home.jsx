import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <>
    <section id="home" className="home">
      <div className="home-col-1">
        <div>Hello, I'm</div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint numquam culpa beatae animi voluptatem dolorem. Autem nesciunt soluta, saepe eos harum, accusantium labore minus quae exercitationem, tenetur atque suscipit maiores!
        </h3>
        <a href="#footer">Hire Me</a>
      </div>
    </section>

    <style jsx>{`
      section.home {
        display: flex;
        align-items: center;
        height: 100vh;
        color: white;
        background: var(--bg-color);
      }
      .home-col-1 {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 60%;
        margin-left: 100px;
      }
      @media (max-width: 990px) {
        section.home {
          justify-content: center;
        }
        .home-col-1 {
          width: 90%;
          margin-left: 0;
        }
      }

      .home-col-1 div {
        font-size: 1.9rem;
        font-weight: 400;
        margin-bottom: 20px;
      }
      .home-col-1 h1 {
        font-size: 3.5rem;
        font-weight: 400;
        line-height: 0.97;
        color: var(--color);
      }
      .home-col-1 h2 {
        font-size: 1.9rem;
        font-weight: 400;
      }
      .home-col-1 h3 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--sub-title-color-black-bg);
        margin-top: 30px;
      }

      .home-col-1 a {
        color: white;
        background: var(--color);
        width: fit-content;
        margin-top: 30px;
        padding: 15px 25px;
        border-radius: 5px;
      }
    `}</style>
    </>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;