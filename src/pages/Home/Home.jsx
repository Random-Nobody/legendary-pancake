import { Wrapper, Banner, CarouselWrapper, GraphWrapper } from './Home.styles';
import Spacer from 'components/Spacer';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Carousel from 'components/Carousel/Carousel';
import LineGraph from 'components/LineGraph/LineGraph';

const PlaceholderData = {
  x: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
  y: [0, 5, 7, 2, 3, 5, 1, 2, 6, 7, 14, 17, 23, 32, 29, 40]
}

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Banner backaground='url("/atlas/Generic-View.png")' >
        <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/red-brick.gif" alt="red brick" />
        <div>
          get your first atlas™ property and become a blah blah blah blah
        </div>
      </Banner>
      <Spacer h='10px' />
      <CarouselWrapper>
        <Spacer h='30px' />
        NFT Tiers
        <Spacer h='20px' />
        <Carousel>
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/gold-brick.gif" alt='gold' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/silver-brick.gif" alt='silver' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/bronze-brick.gif" alt='bronze' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/red-brick.gif" alt='red' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/gold-brick.gif" alt='gold' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/silver-brick.gif" alt='silver' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/bronze-brick.gif" alt='bronze' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/red-brick.gif" alt='red' />
        </Carousel>
        <Spacer h='20px' />
      </CarouselWrapper>
      <Spacer h='20px' />
      <GraphWrapper>
        <LineGraph
          data={[
            {
              name: 'pricing trend',
              type: 'scatter',
              ...PlaceholderData,
              mode: 'lines',
              marker: { color: theme.primary },
            },
            {
              name: 'pricing history',
              type: 'bar',
              ...PlaceholderData,
              marker: { color: theme.primaryFaded }
            }
          ]}
          layout={{
            showlegend: false,
            width: 1000,
            height: 600,
            title: 'Pricing History',
            font: { color: theme.onBackground },
            paper_bgcolor: '#0000',
            plot_bgcolor: '#0000',
            xaxis: {
              dtick: 5
            },
            yaxis: {
              dtick: 10,
              title: {
                text: 'CAD',
                font: { color: theme.onBackground }
              }
            }
          }}
        />
      </GraphWrapper>
    </Wrapper>
  )
}
