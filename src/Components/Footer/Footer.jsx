import PropTypes from "prop-types";

const Footer = (props) => {
  const {
    name,
    title,
  } = props;

  return (
    <>
    <footer id="footer">
      <div className="footer-name">
        <div>{name}</div>
        <p>{title}</p>
      </div>
      <p>Copyright &copy; 2024 {name}. All Rights Reserved</p>
    </footer>

    <style jsx>{`
      footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        padding: 30px 0;
        color: white;
        background: var(--bg-color);
        width: 100vw;
      }
      @media screen and (max-width: 990px) {
        footer {
          flex-direction: column;
          padding: 30px 40px;
        }
      }

      @media screen and (max-width: 990px) {
        .footer-name {
          align-self: start;
          margin-bottom: 10px;
        }
      }
      .footer-name div {
        font-size: 1.5rem;
        color: var(--color);
        margin-bottom: 10px;
      }
      .footer-name p {
        font-size: 1rem;
        color: white;
      }
      
      footer p {
        font-size: 1rem;
        font-weight: 300;
        color: var(--sub-title-color-black-bg);
      }
    `}</style>
    </>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;