import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.Navy_blue};
    color: ${({ theme }) => theme.COLORS.Black};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    //Esse deixar a cor a mais fraca quando o Button não estiver sendo usado
    &:disabled{
        opacity: 0.5;
    }

`;