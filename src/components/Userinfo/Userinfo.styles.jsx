import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  span.material-icons{
    font-size: 35px;
    padding: 5px;
    ${p => p.theme.hoverCircle}
  }
`;

export const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  padding-block: 10px;
  

`;