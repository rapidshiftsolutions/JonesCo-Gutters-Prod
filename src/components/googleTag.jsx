import { GoogleAnalytics } from '@next/third-parties/google'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="AW-16543948897" />
    </html>
  )
}