
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    
    body {
        background: #121212;
        color: #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`;

export default GlobalStyles;
