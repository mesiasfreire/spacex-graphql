import styled from 'styled-components'

export const VContainer = styled.div`
    display: flex;
    flex-direction:${props => props.column ? "column" : "row"};
    align-item: center;
`;
