import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),

  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    title: 'Twitter Title',
    description: 'Twitter Description',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
