import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

`;

export const Links = styled.ul`
   list-style: none;

   > li {
      > a {
         background-color: ${({ theme }) => theme.COLOR.theme.COLORS.white};
         
      }
   }
`;
