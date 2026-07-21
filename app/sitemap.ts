import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.GITHUB_PAGES==="true"?"https://russo-hue.github.io/prospect":"https://prospect-pf.svssolucoes.com.br";return["","/politica-de-privacidade","/termos-de-uso"].map((p)=>({url:base+p,lastModified:new Date(),changeFrequency:p?"yearly":"weekly",priority:p?.8:1}))}
