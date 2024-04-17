import { Head, Html, Main, NextScript } from 'next/document'

import Script from 'next/script'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <Script className='z-auto'
          data-jsd-embedded
          data-key="4620f160-e644-41bc-8719-d55570fa3bc8"
          data-base-url="https://jsd-widget.atlassian.com"
          src="https://jsd-widget.atlassian.com/assets/embed.js"
        />
      </Head>
      <body className="flex h-full flex-col z-0">
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
