
// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono, Oswald } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import Script from "next/script" // ✅ import Script
// import "./globals.css"
// import ScrollToTop from "../components/ScrollToTop"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })
// const _oswald = Oswald({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "fdms",
//   description:
//     "FDMS delivers end-to-end digital solutions – from social media and performance marketing to web & app development and branding. Transform your online presence with innovative strategies that drive results.",
//   generator: "v0.app",
//   metadataBase: new URL("https://www.fdms.co.in"),
//   alternates: {
//     canonical: "https://www.fdms.co.in",
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
//         {/* Facebook Pixel */}
//         <Script
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
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
//             `,
//           }}
//         />
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
  title: "fdms",
  description:
    "FDMS delivers end-to-end digital solutions – from social media and performance marketing to web & app development and branding. Transform your online presence with innovative strategies that drive results.",
  generator: "v0.app",
  metadataBase: new URL("https://www.fdms.co.in"),
  alternates: {
    canonical: "https://www.fdms.co.in",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Facebook Pixel (updated) */}
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

        {/* Noscript fallback */}
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
