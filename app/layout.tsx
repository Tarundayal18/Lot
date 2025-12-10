


// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono, Oswald } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import Script from "next/script"
// import "./globals.css"
// import ScrollToTop from "../components/ScrollToTop"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })
// const _oswald = Oswald({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Little Other Things Franchise ",
//   description:
//     "Grow with Our Business Opportunity",
//   generator: "v0.app",
//   metadataBase: new URL("https://franchisee.littleotherthings.com/"),
//   alternates: {
//     canonical: "https://franchisee.littleotherthings.com/",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Facebook Pixel (updated) */}
//         <Script id="fb-pixel" strategy="afterInteractive">
//           {`
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');
//             fbq('init', '866709395760162');
//             fbq('track', 'PageView');
//           `}
//         </Script>

//         {/* Noscript fallback */}
//         <noscript>
//           <img
//             height="1"
//             width="1"
//             style={{ display: "none" }}
//             src="https://www.facebook.com/tr?id=866709395760162&ev=PageView&noscript=1"
//           />
//         </noscript>
//       </head>

//       <body className={`font-sans antialiased`}>
//         {children}
//         <Analytics />
//         <ScrollToTop />
//       </body>
//     </html>
//   )
// }


import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import ScrollToTop from "../components/ScrollToTop"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Little Other Things Franchise ",
  description: "Grow with Our Business Opportunity",
  generator: "v0.app",
  metadataBase: new URL("https://franchisee.littleotherthings.com/"),
  alternates: {
    canonical: "https://franchisee.littleotherthings.com/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W86XBSDLPV"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W86XBSDLPV');
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '866709395760162');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* FB Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=866709395760162&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  )
}
