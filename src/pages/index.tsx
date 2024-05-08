import { HomeContainer, Product } from '@/components/home/styles';
import Image from 'next/image';
import camiseta01 from '../assets/camisetas/camiseta01.png';
import camiseta02 from '../assets/camisetas/camiseta02.png';
import camiseta03 from '../assets/camisetas/camiseta03.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta01} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta02} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta03} width={520} height={480} alt="" priority />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
