import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.COLORS.light_gray};
        color: ${({ theme }) => theme.COLORS.Black};

        -webkit-font-smoothing: antialiased; // Melhora a experiência de leitura do user
    }

    button {
        height: 50px;
        width: 200px;
        margin-bottom: 10px;
        background-color: #3B8FD9;
        padding: 10px 20px; /* Tamanho do botão */
        border: none; /* Remova a borda */
        border-radius: 5px; /* Borda arredondada */
        font-weight: bold; /* Deixa o texto em negrito */
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
    }

    button:hover {
        background-color: #1E5EAB; /* Cor de fundo ao passar o mouse */
        transform: scale(1.05); /* Efeito de escala ao passar o mouse */
    }

    a{
        text-decoration: none;
        color: white;
    }

    li{
        list-style-type: none;
    }
`;