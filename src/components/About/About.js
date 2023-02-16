import React from "react";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import styles from "./About.css";

const About = () => (
  <>
  <Navbar/>
  <div
    className="app__aboutus"
    id="about">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <br/>
        <div className="spoon__img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6BEsdVeP1k2FIVrIdPt3ZtuVvaWzQFxr959hyt8Cu8MAB81UiZtYrkFgJ2niCVbQxkc&usqp=CAU" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy76XrbPQMStGYaZ6up9NvkfP37_LjYX5mQ&usqp=CAU" alt="about_spoon" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu9nnWAuzxkm0FoclQU1v3NRSfcC7XLlYTA&usqp=CAU" alt="about_spoon" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxk_jeHzc2I-mPxGt7tQtmoypbEOMVSzDXA&usqp=CAU" alt="about_spoon" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeifSHqi3OL8az4KQZUNPFdcxRHCE_hIuXw&usqp=CAU" alt="about_spoon" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTqYR_15F_BevrkYaClrFPIxF7ngP8OjBWg&usqp=CAU" alt="about_spoon" />
        </div>
        <p className="p__opensans">
        We believe that landing a job and building the perfect resume should be simple, and that a poorly written resume should be the last reason for not getting the job that you want. We’re dedicated to make sure that doesn’t happen. We aggregated millions of resumes for thousands of jobs and job descriptions from thousands of small businesses and large, international companies like Amazon, Apple, Morgan Stanley, Goldman Sachs, and more. With this information we built a machine learning engine that analyzed these resumes and job descriptions in order to build a resume matching profile – determining what keywords to use, what relevant experience to use, and, in general, what works and what doesn’t when making a resume.
        <br/>
        <br/>
        We don’t just rely on technology. We also have a team of certified resume writers, experts, hiring managers, and employers that assess resumes and job posts to make sure that our results are accurate and have the best chance for getting the job you want.</p>
        <br/>
          
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <br/>
        <img src="https://www.lucasgroup.com/wp-content/uploads/2019/10/71-Top-5-Resume-Writing-Tips.jpg" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        The Average Job Posting Attracts 250 Resumes. Make Yours Stand Out.
        Of those 250 resumes, only 4 candidates will get interviews, and only one will get the job. ResumeBuilder.com is the premier resource for job seekers – our goal is to help you beat the other 249 candidates by providing you with the information, machine learning tools, and guides you need to build the best resume possible.
        </p>
    </div>
  </div>
  <Footer/>
  </>
);

export default About;