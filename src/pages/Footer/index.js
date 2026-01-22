import React from "react";

import Link from "@docusaurus/Link";

import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames("footer", {
        "footer--dark": footer.style === "dark",
      })}
    >
      <div className={styles.container}>
        <div>
          <img
            style={{ marginBottom: "40px" }}
            src="/img/rm-white-logo.svg"
            alt="RM logo"
          ></img>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.font}>Follow Us</div>

          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/RevenueMonster" target="_blank">
              <img src="/img/footer/FB.svg" alt="Facebook"></img>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/company/revenue-monster/"
              target="_blank"
            >
              <img src="/img/footer/linkedin.svg" alt="Linkedin"></img>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.youtube.com/channel/UCOUTWs39v891Tr7kx_MMedw"
              target="_blank"
            >
              <img src="/img/footer/YT.svg" alt="YouTube"></img>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/revenuemonster/" target="_blank">
              <img src="/img/footer/IG.svg" alt="Instagram"></img>
            </a>
          </div>
          <div className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Revenue Monster SDN BHD
            <br />
            (Company NO.1236838-T). All rights reserved
          </div>
          <div className={styles.privacy}>
            <a
              href="https://merchant.revenuemonster.my/docs/privacy-notice"
              target="_blank"
              className={styles.privacyFont}
            >
              Privacy Notice
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://merchant.revenuemonster.my/docs/terms-of-use"
              target="_blank"
              className={styles.privacyFont}
            >
              Terms and Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
