import React from "react";

export default function Content(props){
    return (
        <dl className="dictionary">
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">
                        {props.emoji}
                    </span>
                    <span>{props.name}</span>
                </dt>
                <dd>
                    {props.description}
                </dd>
            </div>
        </dl>
    );
}