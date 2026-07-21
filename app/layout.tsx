import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const publicBaseUrl = isGitHubPages
  ? "https://prospect.vnftisolutions.com.br"
  : "https://prospect-pf.svssolucoes.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(publicBaseUrl),
  title: { default: "Prospect PF | Captação automotiva", template: "%s | Prospect PF" },
  description: "Sistema de captação de veículos para lojas, garagistas e equipes de compras.",
  applicationName: "Prospect PF",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Prospect PF", title: "Seu funcionário digital para captação de veículos", description: "Centralize buscas, oportunidades e contatos em um único processo.", images: [{ url: `${publicBaseUrl}/og.png`, width: 1536, height: 1024, alt: "Prospect PF - sistema de captação de veículos" }] },
  twitter: { card: "summary_large_image", title: "Prospect PF", description: "Tecnologia para captação automotiva.", images: [`${publicBaseUrl}/og.png`] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#070b19", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
