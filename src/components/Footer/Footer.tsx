import "./Footer.css";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p><a href="#" className="footer__link">Privacy Policy</a></p>
      <p className="footer__corporation">{currentYear} Eats &#169;</p>
      <p><a href="#" className="footer__link">Terms Of Service</a></p>
    </footer>
  );
};
