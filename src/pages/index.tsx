import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Messaging Interface</title>
        <meta name='description' content='Frontend exercise for developpers who want to join leboncoin'></meta>
      </Head>
      <p>leboncoin</p>
    </>
  );
};

export default Home;
