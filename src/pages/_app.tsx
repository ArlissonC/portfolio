import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfólio | Arlisson Costa - Desenvolvedor Front-end</title>
        <meta
          name="google-site-verification"
          content="vVnMGXO52-j1-rjcLtO83tlmk8_SU_30hogplCwRAms"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Desenvolvedor com foco em Front-end utilizando React e Next.js."
        />
        <meta
          name="keywords"
          content="sites, sistemas web, desenvolvimento, frontend, arlisson costa, programador, arlisson, front-end, freelancer, freela, website, portfolio"
        />
        <meta name="author" content="Arlisson Costa" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
