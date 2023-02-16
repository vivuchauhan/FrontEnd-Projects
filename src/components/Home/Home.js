import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from "./Home.css";

function Home() {
  return (
    <>
    <div className='bg'>
    <Navbar/>
    <div className='home-content'>
    <h3 className='heading'>The fast, easy way to build a better resume.</h3>
    <br/>
    <p className='paragraph'>Our resume builder includes a review from one of our experts.</p>
    <p className='paragraph'>Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.</p>
    <br/>
    <h3 className='home_navbar2_login'>Build Your Resume...</h3>
    </div>
    </div>
    </>
  )
}

export default Home

