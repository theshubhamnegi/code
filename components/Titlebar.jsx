// import Image from "next/image";
import styles from "../styles/Titlebar.module.css";

import vscode from "../public/vscode_icon.png";

import { useState } from "react";

const Titlebar = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);
  
    const toggleFullScreen = () => {
      const element = document.documentElement;
      if (!isFullScreen) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
          element.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullScreen(!isFullScreen);
    };

    const closetab = () => {
        window.close();
    }

    const minimizewindow = () => {
      var currentUrl = window.location.href;      
      window.open(currentUrl, '', 'width=600,height=400,top=100,left=100');    
      window.close();
    }

  return (
    <section className={styles.titlebar}>
      {/* <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      /> */}
      <img
        unoptimized
        // src="https://raw.githubusercontent.com/Shubham180401/code/main/public/favicon.ico"
        src = "vscode_icon.png"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Shubham Negi - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize} onClick={minimizewindow}></span>
        <span className={styles.maximize} onClick={toggleFullScreen}></span>
        <span className={styles.close} onClick={closetab}></span>
      </div>
    </section>
  );
};

export default Titlebar;
