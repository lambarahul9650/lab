import React from "react";
import * as styles from "../styles/Footer.module.css";
import FooterLinkSet from "./FooterLinkSet";
const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={`margin-on-side ${styles.footerItemsRow}`}>
				{/* Company Info */}
				<div className={`${styles.companyInfo}`}>
					<div className={styles.branding}>
						{/* logo */}
						<div className={styles.logoFooter}>T</div>
						{/* Name */}
						<h3>Indo Arab Diagnostic</h3>
					</div>
					{/* description */}
					<p className={`${styles.companyDes}`}>
					Indo Arab Diagnostic provides progressive, and affordable
						healthcare, accessible on mobile and online for everyone
					</p>
					<p>©Indo Arab Diagnostic PTY LTD 2020. All rights reserved</p>
				</div>
				{/* Contact Information */}
                <div className={`${styles.contactInfo}`}>
                <h4>Contact Us</h4>
                 <p>Phone:  095600 01312</p>
                <p>Email: info@indoarabdiagnostic.com</p>
				<p>Address: 434, Sector 39 Rd, Jharsa, Jharsa Village, Sector 39, Gurugram, Haryana 122003</p>
                 <p>Follow us on Google Business: <a href="https://www.google.com/maps/place/Indo+Arab+Diagnostic/@28.4382653,77.0446604,17z/data=!3m1!4b1!4m6!3m5!1s0x390d195da25ef66f:0xf1516d32ea02cf82!8m2!3d28.4382653!4d77.0472353!16s%2Fg%2F11pd2_q6pd?entry=ttu" target="_blank" rel="noopener noreferrer">Google Business</a></p>
                </div>
				{/* Link Set 1 */}
				<FooterLinkSet />
				{/* Link Set 2 */}
				<FooterLinkSet />
				{/* Link Set 3 */}
				<FooterLinkSet />
			</div>
		</footer>
	);
};

export default Footer;
