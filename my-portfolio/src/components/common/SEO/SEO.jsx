import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Onkar Dehane - Senior Full-Stack Developer',
  description = 'Senior Full-Stack Developer specializing in Java Spring Boot, Angular, and cloud-native solutions.',
  image = '/assets/images/og-image.jpg',
  url = 'https://onkardehane.github.io/portfolio'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
