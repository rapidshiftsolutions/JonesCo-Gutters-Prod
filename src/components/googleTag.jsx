import { GoogleTagManager } from '@next/third-parties/google'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-16543948897" />
      <body>{children}</body>
    </html>
  )
}