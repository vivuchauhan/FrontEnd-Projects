import styles from "./Footer.css";
export default function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-section">
                <p className="title">ResumeBuilder.com</p>
                <p>ResumeBuilder is a place where you can build your resume in a good format And our service is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>ankitaawasarmol04@gmail.com</p>
                <p>+342-5324-9454</p>
                <p>2393 Street NYC</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}