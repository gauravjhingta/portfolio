import React from "react";
import reactImg from "./Skills-pics/react-img.png"
import pythonImg from "./Skills-pics/python-img.png"
import dsaImg from "./Skills-pics/dsa-img.png"
import css from "./Top.css"
import Skill_card from "./Skill_card"
export default function Skills() {
    return (
        <div className="skill-area">
            <div className="MySkills" id="Skill-section">
                <div className="skillHeading">
                    <h1>Skills</h1>
                </div>
                <div className="skills">
                    {/* <div className="skill">
                    <img className="react-img img" src={reactImg}/>
                    <h3>React </h3>
                    <h3>development</h3>
                    </div>
                    <div className="skill">
                    <img className="dsa-img img" src={"https://cdn.sanity.io/images/7yn72j72/production/e5e1d04fe88917049f0501741512cb2e7e164094-1200x600.webp"}/>
                    <h3>DSA</h3>
                    </div>
                    <div className="skill">
                    <img className="python-img img" src={pythonImg}/>
                    <h3>Python</h3>
                </div> */}
                    <Skill_card
                        image={reactImg}
                        frontText="React development"
                        backText="Highly proficient in React, skilled in creating interactive and dynamic user interfaces. Proficient in state management, component-based development, and integrating with RESTful APIs. Strong problem-solving and debugging abilities." class="react-img" />
                    <Skill_card
                        image={"https://cdn.sanity.io/images/7yn72j72/production/e5e1d04fe88917049f0501741512cb2e7e164094-1200x600.webp"}
                        frontText="DSA"
                        backText="Proficient in Data Structures and Algorithms (DSA) with a strong understanding of fundamental concepts. Skilled in optimizing code efficiency and solving complex problems. Analytical mindset and algorithm design expertise."
                        class="dsa-img" />
                    <Skill_card
                        image={pythonImg}
                        frontText="python"
                        backText="Highly proficient in Python, adept at developing versatile applications and scripts. Strong grasp of object-oriented programming, libraries, and frameworks. Experienced in web development, data analysis, and automation."
                        class="python-img" />
                </div>

            </div>
        </div>
    )
}