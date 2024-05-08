import { HomeContainer, Product } from '@/components/home/styles';
import Image from 'next/image';
import camiseta01 from '../assets/camisetas/camiseta01.png';
import camiseta02 from '../assets/camisetas/camiseta02.png';
import camiseta03 from '../assets/camisetas/camiseta03.png';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slideChanged() {},

    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta01} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta02} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
