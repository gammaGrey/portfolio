import styles from "./About.module.css";
import CertificatePopup from "../CertificatePopup/CertificatePopup";
import { useSelector, useDispatch } from "react-redux";
import { certificateSelector, hideCertificate, showCertificate } from "../../features/certificate/certificateSlice";

export default function About () {
  const { show } = useSelector(certificateSelector);
  const dispatch = useDispatch();

  function handleCertificate () {
    if (show) {
      dispatch(hideCertificate());
    } else {
      dispatch(showCertificate());
    }
  };

  return (
    <>
    <div id={ styles.contentWrapper }>
      <p id={ styles.intro }>
        Hi, I'm Tom. Thanks for visiting.
        <br></br>
        <br></br>
        I'm a <span id={ styles.certified } onClick={ handleCertificate }>certified</span> front-end web developer who is always excited to learn new skills.
        <br></br>
        This portfolio was made with React and Redux.
      </p>
      {
      // certificate state &&
        <CertificatePopup />
      }
      <div id={ styles.listBox }>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>Software development
              <ul className={ styles.nestedList }>
                <li>Javascript ES6</li>
                <li>React + Redux toolkit</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Data structures</li>
              </ul>
            </li>
            <li>Communication and presentation skills</li>
            <li>Adobe Photoshop, Adobe Acrobat, Figma</li>
            <li>MS Office & Teams</li>
            <li>Digital illustration and design</li>
          </ul>
        </div>
        <div>
          <h2>Interests</h2>
          <ul>
            <li>Digital illustration & animation</li>
            <li>Video game development & design</li>
            <li>Music composition & production</li>
            <li>UX, UI & graphic design</li>
            <li>Baking</li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          <br></br>
        </p>
      </div>
      <h2>Links</h2>
      <ul id={ styles.contactList }>
        <li><a href="mailto:tjuzonis@gmail.com">Email</a></li>
        <li><a href="https://www.github.com/gammagrey" target="blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/t-juzonis/" target="blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </div>
    </>
  )
};