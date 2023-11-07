import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   

   #caixaPai{
      display: flex;
      justify-content: space-between;
   };

   .caixaFilho{
      display: block;
      justify-content: space-between;
   };

   
   #caixaFilho3{
      display: block;
      justify-content: flex-start;
   };

   #caixaFilho4{
      >img{
         height: 500px;
         width: auto;
      }
   };

   #certificacoes{
      ul, li{
         display: flex;
         width: 200px;
         margin: 10px;
      };
   };


`;


