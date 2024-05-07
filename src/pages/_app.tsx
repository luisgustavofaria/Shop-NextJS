import { Container, Header } from '@/components/layout/styles';
import { GlobalStyle } from '@/styles';
import logo from '../assets/logo.svg';

import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Image src={logo} alt="" width={130} height={52} priority={true} />
        </Header>
        <Component {...pageProps} />;
      </Container>
    </ThemeProvider>
  );
}
