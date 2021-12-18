import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import variables from '../styles/scss/Home.module.scss';
import carlos1 from '../public/carlos1.jpg';
import carlos2 from '../public/carlos2.jpg';
import carlos3 from '../public/carlos3.jpg';

export default function MyCarousel({ activeindex, onselect }) {
  return (
    <Carousel activeIndex={activeindex} onSelect={onselect}>
      <Carousel.Item>
        <Image
          className="d-block w-100 img-fluid"
          src={carlos1}
          alt="carlos-kenobi-VJURCYJpL2Y-unsplash.jpg(courtesy:unsplash.com)"
          loading="eager"
        />
        <Carousel.Caption className={variables.bgTrans}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 img-fluid"
          src={carlos2}
          alt="carlos-kenobi-gPGQAzbkvto-unsplash.jpg(courtesy:unsplash.com)"
          loading="eager"
        />

        <Carousel.Caption className={variables.bgTrans}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 img-fluid"
          src={carlos3}
          alt="carlos-kenobi-6Cg1yxoHv5I-unsplash.jpg(courtesy:unsplash.com)"
          loading="eager"
        />

        <Carousel.Caption className={variables.bgTrans}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
