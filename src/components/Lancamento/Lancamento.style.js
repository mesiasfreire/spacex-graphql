import styled from 'styled-components';

export const VSection = styled.section`
   display: flex;
   justify-content: space-between;
   align-items:center;
   padding:20px;
   border-radius: 4px;
   margin-top: 100px;
   border:2px solid #f5f5f5;
   &:hover {
    box-shadow: 0px 0px 37px -10px rgba(179,179,179,.5);
    -webkit-box-shadow: 0px 0px 37px -10px rgba(179,179,179,.5);
    -moz-box-shadow: 0px 0px 37px -10px rgba(179,179,179,.5);
   
   }; 
   width: 100%;  
`;

export const VSectionItems = styled.div`
   display: flex;
   flex-direction:column;
   padding:5px;
`;

export const VSectionShowMore = styled.p`
    margin-top:20px;
    cursor: pointer;
`;

export const VSectionLauncheDetails = styled.p`
   display: ${props => props.show ? "block" : "none"}
   
`;
export const VSectionContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0 50px;
`;