import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.white};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

   
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 200px;
        height: 100px;
    }
`;

export const TextBlock = styled.div`
    margin-top: 16px;
    margin-right: 33%;
`;
