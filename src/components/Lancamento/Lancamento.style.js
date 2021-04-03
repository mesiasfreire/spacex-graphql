import styled from 'styled-components';

export const VSection = styled.section`
   display: flex;
   justify-content: space-between;
   align-items:center;
   padding:30px;
   border-radius: 4px;
   margin: 10px;
   border:2px solid #f5f5f5;
   max-width: 50%;
   &:hover {
    box-shadow: 0px 0px 37px -10px rgba(179,179,179,.5);
    -webkit-box-shadow: 0px 0px 37px -10px rgba(179,179,179,.5);
    -moz-box-shadow: 0px 0px 37px -10px rgba(179,179,179,.5);
   
   }
`;

export const VSectionItems = styled.div`
   display: flex;
   flex-direction:column;
   padding:5px;
   &p:last-child {
      marging-top: 10px
   }

`;
