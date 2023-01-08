import React from "react";
import "../Styles/TemplateEducationComponent.css";


const TemplateEducationComp = (props) => {
    return (
        <h3 className="template-education-details">
            {props.education.degree} from {props.education.domain}{" "}
            <span className="template-education-university">
                {props.education.university}
            </span>
            <span className="education-start-end">
                ({props.education.startYear}-{props.education.endYear})
            </span>
        </h3>
    )
}

export default TemplateEducationComp; 