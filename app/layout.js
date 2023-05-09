import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  metadataBase: new URL('metadata-og-test-demo.vercel.app'),

  alternates: {
    canonical: './',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
