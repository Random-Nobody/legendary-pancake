import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 90px;
  >img{
    min-width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const Userinfo = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  >i{
    font-style: normal;
    color: ${p=>p.theme.primary};
  }
  >b{
    color: ${p=>p.theme.secondary};
  }
`;
