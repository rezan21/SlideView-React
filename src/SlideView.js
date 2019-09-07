import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import Toggle from './Toggle';
const Wrapper = styled.div``;
const Page = styled.div`
  width: 100%;
`;
export default class SlideView extends React.Component {
  render() {
    return (
      <Wrapper className='slide-wrapper'>
        <Slider
          speed={300}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
        >
          <Page>
            <img src={image1} alt='' style={slidesStyle} />
            <p style={{ textAlign: 'center' }}>Image 1</p>
          </Page>

          <Page>
            <img src={image2} alt='' style={slidesStyle} />
            <p style={{ textAlign: 'center' }}>Image 2</p>
          </Page>
          <Page>
            <img src={image3} alt='' style={slidesStyle} />
            <p style={{ textAlign: 'center' }}>Image 3</p>
          </Page>
          <Toggle />
        </Slider>
      </Wrapper>
    );
  }
}
const slidesStyle = {
  width: 'auto',
  height: '80vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '0',
  marginBottom: '0'
};
