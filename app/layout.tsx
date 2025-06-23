import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "FortronX | Digital Consultancy in Sri Lanka — Web & Mobile Apps, SEO & More",
  description:
    "FortronX is a leading Sri Lankan digital consultancy offering expert web development, mobile apps, SEO, branding, and full-stack solutions. Get a free consultation today.",
  keywords: [
    "FortronX",
    "Digital Consultancy Sri Lanka",
    "Web Development Sri Lanka",
    "Mobile Apps Sri Lanka",
    "SEO Sri Lanka",
    "Website Design Sri Lanka",
    "Digital Marketing Sri Lanka",
    "Startup Solutions Sri Lanka",
    "IT Consulting Sri Lanka",
  ],
  openGraph: {
    title: "FortronX | Supercharge Your Business in Sri Lanka",
    description:
      "Grow your business online with FortronX. Trusted for web & mobile development, SEO, digital marketing, branding and tech consulting in Sri Lanka.",
    url: "https://www.fortronx.com",
    siteName: "FortronX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FortronX digital consultancy Sri Lanka",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FortronX | Digital Consultancy Sri Lanka",
    description:
      "Transform your digital presence with FortronX — web development, mobile apps, SEO and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.fortronx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*  LocalBusiness JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "FortronX",
              url: "https://www.fortronx.com",
              logo: "https://www.fortronx.com/logo.png",
              image: "https://www.fortronx.com/og-image.jpg",
              description:
                "FortronX is a digital consultancy based in Sri Lanka offering web & mobile development, SEO, branding, and digital marketing services worldwide.",
              telephone: "+94740696389",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Colombo-06",
                addressLocality: "Colombo",
                addressRegion: "Western Province",
                postalCode: "00600",
                addressCountry: "Sri Lanka",
              },
              sameAs: [
                "https://www.facebook.com/fortronx",
                "https://www.linkedin.com/company/fortronx"
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
