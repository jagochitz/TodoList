import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    :root {
        --white: #f5f5f5;
        --vanilla: #f1ede0;
        --title-color: #046CFC;
        --text-color: #549AFC;
        --black: #0d0c0c;
        --background: #001738;
        --input-text:#0f3c4c;
        --red: #c53030;
    }

    body {
        background: var(---vanilla);
        color: var(--white);
    }

    body, input, button {
        font-family: 'PT Serif', serif;
        font-size: 1rem;
        background-color: var(--background)
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
