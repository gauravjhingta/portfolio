import React from "react";
import basketball from "./Hobby-pics/basketball.png"
import football from "./Hobby-pics/football.png"
import travelling from "./Hobby-pics/travelling.png"
import guitar from "./Hobby-pics/guitar-playing.png"
import code from "./Hobby-pics/data.png"
export default function Hobbies() {
    return (
        <div className="Hobby-background">

            <div className="Hobbies" id="Hobby-section">
                <h2 className="Hobby-title">My Hobbies</h2>
                <div className="Hobbies-list">
                    <div className="hobb h4">
                        <img className="img" src={code} alt="img" />
                        <p className="hobby-names">Coding</p>
                    </div>
                    <div className="hobb h1">
                        <img className="img" src={football} alt="img" />
                        <p className="hobby-names">Football</p>
                    </div>
                    <div className="hobb h2">
                        <img className="img" src={guitar} alt="img" />
                        <p className="hobby-names">Guitar</p>
                    </div>
                    <div className="hobb h3">
                        <img className="img" src={basketball} alt="img" />
                        <p className="hobby-names">Basketball</p>
                    </div>
                    <div className="hobb h4">
                        <img className="img" src={travelling} alt="img" />
                        <p className="hobby-names">Travelling</p>
                    </div>
                </div>
            </div>
        </div>
    )
}