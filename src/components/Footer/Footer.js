import React from 'react';

import { IoLogoGithub } from "react-icons/io";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={ styles.footer }>
        <span>2023 | <IoLogoGithub /> nabi-cloud</span>
    </div>
  );
};

export default Footer;