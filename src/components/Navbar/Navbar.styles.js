import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  background-color: ${p => p.theme.surface};
  width: 100%;
  padding-inline: ${p => p.theme.contentPad};
  border-bottom: 1px ${p => p.theme.primaryFaded} solid;
  z-index: 100;

  font-family: ${p=>p.theme.font.header};

  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const Left = styled.div`
  display: inline-flex;
  align-items: center;

  >a{
    height: 100%;
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0;
    font-size: 24px;

    img{
      height: 40px;
      width: 40px;
      //animation: 5s linear infinite ${Spin}
    }
  }
`;

export const Right = styled.div`
  display: inline-flex;
  align-items: center;
`;