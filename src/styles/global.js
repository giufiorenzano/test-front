import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange-400: #FF7800; //desconto + link navbar qndo tá nela
        --orange-500: #FF6C00; //botão
        --orange-600: #D45A00; //botão hover
        
        --purple: #A43287;

        --red: #F30;

        --light: #fff;

        --gray-50: #EEE;
        --gray-100: #d8d8d8;
        --gray-200: rgba(0,0,29,0.22);
        --gray-300: #ccc; //menu de cima, borda do total embaixo
        --gray-700: #999;

        --placeholder: #E0E7EE;
        --input-border: #E7E7E7;

        --dark-text: #212122; //total

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`
