import styled from 'styled-components';

export const VMenu = styled.nav`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    height: 100vh;
    justify-content:space-between;
    padding-top:30px;
    padding-bottom:30px;
    border-right: 1px solid #f5f5f5; 
    position:fixed;
    background-color: #005288;
`;

export const VMenuItems = styled.ul`
    margin-top: 30px;
    flex:auto;
    width: -webkit-fill-available;
    border-bottom: 1px solid #f5f5f5;
    li {
      padding: 20px;
      border-top: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;  
      color: #fff;
      &:hover {
        color: #f5f5f5;
        background: #003354;
        cursor: pointer;
      }  
    } 
`;
export const VMenuContainer = styled.div`
    padding:10px;
    margin-top:30px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    width: -webkit-fill-available;
    color: #fff;

`;