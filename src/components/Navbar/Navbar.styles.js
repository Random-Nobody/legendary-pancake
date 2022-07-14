import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  height: 50px;
  background-color: ${p => p.theme.surface};
  width: 100%;
  padding-inline: ${p=>p.theme.contentPad};

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  *{ text-transform: uppercase; }
`;

export const Left = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Right = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Logo = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;

  font-size: 24px;

  >img{
    height: 100%;
    padding: 5px;
  }
`;