import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    :root {
        --primary: #D7A119;
        --secondary: #C3DBE2;
        --black: #212325;
        --white: #F5F5F5;
        --red: #AA262C;
        --gray: #617781;
        --light-blue: #369FBE;
        --blue: #327AAB;
    }

    body {
        background: var(--secondary);
        color: var(--black);
    }

    body, input, button {
        font-family: 'PT Serif', serif;
        font-size: 1rem;
        background-color: var(--secondary)
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
