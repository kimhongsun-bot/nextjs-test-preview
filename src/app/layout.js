import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const baseWebUrl = headers().get('host');

  const image = 'https://' + baseWebUrl + '/pccs.svg'
  return {
    metadataBase: new URL(image),
    title: "PCCS",
    description: "Preach Chan Cleaning Service is one of the well-known cleaning service providers known for quality, responsibility and affordability.",
    openGraph: {
      title: `PCCS`,
      description: "Preach Chan Cleaning Service is one of the well-known cleaning service providers known for quality, responsibility and affordability.",
      url: 'pccs.app',
      siteName: 'pccs.app',
      images: [
        {
          url: image,
          width: 300,
          height: 150,
          type: 'image/png',
        },
      ],
      type: 'website',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
