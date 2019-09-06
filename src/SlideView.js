import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';

const Wrapper = styled.div`
  width: 700px;
  margind: 0;
  padding: 0;
`;
const Page = styled.div`
  width: 100%;
  margind: 0;
  padding: 0;
`;
export default class SlideView extends React.Component {
  render() {
    return (
      <Wrapper>
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={false}
          dots={true}
        >
          <Page>
            <img src={image1} style={slidesStyle} />
          </Page>
          <Page>
            <img src={image2} style={slidesStyle} />
          </Page>
          <Page>
            <img src={image3} style={slidesStyle} />
          </Page>
        </Slider>
      </Wrapper>
    );
  }
}
const slidesStyle = {
  width: 'auto',
  height: '88vh',
  margin: 'auto'
};
