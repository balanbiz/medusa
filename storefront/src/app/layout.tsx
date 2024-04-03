import { Metadata } from "next"
import { cookies } from "next/headers"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="dark"
      data-theme="dark"
      className={cookies().get("theme") ? "dark" : "light"}
    >
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
