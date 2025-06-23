import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "AI Interface Example",
  description:
    "AI Interface Example Description"
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
