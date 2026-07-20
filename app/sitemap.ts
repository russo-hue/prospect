import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://prospect-pf.svssolucoes.com.br";return["","/politica-de-privacidade","/termos-de-uso"].map((p)=>({url:base+p,lastModified:new Date(),changeFrequency:p?"yearly":"weekly",priority:p?.8:1}))}
