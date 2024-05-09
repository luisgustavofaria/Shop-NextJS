import { HomeContainer, Product } from '@/components/home/styles';
import Image from 'next/image';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { GetServerSideProps } from 'next';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt=""
            priority
          />

          <footer>
            <strong>{product.name}</strong>
            <span>R$ {product.price.toFixed(2).replace('.', ',')}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe?.products.list({
    expand: ['data.default_price'],
  });

  const products = response?.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const imageUrl =
      product.images && product.images.length > 0 ? product.images[0] : '';

    return {
      id: product.id,
      name: product.name,
      imageUrl: imageUrl,
      price: price.unit_amount !== null ? price.unit_amount / 100 : 0,
    };
  });
  console.log(products);

  return {
    props: {
      products,
    },
  };
};

// const response = await stripe?.products.list({
//   expand: ['data.default_price'],
// });

// const products = response?.data.map((product) => {
//   const price = product.default_price as Stripe.Price;
//   const imageUrl =
//     product.images && product.images.length > 0 ? product.images[0] : null;

//   return {
//     id: product.id,
//     name: product.name,
//     imageUrl: imageUrl,
//     price: price.unit_amount !== null ? price.unit_amount / 100 : 0,
//   };
// });
