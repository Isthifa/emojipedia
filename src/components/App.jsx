import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import emojipedia from "../Emojipedia";


function createContent(emojiTerm){
    return (
        <Content
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
        />
    );
}

export default function App() {
    return (
        <div>
            <Heading/>
            <dl className="dictionary">
                {emojipedia.map(createContent)}
            </dl>
        </div>
    );
    }
