import React from "react";
import "../index.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2024 Condemned Compound</p>
      <a
        href="https://app.hauntpay.com/events/nukeville-nightmares?fbclid=PAZXh0bgNhZW0CMTEAAaYLz31apzbc6CLq7HU_GfLK_KgqEQ-Ab7KAMWbPqzLWLoxZqakTMjR68iQ_aem_UhOK7p4pNNfmB9fflNcF_A"
        className="hauntPay"
        target="_blank"
        rel="noopener noreferrer"
      >
        CLICK ME TO BUY TICKETS
      </a>
      <a
        href="https://www.instagram.com/official_condemned_compound/"
        className="insta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/CCHaunt/"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <div className='joinDiv'>
        <p className="join">Interested in joining the team ? Reach out via the compounds instagram or facebook and send us a direct message with your name, location and if under 18 please have a parent avaliable to consent We can only take volunteers at this time. </p>
      </div>
    </footer>
  );
}

export default Footer;
