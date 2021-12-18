import { useState } from 'react';
import { Container } from 'react-bootstrap';
import MyCarousel from './Carousel';
import variables from '../styles/scss/Home.module.scss';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container id="home">
      <h1 className={variables.title}>Welcome to Next.js!</h1>
      <MyCarousel activeindex={index} onselect={handleSelect} />
    </Container>
  );
}
