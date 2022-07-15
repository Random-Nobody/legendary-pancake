import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  span.material-icons{
    font-size: 35px;
    padding: 5px;
    position: relative;
    &:hover{
      ${p => p.theme.hoverCircle}
    }
  }
`;

export const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  padding-block: 10px;
  
  >a, >button{
    padding-block: 5px;
    text-transform: uppercase;
  }
  >p{
    padding-block: 5px;
  }
`;

export const Button = styled.button`
  background-color: ${p=>p.background};
`;