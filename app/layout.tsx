import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "carnation.exe",
  description:
    "Carnation.exe – Contemporary English Poetry AI (English version), built for exhibition by Halim Madi."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Courier, monospace' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
