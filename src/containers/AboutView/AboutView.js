import React from "react";
import styles from "./AboutView.module.css";

import HouseIcon from "../../assets/images/about/house-icon.png";
import TimeIcon from "../../assets/images/about/time-icon.png";
import CallIcon from "../../assets/images/about/call-icon.png";
import EmailIcon from "../../assets/images/about/email-icon.png";

import AboutSection from "../../components/AboutSection/AboutSection";

function AboutView() {
  return (
    <div className={styles.sections}>
      <div>
        <AboutSection title="Самовывоз" icon={HouseIcon}>
          <div>г. Киев, просп. Валерия Лобановского(Краснозвездный), 6Г</div>
        </AboutSection>
        <AboutSection title="Время работы" icon={TimeIcon}>
          <div>
            <div >
             Пн-Пт 09:00 - 22:00 
            </div>
            <div>
             Сб: 10:00 - 22:00 
            </div>
            <div>
              Вс 10:00 - 22:00
            </div>
            </div>
        </AboutSection>
      </div>
      <div>
        <AboutSection title="Call Центр" icon={CallIcon}>
          <div>
            <a href="tel:(044) 331 05 41 ">
            - (044) 331 05 41 
            </a><br/>
            <a href="tel:(050) 736 99 95 ">
            - (050) 736 99 95 
            </a><br/>
            <a href="tel:(068) 931 64 91 ">
            - (068) 931 64 91  
            </a><br/>
            <a href="tel:(063) 875 80 35">
            - (063) 875 80 35
            </a>
          </div>
        </AboutSection>
        <AboutSection title="E-mail" icon={EmailIcon}>
          <a href="office@gamestore.com.ua" >E-mail: office@gamestore.com.ua</a>
        </AboutSection>
      </div>
      <div className={styles.map}>
        <iframe title="map"
          src="https://www.google.com.ua/maps/@50.4231842,30.4634218,17z?hl=ru"
          width="1100"
          height="400"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutView;
