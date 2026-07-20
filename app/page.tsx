import type { Metadata } from "next";
import { ProspectLanding } from "./prospect-client";

export const metadata: Metadata = {
  title: "Prospect PF | Sistema de Captação de Veículos para Lojas",
  description: "Automatize a busca e a organização de anúncios de veículos de pessoas físicas. Centralize oportunidades, contatos e acompanhamento com o Prospect PF.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <ProspectLanding />;
}
