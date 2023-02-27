import React from "react";
import { ButtonProps } from "./Button.types";

export default function Button({ name, onClick, buttonText }: ButtonProps) {
    return (<button name={name} onClick={onClick}>{buttonText}</button>)
}