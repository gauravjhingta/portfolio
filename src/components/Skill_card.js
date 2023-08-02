import React from "react";
import css from "./skill-card.css"
import css2 from "./Top.css"
export default function Skill_card(props) {
    const [isFlipped, setFlipped] = React.useState(false)
    function handleClick() {
        setFlipped(() => !isFlipped)
    }
    return (
        <div className={`flip-card`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={`${props.image}`} alt="img" className={props.class}/>
                    <h3>{props.frontText}</h3>
                </div>
                <div className="flip-card-back">
                    <p>{props.backText}</p>
                </div>
            </div>
        </div>
    )
}