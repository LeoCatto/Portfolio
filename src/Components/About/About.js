import React from 'react'
import "./About.css"
import CVFhoto from "../Media/CVFhoto.jpg"

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>
                Hi! My name is Leonardo and I'm a Fullstack Developer!
                I was presented to the amazing world of IT during the first year of COVID and have fallen in love 
                with web development ever since. I started off self taught and ended up attending a Fullstack Bootcamp 
                called HENRY in which I learned a TON of valuable skills such as JAVASCRIPT, TYPESCRIPT, REACT, REDUX, 
                NODE.JS, EXPRESS, SEQUELIZE, SQL, NESTJS, SCRUM AND POSTGRESQL among others.
                I hope to one day be able to create something that will be of use to people all around the globe! 
                In the meantime, I'll give my all to the company that decides to put their faith in me!
                </p>
            </div>
            <div className="about-img">
                <img src={CVFhoto} alt="about"></img>
            </div>
        </div>
    )
}

export default About
