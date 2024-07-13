const Header = () => {
  return (
    <>
    <div className="navbar-links"
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "var(--bg-color)",
        padding: "20px 0",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>

    <style jsx>{`
      .navbar-links a {
        color: white;
      }
      .navbar-links a:hover {
        color: var(--color);
      }
    `}</style>
    </>
  );
};

export default Header;