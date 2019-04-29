import NextSeo from 'next-seo';
import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import './globalStyles.css';

const title = "Carlos Galarza's website";
const description =
  'Senior Software Engineer. I love to help people by creating tools using the Web Platform and the cloud.';

const DEFAULT_SEO = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_EN',
    url: 'https://carloslfu.github.io',
    title,
    description,
    image: '/static/profile.png',
    site_name: title,
    imageWidth: 500,
    imageHeight: 488,
  },
  twitter: {
    handle: '@carloslfu',
    cardType: 'summary_large_image',
  },
};

export default class extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public componentDidMount() {}

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={DEFAULT_SEO} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
