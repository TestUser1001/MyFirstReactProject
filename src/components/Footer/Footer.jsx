import React from "react";
import "../../components/layout.scss";
import "../Footer/Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer container" id="footer">
      <div className="footer__top">
        <p className="footer__connect-text">{t("socialMedia")}</p>
        <div className="footer__social-icons">
          <ul className="footer__icons-list">
            <li className="footer__icons-list-item footer__icons-list-item--email">
              <a
                href="mailto:nonamer099@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Email"
              ></a>
            </li>
            <li className="footer__icons-list-item footer__icons-list-item--linkedIn">
              <a
                href="https://www.linkedin.com/in/inna-panasiuk-699068bb/"
                target="_blank"
                aria-label="My LinkedIn account"
              ></a>
            </li>
            <li className="footer__icons-list-item footer__icons-list-item--facebook">
              <a
                href="https://www.facebook.com/profile.php?id=100008121943318&locale=uk_UA"
                target="_blank"
                aria-label="My facebook account"
              ></a>
            </li>
            <li className="footer__icons-list-item footer__icons-list-item--github">
              <a
                href="https://github.com/TestUser1001"
                target="_blank"
                aria-label="My GitHub account"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">{t("copyright")}</p>
      </div>
    </footer>
  );
};
export default Footer;
