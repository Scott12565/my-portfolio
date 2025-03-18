import Head from 'next/head';

const MetaTags = () => {
  return (
    <Head>
      <title>Nkosinathi Silinda's Portfolio - Web Developer</title>
      <meta name="description" content="Personal portfolio of Nkosinathi Silinda (Scott), a passionate web developer. Showcasing skills in Next.js, Tailwind CSS, React, MongoDB, and more." />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Nkosinathi Silinda's Portfolio - Web Developer" />
      <meta property="og:description" content="Personal portfolio of Nkosinathi Silinda (Scott), a passionate web developer. Showcasing skills in Next.js, Tailwind CSS, React, MongoDB, and more." />
      <meta property="og:url" content="https://nkosnathi-m-silinda.onrender.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Nkosinathi Silinda's Portfolio - Web Developer" />
      <meta name="twitter:description" content="Personal portfolio of Nkosinathi Silinda (Scott), a passionate web developer. Showcasing skills in Next.js, Tailwind CSS, React, MongoDB, and more." />
      
      {/* Canonical Link */}
      <link rel="canonical" href="https://nkosnathi-m-silinda.onrender.com" />
    </Head>
  );
};

export default MetaTags;
