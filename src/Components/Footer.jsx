import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          width: "100%", backgroundColor: "#f0f8ff", display: "flex",justifyContent: "center", alignItems: "center", padding: "10px 0", boxShadow: "0 -2px 5px rgba(0,0,0,0.1)", marginTop: "20px",
        }}
      >
        <a
          href="https://www.facebook.com/matias.bazan.31"
          target="_blank"
          style={{
            fontSize: "2rem",color: "#1877F2", textDecoration: "none", margin: "0 10px",  display: "flex", alignItems: "center",justifyContent: "center",transition: "transform 0.3s ease",
          }}
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/matiasbazan._/"
          target="_blank"
          style={{
            fontSize: "2rem",color: "#E1306C",textDecoration: "none", margin: "0 10px", display: "flex",alignItems: "center",justifyContent: "center", transition: "transform 0.3s ease",
          }}
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/Matias_Bazan99"
          target="_blank"
          style={{
            fontSize: "2rem", color: "#1DA1F2",textDecoration: "none",margin: "0 10px",display: "flex", alignItems: "center", justifyContent: "center",transition: "transform 0.3s ease",
          }}
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
