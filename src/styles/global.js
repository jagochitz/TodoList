import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    :root {
        --primary: #FF29BB;
        --secondary: #B33D8C;
        --black: #212325;
        --white: #F5F5F5;
        --red: #AA262C;
        --gray: #617781;
        --yellow: #FFE242;
    }

    body {
        background: var(--white);
        color: var(--black);
    }

    body, input, button {
        font-family: 'PT Serif', serif;
        font-size: 1rem;
        background-color: var(--white)
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

    .hidden {
        display: none;
    }
`;
