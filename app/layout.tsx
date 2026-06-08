import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ApplyPilot MVP',
  description: 'Resume-based job fit scoring and ATS resume tailoring.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
