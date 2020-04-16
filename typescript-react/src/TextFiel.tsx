import React, { useState, useRef } from 'react';

interface Person {
    firstName: string; 
    lastName: string;
}


interface Props { //Making a props interface to pass it to the component
    text: string;
    ok?: boolean;  //making some props optional
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({ handleChange}) => { //type of React Function component, this type is given by react
    //Hooks
    const [] = useState<TextNode>({text: "Hello"});

    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
        <div>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    );
};