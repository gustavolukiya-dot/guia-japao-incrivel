import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guia Japão Incrível | Tours Privativos em Português no Japão",
  description: "Tours personalizados em português por guias brasileiros que vivem no Japão há mais de 20 anos. Roteiros sob medida, transporte particular e suporte completo.",
  keywords: "guia japão, tour japão português, viagem japão, guia brasileiro japão, tour privativo japão",
  openGraph: {
    title: "Guia Japão Incrível | Tours Privativos em Português",
    description: "Tours personalizados em português por guias brasileiros que vivem no Japão há mais de 20 anos.",
    url: "https://www.guiajapaoincrivel.com",
    siteName: "Guia Japão Incrível",
    images: [
      {
        url: "https://www.guiajapaoincrivel.com/image/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Guia Japão Incrível",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia Japão Incrível | Tours Privativos em Português",
    description: "Tours personalizados em português por guias brasileiros que vivem no Japão há mais de 20 anos.",
    images: ["https://www.guiajapaoincrivel.com/image/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700&family=Young+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}