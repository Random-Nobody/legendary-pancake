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
  background-image: url('/atlas/Aerial-View-New.png');
  background-size: cover;

  display: flex;
  justify-content: space-around;
  align-items: center;

  >img{
    width: 500px;
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