import React from "react";
import profile from "./profile.png"
import git from "./profile-link-pics/github.png"
import linkedin from "./profile-link-pics/linkedin.png"
import { Link } from "react-router-dom";
// import typing from "./WordByWordTyping"
import Intro from "./Intro"
export default function Top() {

    return (
        <div className="Top">

            <div className="Top-left">
                <div className="typing-container" id="typingEffect">
                    <p className="Intro sentence" id="sentence1"></p>
                    <p className="Intro sentence" id="sentence2"></p>
                    <span class="input-cursor"></span>
                </div>

                <p>Iam a tech enthusiast and a react developer.</p>
                <button className="hireme-btn">
                    <Link to="/hireme" className="hireme-lnk">Hire Me</Link>
                </button>
                <button className="project-btn">
                    {/* <Link to="/projects">Projects</Link> */}
                    projects
                    <i className='fas'>&#xf35d;</i>
                </button>
                <h5 className="span1"><span className="span-items s1">c++</span><span className="span-items s3">python</span></h5>
                <h5 className="span2"><span className="span-items s2">java</span><span className="span-items s4">javascript</span></h5>
                <div className="profile-links">
                    <a href="https://github.com/gauravjhingta">
                        <img src={git} className="profile-link" alt="img" />
                    </a>
                    <a href="https://www.linkedin.com/in/gaurav-jhingta-5478a7235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2JPO5kPvTRqQwme2K3Sr2A%3D%3D">
                        <img src={linkedin} className="profile-link" alt="img" />
                    </a>
                </div>
            </div>
            <div>
                <img className="profile-img" src={profile} alt="profile" />
            </div>
            <hr />
        </div>
    )
}