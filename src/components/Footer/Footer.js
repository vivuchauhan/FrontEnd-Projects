import styles from "./Footer.css";
export default function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-section">
                <p className="title">CreateResume.com</p>
                <p>CreateResume is a place where you can build your resume in a good format And our service is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>vivuchauhan333@gamil.com</p>
                <p>+91-94107-09044</p>
                <p>Vasant Vihar Dehradun Uttarakhand</p>
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