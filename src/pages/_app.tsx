import { Container, Header } from '@/components/layout/styles';
import { GlobalStyle } from '@/styles';
import logo from '../assets/logo.svg';

import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Image from 'next/image';
import RouterMounting from '@/components/layout/errorNextImage/useClient';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterMounting>
        <Container>
          <Header>
            <Link href={'/'}>
              <Image
                src={logo}
                alt=""
                width={130}
                height={52}
                blurDataURL={'../assets/logo.svg'}
              />
            </Link>
          </Header>
          <Component {...pageProps} />;
        </Container>
      </RouterMounting>
    </ThemeProvider>
  );
}
