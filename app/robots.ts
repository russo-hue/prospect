import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots():MetadataRoute.Robots{const base=process.env.GITHUB_PAGES==="true"?"https://russo-hue.github.io/prospect":"https://prospect-pf.svssolucoes.com.br";return{rules:{userAgent:"*",allow:"/"},sitemap:`${base}/sitemap.xml`}}
