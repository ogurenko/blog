import Script, { ScriptProps } from "next/script";

// Load Analytics , global site tag (gtag.js) - Google Analytics
export const Analytics = (props: ScriptProps) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',
              { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
};
