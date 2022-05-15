import React from 'react';
import Head from 'next/head';
import { ReactComponent } from '@/utils/reactTypes';

interface Props {
  title?: string;
  description?: string;
  logo?: string;
}

export const Layout: ReactComponent<Props> = ({
  children,
  title,
  description,
  logo,
}) => {
  title = title || 'The Noble Quran';
  description =
    description || 'Web version of the noble Quran with easy to use interface';
  logo = logo || '/logo.svg';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href={logo} />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
      </Head>
      {children}
    </>
  );
};
