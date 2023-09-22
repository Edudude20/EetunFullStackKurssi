const Footer = () => {
  const footerStyle = {
    // CSS inline tyyleinä. Määritellään hieman eri tavalla kuin CSS-tiedostoissa 
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2023
      </em>
    </div>
  );
};

export default Footer;
