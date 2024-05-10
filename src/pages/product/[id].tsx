import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/components/products/styles';

import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { GetStaticProps } from 'next';
import Image from 'next/image';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    }; // arrumar bug do params.id
  }
  const productId = params.id;

  const product = await stripe?.products.retrieve(productId, {
    expand: ['default_price'],
  });
  if (!product) {
    return {
      notFound: true,
    };
  }

  const price = product.default_price as Stripe.Price;
  const imageUrl =
    product.images && product.images.length > 0 ? product.images[0] : '';

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: imageUrl,
        price: price.unit_amount !== null ? price.unit_amount / 100 : 0,
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
