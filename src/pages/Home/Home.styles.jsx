import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  
  padding-inline: ${p => p.theme.contentPad};
  background: linear-gradient(#00000080, #00000080), url('/atlas/Aerial-View-New.png');
  background-size: cover;

  display: flex;
  justify-content: space-around;
  align-items: center;

  >img{
    width: 500px;
  }
  >div{
    width: 500px;
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 1000;
    font-family: ${p=>p.theme.font.header};

    line-height: 65px;
  }
`;

export const CarouselWrapper = styled.div`
  padding-inline: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const GraphWrapper = styled.div`
  
`;