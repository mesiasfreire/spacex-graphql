import styled from 'styled-components'

export const VImage = styled.img`
    width: ${props => props.width };
    height:${props => props.height };
    object-fit: cover;
`;
export const VContainer = styled.div`
    max-width: 100wh;
    max-heigth:90vh;
    margin: 0 20%;  
    padding: 20px; 
`;

VImage.defaultProps = {
    width: 'auto',
    height: 'auto'
}
