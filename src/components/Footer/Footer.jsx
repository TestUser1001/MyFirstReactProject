import React from "react";
import "../../components/layout.scss";
import "../Footer/Footer.scss";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../App";

const Footer = () => {
  const { t } = useTranslation();
  const { isDark } = useAppContext();
  return (
    <div className="footer container" id="footer">
      <div className="footer__top">
        <p className="footer__connect-text">{t("socialMedia")}</p>
        <div className="footer__social-icons">
          <ul className="footer__icons-list">
            <a href="#" target="_blank">
              <li className="footer__icons-list-item footer__icons-list-item--email"></li>
            </a>
            <a
              href="https://www.linkedin.com/in/inna-panasiuk-699068bb/"
              target="_blank"
            >
              <li className="footer__icons-list-item footer__icons-list-item--linkedIn"></li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008121943318&locale=uk_UA"
              target="_blank"
            >
              <li className="footer__icons-list-item footer__icons-list-item--facebook"></li>{" "}
            </a>
            <a href="https://github.com/TestUser1001" target="_blank">
              <li className="footer__icons-list-item footer__icons-list-item--github"></li>{" "}
            </a>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">{t("copyright")}</p>
      </div>
    </div>
  );
};
export default Footer;
