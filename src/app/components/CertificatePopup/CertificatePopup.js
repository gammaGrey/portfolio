import styles from "./CertificatePopup.module.css";
import certificateImage from "../../resources/certificate.png";
import certificatePDF from "../../resources/tj_frontend_cert.pdf";

import { useSelector, useDispatch } from "react-redux";
import { certificateSelector, hideCertificate } from "../../features/certificate/certificateSlice";

export default function CertificatePopup () {
  const { show } = useSelector(certificateSelector);
  const dispatch = useDispatch();

  function handleClose (e) {
    if (e.key === "Escape" || e.type === "click") {
      dispatch(hideCertificate());
    }
  };

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && show === true) {
      dispatch(hideCertificate());
    }
  },
  {once: true});

  return (
    <>
    <div id={ show ? styles.popup : styles.hidden }>
      <button onClick={ handleClose } id={ styles.close } title="close"></button>
      <img src={ certificateImage } alt="Tom Juzonis Frontend Engineer certificate from Codecademy. Verification number 6619515A58."></img>

      <div id={ styles.links }>
        <a href={ certificatePDF } className={ styles.linkButton } download="Tomas Juzonis - Frontend Developer Certificate" type="application/pdf">
          Save PDF
        </a>
        <a href={ certificateImage } className={ styles.linkButton } target="blank" rel="noreferrer">
          Open image in new tab
        </a>
      </div>
    </div>
    </>
  )
}