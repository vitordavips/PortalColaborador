import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas: 
   "header" 
   "content";
`;

export const Links = styled.ul`
   list-style: none;

   > li {
      display: inline-block;
      
      > a {
         background-color: ${({ theme }) => theme.COLOR.theme.COLORS.Navy_blue};
         
      }
   }
`;
